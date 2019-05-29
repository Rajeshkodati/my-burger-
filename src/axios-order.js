import axios from "axios";

const instance = axios.create(
    {
        baseUrl: "https://my-project-c66a8.firebaseio.com"
    }
)
export default instance;