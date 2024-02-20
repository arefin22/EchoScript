"use client";
import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import ImageTool from "@editorjs/image";
import CodeTool from "@editorjs/code";
import { axiosPublic } from "@/utils/useAxiosPublic";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useAuth } from "@/context/authContext";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const ArticleEdit = ({ params }) => {
  const [isLoading, setIsLoading] = useState(false);
  const ejInstance = useRef();
  const [isDraftExist, setIsDraftExist] = useState(false);
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=78e1a9dbe573d8923a63de7e43c7a68b`;

  // Preference part
  const [categoryEdit, setCategoryEdit] = useState(null);
  const [inputValueEdit, setInputValueEdit] = useState("");
  const [tagsEdit, setTagsEdit] = useState([]);
  const [mainTitleEdit, setMainTitleEdit] = useState("");
  const [thumbnailEdit, setThumbnailEdit] = useState(null);
  const [thumbnailUrlEdit, setThumbnailUrlEdit] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const user = useAuth();
  const Router = useRouter();

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      minHeight: "200px",
      onReady: () => {
        ejInstance.current = editor;
        loadDraft();
      },

      onChange: async () => {
        saveDraft();
      },
      autofocus: true,
      tools: {
        header: {
          class: Header,
          config: {
            placeholder: "Enter a header",
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 3,
          },
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
          config: {
            placeholder: "Enter a Paragraph",
          },
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        code: CodeTool,
        image: {
          class: ImageTool,
          config: {
            uploader: {
              async uploadByFile(file) {
                try {
                  const formData = new FormData();
                  formData.append("image", file);
                  const response = await axiosPublic.post(
                    image_hosting_api,
                    formData,
                    {
                      headers: {
                        "Content-Type": "multipart/form-data",
                      },
                    }
                  );
                  if (response.data.success === true) {
                    return {
                      success: 1,
                      file: {
                        url: response.data.data.display_url,
                      },
                    };
                  } else {
                    return {
                      success: 0,
                      file: {
                        url: null,
                      },
                    };
                  }
                } catch (error) {
                  console.error("Error uploading image:", error);
                  return {
                    success: 0,
                    file: {
                      url: null,
                    },
                  };
                }
              },
              async uploadByUrl(url) {
                try {
                  const formData = new FormData();
                  formData.append("image", url);
                  const response = await axiosPublic.post(
                    image_hosting_api,
                    formData,
                    {
                      headers: {
                        "Content-Type": "multipart/form-data",
                      },
                      url,
                    }
                  );

                  if (response.data.success === true) {
                    return {
                      success: 1,
                      file: {
                        url: response.data.data.display_url,
                      },
                    };
                  } else {
                    return {
                      success: 0,
                      file: {
                        url: null,
                      },
                    };
                  }
                } catch (error) {
                  console.error("Error uploading image by URL:", error);
                  return {
                    success: 0,
                    file: {
                      url: null,
                    },
                  };
                }
              },
            },
            inlineToolbar: true,
          },
        },
      },
    });
  };

  const saveDraft = async () => {
    try {
      if (ejInstance.current) {
        const content = await ejInstance.current.saver.save();
        localStorage.setItem("editArticle", JSON.stringify(content));
        setIsDraftExist(content.blocks.length > 0);
      } else {
        // console.error("Editor instance is undefined. Cannot save draft.");
      }
    } catch (error) {
      console.error("Error saving draft:", error);
    }
  };

  const loadDraft = () => {
    const draftContent = localStorage.getItem("editArticle");

    if (draftContent && ejInstance.current) {
      try {
        const parsedContent = JSON.parse(draftContent);
        setMainTitleEdit(parsedContent.articleTitle);
        setThumbnailUrlEdit(parsedContent.thumbnail);
        const formattedCategory = {
          value: parsedContent.category,
          label: parsedContent.category,
        };
        setCategoryEdit(formattedCategory);
        setTagsEdit(parsedContent.tags);
        ejInstance.current.render({
          blocks: parsedContent.editorContent.blocks,
          time: parsedContent.editorContent.time,
          version: parsedContent.editorContent.version,
        });
        setIsDraftExist(parsedContent.editorContent.blocks.length > 0);
      } catch (error) {
        console.error("Error parsing draft content:", error);
      }
    }
  };

  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }

    return () => {
      saveDraft();
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  // initEditor();

  // Preference part
  const options = [
    { value: "Tech", label: "Tech" },
    { value: "Business", label: "Business" },
    { value: "Sports", label: "Sports" },
    { value: "Health", label: "Health" },
    { value: "Travel", label: "Travel" },
    { value: "Photography", label: "Photography" },
    { value: "Food", label: "Food" },
    { value: "Relationships", label: "Relationships" },
    { value: "Design", label: "Design" },
    { value: "Arts", label: "Arts" },
    { value: "Vehicles", label: "Vehicles" },
  ];

  // Main title section
  const handleMainTextInputChange = (e) => {
    const newMainTitleEdit = e.target.value;
    setMainTitleEdit(newMainTitleEdit);

    if (newMainTitleEdit.length === 0) {
      localStorage.removeItem("mainTitleEdit");
    } else {
      localStorage.setItem("mainTitleEdit", newMainTitleEdit);
    }
  };

  // Article thumbnail section
  const handleThumbnailChange = async (e) => {
    const selectedFile = e.target.files[0];
    setThumbnailEdit(selectedFile);
    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const response = await axiosPublic.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Image uploaded successfully:", response.data);
      setThumbnailUrlEdit(response.data.data.display_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // Category select
  const handleCategory = (selectedOption) => {
    setCategoryEdit(selectedOption);
    // checkButtonState(selectedOption, tags);
  };
  const animatedComponents = makeAnimated();

  // Function to handle adding a tag
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const tag = inputValueEdit.trim();
      if (tag) {
        const updatedTagsEdit = [...tagsEdit, tag];
        setTagsEdit(updatedTagsEdit);
        setInputValueEdit("");
        setIsButtonDisabled(false);
      }
    }
  };

  // Function to handle removing a tag
  const handleRemoveTag = (tagToRemove) => {
    const updatedTagsEdit = tagsEdit.filter((tag) => tag !== tagToRemove);
    setTagsEdit(updatedTagsEdit);

    if (updatedTagsEdit.length === 0) {
      localStorage.removeItem("tagsEdit");
      setIsButtonDisabled(true);
    } else {
      localStorage.setItem("tagsEdit", JSON.stringify(updatedTagsEdit));
    }
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValueEdit(e.target.value);
  };

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedMainTitleEdit = localStorage.getItem("mainTitleEdit");
    const storedThumbnailUrlEdit = localStorage.getItem("thumbnailUrlEdit");
    const storedCategoryEdit = JSON.parse(localStorage.getItem("categoryEdit"));
    const storedTagsEdit = JSON.parse(localStorage.getItem("tagsEdit"));

    if (storedMainTitleEdit) setMainTitleEdit(storedMainTitleEdit);
    if (storedThumbnailUrlEdit) setThumbnailUrlEdit(storedThumbnailUrlEdit);
    if (storedCategoryEdit) setCategoryEdit(storedCategoryEdit);
    if (storedTagsEdit) setTagsEdit(storedTagsEdit);
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (mainTitleEdit) localStorage.setItem("mainTitleEdit", mainTitleEdit);
    if (thumbnailUrlEdit)
      localStorage.setItem("thumbnailUrlEdit", thumbnailUrlEdit);
    if (categoryEdit)
      localStorage.setItem("categoryEdit", JSON.stringify(categoryEdit));
    if (tagsEdit?.length > 0)
      localStorage.setItem("tagsEdit", JSON.stringify(tagsEdit));
  }, [mainTitleEdit, thumbnailUrlEdit, categoryEdit, tagsEdit]);

  // Save thumbnail data to localStorage whenever it changes
  useEffect(() => {
    if (thumbnailEdit) {
      const thumbnailUrlEdit = URL.createObjectURL(thumbnailEdit);
      localStorage.setItem("thumbnailUrlEdit", thumbnailUrlEdit);
      setThumbnailUrlEdit(thumbnailUrlEdit);
    }
  }, [thumbnailEdit]);

  // Function to check if all required data is present in local storage
  const checkLocalStorageData = () => {
    const storedMainTitleEdit = localStorage.getItem("mainTitleEdit");
    const storedThumbnailUrlEdit = localStorage.getItem("thumbnailUrlEdit");
    const storedCategoryEdit = JSON.parse(localStorage.getItem("categoryEdit"));
    const storedTagsEdit = JSON.parse(localStorage.getItem("tagsEdit"));
    const storedEditorDraft = localStorage.getItem("editArticle");

    // Check if all required data is present
    return (
      storedMainTitleEdit &&
      storedThumbnailUrlEdit &&
      storedCategoryEdit &&
      storedTagsEdit &&
      storedEditorDraft
    );
  };

  // Call the checkLocalStorageData function to determine button disabled state
  const isButtonDisabledLocal = !checkLocalStorageData();

  const saveData = async () => {
    try {
      setIsLoading(true);

      // Get editor content from local storage
      const editorContent = JSON.parse(localStorage.getItem("editArticle"));

      const articleInfo = {
        articleTitle: mainTitleEdit,
        thumbnail: thumbnailUrlEdit,
        authorEmail: user.user?.email,
        category: categoryEdit.value,
        tags: tagsEdit,
      };

      const texteditor = { editorContent, ...articleInfo };
      // Send data to the server
      const response = await axiosPublic.put(
        `/textArticle/update/${params.edit}`,
        {
          texteditor,
        }
      );

      // Handle response
      if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Article has been saved",
          showConfirmButton: false,
          timer: 3000,
        });
        Router.replace("/dashboard/articles");
        // Remove draft content from localStorage
        localStorage.removeItem("editArticle");
        localStorage.removeItem("thumbnailUrlEdit");
        localStorage.removeItem("categoryEdit");
        localStorage.removeItem("mainTitleEdit");
        localStorage.removeItem("tagsEdit");
      } else {
        console.error("Failed to save data.");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:gap-10 w-full">
        <div id="editorjs" className="lg:w-2/3"></div>
        <div className="lg:w-1/3">
          <div className="lg:sticky top-0 ...">
            <h2>Important Info</h2>
            <div>
              <input
                type="text"
                onChange={handleMainTextInputChange}
                placeholder="Type you Main Title (required)"
                className="w-full mt-5 p-4 border-2 rounded-3xl border-[#ccc] text-black hover:border-[#4C2F17]"
                value={mainTitleEdit}
                // onChange={(e) => setMainTitle(e.target.value)}
              />
            </div>
            <br />
            <div className="mb-10">
              <label>Select your article thumbnail (required)</label>
              <input
                type="file"
                className="file-input file-input-ghost w-full border-2 rounded-3xl border-[#ccc] text-black hover:border-[#4C2F17]"
                onChange={handleThumbnailChange}
              />
              {thumbnailUrlEdit && (
                <img src={thumbnailUrlEdit} alt="Thumbnail" />
              )}
            </div>
            <div>
              <Select
                closeMenuOnSelect
                components={animatedComponents}
                options={options}
                value={categoryEdit}
                onChange={handleCategory}
                placeholder="Select your favorite category (required)"
                className="w-full hover:border-[#4C2F17] text-black"
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    border: state.isFocused
                      ? "2px solid #4C2F17"
                      : "2px solid #ccc",
                    borderRadius: "24px",
                    padding: "12px",
                    boxShadow: "none",
                    "&:hover": {
                      borderColor: "#4C2F17",
                    },
                  }),
                  menu: (provided) => ({
                    ...provided,
                    borderRadius: "3xl",
                    border: "2px solid #ccc",
                    boxShadow: "none",
                  }),
                }}
              />
              <div>
                <input
                  type="text"
                  value={inputValueEdit}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Add tags and press Enter or comma (required)"
                  className="w-full mt-10 p-4 border-2 rounded-3xl border-[#ccc] text-black hover:border-[#4C2F17]"
                />
                <div className="flex flex-row gap-5 p-5 w-full flex-wrap">
                  {/* Map over tags and display each tag */}
                  {tagsEdit?.map((tag, index) => (
                    <div
                      key={index}
                      className="tag bg-gray-300 py-2 px-4 rounded-2xl"
                    >
                      {tag}
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-3"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full text-center">
              <button
                className={`bg-[#025] text-white px-12 py-3 rounded-3xl mt-3 ${
                  !isDraftExist ||
                  isButtonDisabledLocal ||
                  isButtonDisabled ||
                  isLoading
                    ? "disabled"
                    : ""
                }`}
                disabled={
                  !isDraftExist ||
                  isButtonDisabledLocal ||
                  isButtonDisabled ||
                  isLoading
                }
                onClick={saveData}
                style={
                  !isDraftExist ||
                  isButtonDisabledLocal ||
                  isButtonDisabled ||
                  isLoading
                    ? { opacity: 0.5, cursor: "not-allowed" }
                    : {}
                }
              >
                {isLoading ? "Updating Article..." : "Update Article"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleEdit;
