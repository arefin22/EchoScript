"use client";
import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import ImageTool from "@editorjs/image";
import CodeTool from "@editorjs/code";
import "./TextEditor.css";
import { axiosPublic } from "@/utils/useAxiosPublic";
import { axiosSecure } from "@/utils/useAxiosSecure";

const TextEditor = () => {
  const ejInstance = useRef();

  const image_hosting_api = `https://api.imgbb.com/1/upload?key=78e1a9dbe573d8923a63de7e43c7a68b`;

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      minHeight: "200px",
      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      // onChange: async () => {
      //   let content = await editor.saver.save();
      //   console.log(content);
      // },
      tools: {
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
          config: {
            placeholder: "Enter a Paragraph",
          },
        },
        header: {
          class: Header,
          config: {
            placeholder: "Enter a header",
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 3,
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
        // image: {
        //   class: ImageTool,
        //   config: {
        //     uploader: {
        //       async uploadByFile(file) {
        //         const formData = new FormData();
        //         formData.append("file", file);
        //         const response = await axios.post(
        //           `https://api.imgbb.com/1/upload?key=a5d06824c299fd320f49135dcd5fa3dd`,
        //           formData,
        //           {
        //             headers: {
        //               "Content-Type": "multipart/form-data",
        //             },
        //             withCredentials: false,
        //           }
        //         );

        //         if (response.data.success === 1) {
        //           return response.data;
        //         }
        //       },
        //       async uploadByUrl(url) {
        //         const response = await axios.post(
        //           `https://api.imgbb.com/1/upload?key=a5d06824c299fd320f49135dcd5fa3dd`,
        //           {
        //             url,
        //           }
        //         );

        //         if (response.data.success === 1) {
        //           return response.data;
        //         }
        //       },
        //     },
        //     inlineToolbar: true,
        //   },

        // },

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
              // async uploadByUrl(url) {
              //   const response = await axios.post(
              //     "https://api.imgbb.com/1/upload?key=a5d06824c299fd320f49135dcd5fa3dd",
              //     {
              //       url,
              //     }
              //   );

              //   if (response.data.success === 1) {
              //     return {
              //       success: 1,
              //       file: {
              //         url: response.data.data.url,
              //       },
              //     };
              //   } else {
              //     return {
              //       success: 0,
              //       file: {
              //         url: null,
              //       },
              //     };
              //   }
              // },
            },
            inlineToolbar: true,
          },
        },
      },
    });
  };

  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  // initEditor();

  const handleSave = async () => {
    const content = await ejInstance.current.saver.save();
    console.log(content);

    const texteditor = content?.blocks

    axiosSecure.post("/textArticle", { texteditor });

    try {
      // const response = await axios.post("/api/saveArticle", { content });

      if (response.data.success) {
        console.log("Article saved successfully.");
      } else {
        console.error("Failed to save article.");
      }
    } catch (error) {
      console.error("Error saving article:", error);
    }
  };
  // const handleSave = async () => {
  //   if (ejInstance.current) {
  //     const content = await ejInstance.current.saver.save();
  //     console.log(content);
  //   } else {
  //     console.error("Editor instance not available.");
  //   }
  // };

  return (
    <>
      <div id="editorjs" className="border-black-500 border-2"></div>
      <div className="w-full text-center">
        <button
          className="bg-[#025] text-white px-12 py-3 rounded-3xl mt-3"
          onClick={handleSave}
        >
          Save Data
        </button>
      </div>
    </>
  );
};

export default TextEditor;
