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
//Exportar LOGOUT//
export function logoutApi() {
  return service.post("/logout");
}

//Exportar a RequestCreate//
export function sendRequest(body) {
  const { requestType, name, surname, tim, telephone, rank, email, reason, periodFrom, periodTo } = body;
  const formRequest = { requestType, name, surname, tim, telephone, rank, email, reason, periodFrom, periodTo };

  return service.post("/requests/create", formRequest);
}
//Exportar a Home//
export function goHome() {
  return service.get("/home").then((response) => response.data);
}

//Exportar formulario desde API//

export function formRequest() {
  return service.get("/requests/pending")
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error al obtener formularios pendientes:', error);
      throw error;
    });
}











