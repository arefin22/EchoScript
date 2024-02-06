'use client'
import Image from 'next/image';
import profile from '../../../assets/img/profile.png'
import Link from 'next/link';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import { useAuth } from '@/context/authContext';
const page = () => {
    const {user} =useAuth();
    return (
        <PrivateRoute>
        <div className=''>
            <div className='flex flex-col items-center'>
                <div className='w-[160px] avatar'>
                    <Image src={user.photoURL} width='60' height='0'  className=' rounded-full' alt='Profile image' ></Image>
                </div>
                <div className="text-center mt-4">
                <h2 className='text-xl font-bold'>{user.displayName}</h2>
                 <p>Full Stack Developer</p>
                 <p>1220 followers</p>
                 <div className='mt-[24px]'>
                    <p>byteblazers@gmail.com</p>
                     <p>https://www.twitter.com/my.self</p>
                     <p>https://www.facebook.com/my.self</p>
                 </div>
                </div>
            </div>
            <div className='mt-10 text-center'>
            <Link className="border border-black w-60  rounded-xl px-4 py-1" href="/editprofile">Edit Profile</Link>
            </div>
        </div>
        </PrivateRoute>
    );
};

export default page;