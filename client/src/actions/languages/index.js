import * as api from '../../api';

export const getAllLanguages=()=>async(dispatch)=>{
    try {
        const languages = await api.fetchLanguages();

        console.log(languages)
        dispatch({type:'GET_LANGUAGES',payload:languages})
    } catch (error) {
            console.log(error)
    }
}