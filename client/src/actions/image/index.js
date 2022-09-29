import * as api from '../../api';

export const getImage=()=>async(dispatch)=>{
    try {
        const {data} = await api.fetchImage();

        dispatch({type:'GET_IMAGE',payload:data})
    } catch (error) {
            console.log(error)
    }
}