import * as api from '../../api';

export const getProjects =()=>async(dispatch)=>{
    try {
                const allprojects = await api.fetchProjects();

            dispatch({type:'FETCH_PROJECTS',payload:allprojects.data})
    } catch (error) {
        if(error.status !==200){
                localStorage.removeItem('user')
           }
    }
};

export const addProject=(project)=>async(dispatch)=>{

    try {
            const {data} = await api.addProject(project);
            dispatch({type:'ADD_PROJECT',payload:data.projects})
    } catch (error) {   
        console.log('this is',error.status)    
    }
};

export const deleteProject=(id)=>async(dispatch)=>{
        try {
            const {data} = await api.deleteProject(id);

            dispatch({type:'DELETE_PROJECT',payload:id})
        } catch (error) {
            
        }
}