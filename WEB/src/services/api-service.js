import axios from "axios";

//Conectar con la API//
const service = axios.create({
    withCredentials: true,
    baseURL: "http://127.0.0.1:3000/v1",
  });

//Exportar RESISTER//
  export function createUser(body) {
    const { name, tim, rank, surname, telephone, email, role, password } = body;
    const formUser = { name, tim, rank, surname, telephone, email, role, password };

    if (body.avatar) {
      formUser.avatar = body.avatar[0];
    }
  
    return service.post("/register", formUser);   
  }

//Exportar LOGIN//
  export function login(data) {
    return service.post("/login", data).then((response) => response.data);
  }

  export function logoutApi() {
    return service.post("/logout");
  }

  //Exportar a RequestCreate//
  export function sendRequest(body) {
    const { requestType, name, surname, tim, telephone, rank, email, reasons, periodFrom, periodTo } = body;
    const formRequest = { requestType, name, surname, tim, telephone, rank, email, reasons, periodFrom, periodTo};
  
    return service.post("/requests/create", formRequest);
  }
  //Exportar a Home//
export function goHome() {
  return service.get("/home").then((response) => response.data);
}
  
      
      
      
      
      
      
      
      
      
  