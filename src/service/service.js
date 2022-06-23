import axios from "axios";

const baseUrl = "http://localhost:3001";

/**
 * Function uploading and changing the photo
 * @param {object} data
 * @returns {promise}
 */
const uploadPhoto = (data) => {
  return axios.post(`${baseUrl}/api/portFolio_Vianney/upload`, data);
};

export default uploadPhoto;
