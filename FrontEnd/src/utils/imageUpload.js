"use client"
import axios from 'axios'
export const imageUpload = async (image) => {
    try {
      const formData = new FormData();
      formData.append('image', image);
      const { data } = await axios.post(
        "https://api.imgbb.com/1/upload?key=78e1a9dbe573d8923a63de7e43c7a68b",
        formData
      );
      return data.data.display_url;
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle the error, perhaps by returning a default URL or showing a user-friendly message
      return null;
    }
  };
  