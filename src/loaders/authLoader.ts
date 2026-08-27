import { redirect } from "react-router";

export function requirsAuth (){
    const accessToken = localStorage.getItem("accessToken")
    if(!accessToken){
        throw redirect("/")
    }
    return accessToken
}