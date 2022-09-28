import * as api from '../../api';

export const getAllLanguages=()=>async(dispatch)=>{
    try {
        const {data} = await api.fetchLanguages();

        console.log('action',data)

        dispatch({type:'GET_LANGUAGES',payload:data.languages})
    } catch (error) {
            console.log(error)
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
            console.log(error)
    }
}