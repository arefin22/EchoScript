import { axiosSecure } from "./useAxiosSecure";

export const saveUser = async (user) => {
    console.log(user)
    const currentUser = {
        email: user.email,
        name:user.displayName,
        role:'user',
        satus:'verified',
        image:user.photoURL || ''

    }
    const{data}= await axiosSecure.post(`/user`,currentUser)
    return data;
}