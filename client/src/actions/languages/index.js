import * as api from '../../api';

export const getAllLanguages=()=>async(dispatch)=>{
    try {
        const {data} = await api.fetchLanguages();

        dispatch({type:'GET_LANGUAGES',payload:data.languages})
    } catch (error) {
        if(error.status !==200){
            localStorage.removeItem('user')
       }
    }
};

export const createLang=(newlang)=>async(dispatch)=>{
    try {
            const {data} = await api.addLanguages(newlang);

        dispatch({type:'ADD_LANGUAGES',payload:data.languages})
    } catch (error) {
            console.log(error)
    }
};

export const deleteLang=(id)=>async(dispatch)=>{
    try {
            const {data} = await api.deleteLanguages(id);

            dispatch({type:'DELETE_LANGUAGES',payload:data.message})
    } catch (error) {
            console.log(error.response.data.message)
            dispatch({type:"ERROR",payload:error.response.data.message})
    }
}