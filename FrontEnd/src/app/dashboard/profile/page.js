"use client";
import Image from "next/image";
import profile from "../../../assets/img/profile.png";
import Link from "next/link";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import { useAuth } from "@/context/authContext";
import UserUpdate from "@/components/shared/UserUpdate/UserUpdate";
import { useEffect, useState } from "react";
import { axiosPublic } from "@/utils/useAxiosPublic";
import EditData from "@/components/ui/EditData";
import ProfileUpdate from "@/components/shared/ProfileUpdate/ProfileUpdate";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
const page = () => {
    const { user } = useAuth();
    const [myself, setMyself] = useState(null);
    const [isWriter, setIsWriter] = useState(false);
    const [role, setRole] = useState('writer');
    const [update, setUpdate] = useState(Date.now());
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [id, setId] = useState(null);
   
    
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const usersResponse = await axiosPublic.get("/user");
      
            const userData = usersResponse.data.find(userData => userData.email === user.email && userData.name === user.displayName);
            setMyself(userData);
            setId(userData?._id);
          
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };
    
    fetchUsers();
}, [update]);
const handleToggle = () => {
       
    setRole(prevRole => (prevRole === 'reader' ? 'writer' : 'reader'));
    
      const membership = myself.membership;
      const name = myself.name;
      const id =myself._id;
      const userData = {id,  name, membership, role };
      console.log(userData)
      console.log(myself)
     EditData({ id: id, setUpdate: setUpdate, data: userData }) 
    
  };




  return (
    <PrivateRoute>
      <div className="">
        <div className="flex justify-center gap-5 items-center">
          <div className="w-[160px] active avatar">
          <div className="avatar">
  <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
   
            <Image
              src={myself?.photoURL}
              width="40"
              height="40"
              className=" rounded-full"
              alt="Profile image"
            />
  </div>
</div>
          </div>
          <div className="text-center mt-4">
            <h2 className="text-xl font-bold">{myself?.name}</h2>
            <p>{myself?.email}</p>
            <p>{myself?.role}</p>
            <div>
      <p>Change role:</p>
       <div className="flex justify-center items-center gap-5">
       <div>
      <label>
      <span>Reader</span>
        
      </label></div>
      <div>
      <label>
        <input
          type="checkbox"
          className="toggle toggle-lg mt-5"
          checked={role === 'reader'}
          onChange={handleToggle}
        /></label>
        </div>
        <div>
        <label>
        <span>Writer</span>
        </label>
        </div>
      
      </div> 
    </div>
          </div>
          
        </div>
        <div>
        <div className="flex justify-center items-center gap-5 text-3xl mt-5">
            <div><FaFacebook/></div>
            <div><FaTwitter/></div>
            <div><FaYoutube/></div>
            <div><FaLinkedin/></div>
            <div><FaWhatsapp/></div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <button className="btn btn-md btn-outline btn-primary mr-2">
            <ProfileUpdate data={myself} id={id} setUpdate={setUpdate}/> <span>EditProfile</span>
          </button>
        </div>
      </div>
   
    </PrivateRoute>
  );
};

export default page;
