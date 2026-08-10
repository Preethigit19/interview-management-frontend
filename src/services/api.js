import axios from "axios";

const api=axios.create({
    baseURL:"http://localhost:8084/candidate",
    headers:{
        "Content-Type":"application/json",}
    
});

export default api;