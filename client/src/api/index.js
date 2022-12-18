import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'});
// const API = axios.create({baseURL:'https://portfoliodashboard22v2.herokuapp.com'});

//this req happen before the following request
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('user')){
        req.headers.authorization =`Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    }
    return req;
},err=>console.log(err))

//authentication
export const Login=(data)=>API.post(`/user/login`,data);

//projects
export const fetchProjects =()=>API.get(`/projects/all_projects`);
export const addProject =(project)=>API.post(`/projects/add_new_project`,project);
export const deleteProject=(id)=>API.delete(`/projects/project_delete/${id}`);

//languages
export const fetchLanguages=()=>API.get(`/languages/get_languages`);
export const addLanguages=(newlang)=>API.post(`/languages/add_language`,newlang);
export const deleteLanguages=(id)=>API.delete(`/languages/delete_language/${id}`);

//image
export const fetchImage=()=>API.get(`/image/get_image`);
export const updateImage=(data,id)=>API.put(`/image/update_image/${id}`,data);

//experiences
export const fetchExp =()=>API.get(`/experiences/get_exp`);
export const addExp=(newexp)=>API.post(`/experiences/add_exp`,newexp);
export const deleteExp=(id)=>API.delete(`/experiences/delete_exp/${id}`);

//contact 
export const fetchContact =()=>API.get(`/contactlist/get_contactlist`);
export const updateContact =(id,newContact)=>API.put(`/contactlist/update_contactlist/${id}`,newContact)
