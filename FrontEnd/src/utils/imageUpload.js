"use client"
import axios from 'axios'
export const imageUpload = async (image) => {
    try {
      const formData = new FormData();
      formData.append('image', image);
      const { data } = await axios.post("https://api.imgbb.com/1/upload?key=a5d06824c299fd320f49135dcd5fa3dd", formData);
      return data.data.display_url;
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle the error, perhaps by returning a default URL or showing a user-friendly message
      return null;
    }
  };
  