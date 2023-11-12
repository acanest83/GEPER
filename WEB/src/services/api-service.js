import axios from "axios";

//Conectar con la API//
const service = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.REACT_APP_BASE_API_URL || "http://127.0.0.1:3000/v1",
  });
//Exportar//
  export function createUser(body) {
    const formData = new FormData();
  
    formData.append("name", body.name);
    formData.append("tim", body.tim);
    formData.append("rank",body.rank);
    formData.append("surname",body.surname);
    formData.append("telephone",body.telephone);
    formData.append("email", body.email);
    formData.append("role",body.role);
    formData.append("password", body.password);
  
    if (body.avatar) {
      formData.append("avatar", body.avatar[0]);
    }
  
    return service.post("/register", formData);
  }