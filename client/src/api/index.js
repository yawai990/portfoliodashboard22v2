import axios from 'axios';


const URL = 'http://localhost:5000';

//projects
export const fetchProjects =()=>axios.get(`${URL}/projects/all_projects`);
export const addProject =(project)=>axios.post(`${URL}/projects/add_new_project`,project);
export const deleteProject=(id)=>axios.delete(`${URL}/projects/project_delete/${id}`);