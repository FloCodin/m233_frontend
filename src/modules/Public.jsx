
import axios from "axios";
import  {useState, useEffect} from "react";

const baseURL = "http://localhost:8080"

export default function Public() {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("calling public api endpoint");
        axios.get(baseURL+"/public")
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            });
    }, []);
    return (
        <div>
            <h1>Public</h1>
            <p>{data}</p>
        </div>
    )
}