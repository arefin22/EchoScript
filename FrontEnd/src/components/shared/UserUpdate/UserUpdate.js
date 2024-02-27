"use client";
import EditData from "@/components/ui/EditData";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

import { FaUserEdit } from "react-icons/fa";

const UserUpdate = ({ id, setUpdate }) => {
  const router = useRouter();
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const role = form.role.value;
      const membership = form.membership.value;
      const name = form.name.value;
      const userData = { email, name, membership, role };
      EditData({ id: id, setUpdate: setUpdate, data: userData })
        toast("user updated");
      document.getElementById(`my_modal_${id}`).close();
      router.replace("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button
        className="text-white "
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
                  placeholder="Name"
                  className="w-full px-4 py-3 border-2 rounded-3xl border-[#ccc] text-black hover:border-[#4C2F17]"
                />
              </div>
            </div>
            <div className="space-y-6 my-6">
              <div className="md:w-2/5 mx-auto">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border-2 rounded-3xl border-[#ccc] text-black hover:border-[#4C2F17]"
                />
              </div>
            </div>
            <div className="space-y-6 my-6">
              <div className="md:w-2/5 mx-auto">
                <label htmlFor="role">Role:</label>
                <select
                  id="role"
                  name="role"
                  className="w-full px-4 py-3 border-2 rounded-3xl border-[#ccc] text-black hover:border-[#4C2F17]"
                >
                  <option value="admin">Admin</option>
                  <option value="writer">Writer</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>

            <div className="space-y-6 my-6">
              <div className="md:w-2/5 mx-auto"></div>
            </div>
            <div className="space-y-6 my-6">
              <div className="md:w-2/5 mx-auto relative ">
                <label htmlFor="membership">Membership:</label>
                <select
                  id="membership"
                  name="membership"
                  className="w-full px-4 py-3 border-2 rounded-3xl border-[#ccc] text-black hover:border-[#4C2F17]"
                >
                  <option value="active">Active</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>
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

export default UserUpdate;
