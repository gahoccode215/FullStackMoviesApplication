import axios from "axios";

export default axios.create({
    baseURL:'https://9c96-103-239-104.ap.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}
})