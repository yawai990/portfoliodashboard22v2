import * as api from '../../api';

export const getProjects =()=>async(dispatch)=>{
    try {
                const allprojects = await api.fetchProjects();

            dispatch({type:'FETCH_PROJECTS',payload:allprojects.data})
    } catch (error) {
            console.log(error)
    }
};

export const addProject=(project)=>async(dispatch)=>{
    try {
            const {data} = await api.addProject(project);
                console.log('action',data)
            dispatch({type:'ADD_PROJECT',payload:data.data})
    } catch (error) {       
            console.log(error)
    }
}