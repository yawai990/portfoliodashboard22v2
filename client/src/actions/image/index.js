import * as api from '../../api';

export const getImage=()=>async(dispatch)=>{
    try {
        const {data}= await api.fetchImage();

        dispatch({type:'GET_IMAGE',payload:data.data})
    } catch (error) {
            console.log(error)
    }
};

export const uploadImage=(img,id)=>async(dispatch)=>{
    try {
            const data= await api.updateImage(img,id);

            console.log(data)

            dispatch({type:'UPLOAD_IMAGE',payload:data})
    } catch (error) {
        console.log(error)
    }
}