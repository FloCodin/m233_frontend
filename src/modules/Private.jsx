import { useEffect, useState } from "react"
import axios from "axios"
import AuthService from "../services/auth.service"

const baseUrl = "http://localhost:8080"
// username admin123 pw: admin123
export default function Private() {

    const [data, setData] = useState("loading...")

    useEffect(() => {
        if (!AuthService.getCurrentUser()) {
            //windows.location.href = "/login"
            console.log("not logged in")
            setData("not logged in")
            return
        }
        console.log("calling private api endpoint")
        //get JWT Token
        const token = JSON.parse(localStorage.getItem("user")).token
        //create a header with the token
        const header = {headers: {Authorization: `Bearer ${token}`}}
        // call the API with token in the header; {} is the empty request body
        axios.post(baseUrl + "/items", {}, header).then((res) => {
            console.log("response from private api endpoint: " + res)
            setData(res.data)
        })
    }, [])

    return (
        <div>
            <h1>Private</h1>
            <p>{data}</p>
        </div>
    )
}
