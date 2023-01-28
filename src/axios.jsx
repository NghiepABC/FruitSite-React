import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.predic8.de:443/"
})

export default instance;