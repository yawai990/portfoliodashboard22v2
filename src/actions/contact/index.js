import * as api from '../../api';

export const getContact = ()=>async(dispatch)=>{
    try {
            const {data} = await api.fetchContact();

            dispatch({type:'FETCH_CONTACT',payload:data.contact})
    } catch (error) {
        if(error.status !==200){
            localStorage.removeItem('user')
       }
    }
};

export const updateContact=(id,updateData)=>async(dispatch)=>{
    try {
        const data = await api.updateContact(id,updateData)
        
        console.log(data);

        dispatch({type:'UPDATE_CONTACT',payload:data.data})
    } catch (error) {
        console.log(error)
    }
}