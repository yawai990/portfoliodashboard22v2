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
export const updateImage=(data,id)=>axios.put(`${URL}/image/update_image/${id}`,data);

//experiences
export const fetchExp =()=>axios(`${URL}/experiences/get_exp`);
export const addExp=(newexp)=>axios.post(`${URL}/experiences/add_exp`,newexp);
export const deleteExp=(id)=>axios.delete(`${URL}/experiences/delete_exp/${id}`);

//contact 
export const fetchContact =()=>axios.get(`${URL}/contactlist/get_contactlist`);
export const updateContact =(id,newContact)=>axios.put(`${URL}/contactlist/update_contactlist/${id}`,newContact)
