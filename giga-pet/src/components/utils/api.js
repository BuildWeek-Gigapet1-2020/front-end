import axios from "axios";

export default function() {
  return axios.create({
    baseURL: "https://gigapet-backend.herokuapp.com",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
}
