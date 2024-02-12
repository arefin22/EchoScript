"use client";
import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { axiosPublic } from "@/utils/useAxiosPublic";
import { useAuth } from "@/context/authContext";
import Swal from "sweetalert2";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Preference = () => {
  const [category, setCategory] = useState(null);
  const [inputValue, setInputValue] = useState("");
    const [tags, setTags] = useState([]);
     const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const Router = useRouter();
    
  const user = useAuth();
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

  const handleCategory = (selectedOption) => {
    setCategory(selectedOption);
    checkButtonState(selectedOption, tags);
  };
  const animatedComponents = makeAnimated();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

 const handleKeyDown = (e) => {
   if (e.key === "Enter" || e.key === ",") {
     e.preventDefault();
     const tag = inputValue.trim();
     if (tag) {
       setTags([...tags, tag]);
       setInputValue("");
       checkButtonState(category, [...tags, tag]);
     }
   }
 };

 const handleRemoveTag = (tagToRemove) => {
   setTags(tags.filter((tag) => tag !== tagToRemove));
   checkButtonState(
     category,
     tags.filter((tag) => tag !== tagToRemove)
   );
 };

 const checkButtonState = (category, tags) => {
   if (category && tags.length > 0) {
     setIsButtonDisabled(false);
   } else {
     setIsButtonDisabled(true);
   }
 };
  const saveData = async () => {
    try {
      // Get editor content from local storage
      const editorContent = JSON.parse(localStorage.getItem("editorDraft"));

      // Prepare data object to send to the server
      const articleInfo = {
        authorEmail: user.user?.email,
        like: 0,
        comment: 0,
        share: 0,
        category: category.value,
        tags: tags,
      };

        const texteditor = { editorContent, ...articleInfo };
      // Send data to the server
      const response = await axiosPublic.post("/textArticle", { texteditor });
      console.log(response);
      // Handle response
        if (response.status === 200) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Article has been saved",
            showConfirmButton: false,
            timer: 3000,
          });
        localStorage.removeItem("editorDraft");
        setCategory(null);
            setTags([]);
            Router.replace("/dashboard/write");
      } else {
        console.error("Failed to save data.");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };
  return (
    <>
      <div className="w-full text-center mb-10">
        <Link href="/dashboard/write">
          <button
            className={`bg-[#025] text-white px-12 py-3 rounded-3xl mt-3`}
          >
            Back to Editor
          </button>
        </Link>
      </div>
      <Select
        closeMenuOnSelect
        components={animatedComponents}
        options={options}
        value={category}
        onChange={handleCategory}
        placeholder="Select your favorite category"
        className="w-full border-[#4C2F17] text-black"
        styles={{
          control: (provided, state) => ({
            ...provided,
            border: state.isFocused ? "2px solid #4C2F17" : "2px solid #4C2F17",
            borderRadius: "24px",
            padding: "12px",
            boxShadow: "none",
            "&:hover": {
              borderColor: state.isFocused ? "#4C2F17" : "#ccc",
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
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type tags and press Enter or comma"
          className="w-full mt-10 p-4 border-2 rounded-3xl border-[#4C2F17] text-black hover:border-[#ccc]"
        />
        <div className="flex flex-row gap-5 p-5 w-full flex-wrap">
          {tags.map((tag, index) => (
            <div key={index} className="tag bg-gray-300 py-2 px-4 rounded-2xl">
              {tag}
              <button onClick={() => handleRemoveTag(tag)} className="ml-3">
                &times;
              </button>
            </div>
          ))}
        </div>
        <div className="w-full text-center">
          <button
            onClick={saveData}
            disabled={isButtonDisabled}
            className="bg-[#025] text-white px-12 py-3 rounded-3xl mt-3"
            style={
              isButtonDisabled ? { opacity: 0.5, cursor: "not-allowed" } : {}
            }
          >
            Publish Article
          </button>
        </div>
      </div>
    </>
  );
};

export default Preference;
