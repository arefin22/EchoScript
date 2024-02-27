import { axiosSecure } from "./useAxiosSecure";

export const saveUser = async (user) => {
    
    const currentUser = {
        email: user.email,
        name:user.displayName,
        role:'reader',
        membership:'active',
        image:user.photoURL || ''

    }
    const{data}= await axiosSecure.post(`/user`,currentUser)
    return data;
}