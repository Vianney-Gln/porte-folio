import axios from "axios";

const baseUrl = "http://localhost:3001";
/**
 * Function verifying if a user is authentificated
 * @param {*} token
 * @returns {promise} boolean
 */
const verifyToken = (token) => {
  console.log(token);
  return axios({
    url: `${baseUrl}/api/portFolio_Vianney/verifyToken`,
    method: "post",
    headers: { authorization: `Bearer ${token}` },
  });
};

/**
 * Function checking creds and generate a token
 * @param {object} creds
 * @returns {promise} token
 */
export const authentificate = (creds) => {
  return axios({
    method: "post",
    url: `${baseUrl}/api/portFolio_Vianney/auth`,
    data: creds,
  });
};

export default verifyToken;
