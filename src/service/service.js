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

/**
 * Function getting introduction and actually
 * @returns {promise}
 */
export const getIntro = () => {
  return axios
    .get(`${baseUrl}/api/portFolio_Vianney/introduction`)
    .then((result) => result.data);
};

/**
 * Function updating introduction
 * @param {object} data
 * @returns {promise}
 */
export const updateIntro = (data) => {
  return axios.put(`${baseUrl}/api/portFolio_Vianney/introduction`, data);
};

/**
 * Function getting projects
 * @returns {promise}
 */
export const getProjects = () => {
  return axios
    .get(`${baseUrl}/api/portFolio_Vianney/projects`)
    .then((result) => result.data);
};

/**
 * Function creting a project
 * @param {object} data
 * @returns {promise}
 */
export const createProject = (dataForm) => {
  return axios({
    method: "post",
    data: dataForm,
    url: `${baseUrl}/api/portFolio_Vianney/projects`,
  });
};

/**
 * Function deleting one project by id
 * @param {number} id
 * @returns {promise}
 */
export const deleteProjectById = (id) => {
  return axios({
    method: "delete",
    url: `${baseUrl}/api/portFolio_Vianney/projects/${id}`,
  });
};

/**
 * Function getting one project by id
 * @param {number} id
 * @returns {promise}
 */
export const getProjectById = (id) => {
  return axios
    .get(`${baseUrl}/api/portFolio_Vianney/projects/${id}`)
    .then((result) => result.data);
};

/**
 * Function updating one project by his id
 * @param {object} data
 * @param {number} id
 * @returns
 */
export const updateProjectById = (data, id) => {
  return axios
    .put(`${baseUrl}/api/portFolio_Vianney/projects/${id}`, data)
    .then((result) => result.data);
};

export const deleteImageProjectById = (id) => {
  return axios
    .delete(`${baseUrl}/api/portFolio_Vianney/project/deleteImage/${id}`)
    .then((result) => result.data);
};

export default uploadPhoto;
