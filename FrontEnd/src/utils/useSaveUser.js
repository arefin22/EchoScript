import { axiosSecure } from "./useAxiosSecure";

export const saveUser = async (user) => {
    const currentUser = {
        email: user.email,
        name:user.displayName,
        role:'user',
        satus:'verified',
        image:user.photoURL

    }
    const{data}= await axiosSecure.put(`/users/${user?.email}/`,currentUser)
    return data;
}