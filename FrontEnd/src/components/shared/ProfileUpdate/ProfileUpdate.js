"use client"
import React from 'react';
import EditData from "@/components/ui/EditData";

import { useRouter } from "next/navigation";
import  { useState } from "react";
import toast from "react-hot-toast";

import { FaUserEdit } from "react-icons/fa";

const ProfileUpdate = ({data, id, setUpdate }) => {
    const router = useRouter();
    const handleSubmit = (e) => {
        try {
          e.preventDefault();
          const form = e.target;
          const role = form?.role?.value;
          const name = form?.name?.value;
          const userData = {  name, role };
          EditData({ id: id, setUpdate: setUpdate, data: userData })
            toast("user updated");
          document.getElementById(`my_modal_${id}`).close();
          router.replace("/dashboard/profile");
        } catch (err) {
          console.log(err);
        }
      };
    return (
        <div>
        <button
          className="text-black "
          onClick={() => document.getElementById(`my_modal_${id}`).showModal()}
        >
          <FaUserEdit />
        </button>
        <dialog id={`my_modal_${id}`} className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6 my-6">
                <div className="md:w-2/5 mx-auto">
                  <input
                    type="text"
                    name="name"
                    defaultValue={data?.name}
                    placeholder={data?.name}
                    className="w-full px-4 py-3 border-2 rounded-3xl border-[#ccc] text-black hover:border-[#4C2F17]"
                  />
                </div>
              </div>
              <div className="space-y-6 my-6">
                <div className="md:w-2/5 mx-auto">
                  <input
                   disabled 
                    defaultValue={data?.email}
                    placeholder={data?.email}
                    className="w-full px-4 py-3 border-2 rounded-3xl border-[#ccc] text-black hover:border-[#4C2F17]"
                  />
                </div>
              </div>
              <div className="space-y-6 my-6">
                <div className="md:w-2/5 mx-auto">
                  <label htmlFor="role">Role:</label>
                  <select
                    id="role"
                    defaultValue={data?.value}
                    name="role"
                    className="w-full px-4 py-3 border-2 rounded-3xl border-[#ccc] text-black hover:border-[#4C2F17]"
                  >
                    
                    <option value="writer">Writer</option>
                    <option value="reader">Reader</option>
                  </select>
                </div>
              </div>
  
              <div className="space-y-6 my-6">
                <div className="md:w-2/5 mx-auto"></div>
              </div>
              
              <div className="md:w-1/4 mx-auto">
                <button className="w-full rounded-3xl py-3 border-2 border-[#4C2F17] text-[#4C2F17] md:text-lg transition-all duration-300 hover:bg-[#4C2F17] hover:text-white">
                  save
                </button>
              </div>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    );
};

export default ProfileUpdate;