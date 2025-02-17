import axios from "axios";
const instance = axios.create({
    baseURL:"https://fackestoreapi.com"
})
export default instance