import axios from "axios";

const baseUrl = "http://localhost:3001";

const verifyToken = (token) => {
  console.log(token);
  return axios({
    url: `${baseUrl}/api/portFolio_Vianney/verifyToken`,
    method: "post",
    headers: { authorization: `Bearer ${token}` },
  });
};

export default verifyToken;
