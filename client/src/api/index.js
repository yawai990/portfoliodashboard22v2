import axios from 'axios';


const URL = 'http://localhost:5000';

//projects
export const fetchProjects =()=>axios.get(`${URL}/projects/all_projects`);
export const addProject =(project)=>axios.post(`${URL}/projects/add_new_project`,project);
export const deleteProject=(id)=>axios.delete(`${URL}/projects/project_delete/${id}`);

//languages
export const fetchLanguages=()=>axios.get(`${URL}/languages/get_languages`);
export const addLanguages=(newlang)=>axios.post(`${URL}/languages/add_language`,newlang);
export const deleteLanguages=(id)=>axios.delete(`${URL}/languages/delete_language/${id}`);

//image
export const fetchImage=()=>axios.get(`${URL}/image/get_image`);
export const updateImage=(data)=>axios.put(`${URL}/image/update_image`,data);
