import * as api from '../../api';

export const getAllExp=()=>async(dispatch)=>{
    try {
            const {data} = await api.fetchExp();

            dispatch({type:'GET_EXP',payload:data.experience})
    } catch (error) {
        if(error.status !==200){
                localStorage.removeItem('user')
           }
    }
}

export const addExp =(exp)=>async(dispatch)=>{
    try {
            const {data} = await api.addExp(exp);

            dispatch({type:'ADD_EXP',payload:data.experience})
    } catch (error) {
            console.log('some went wrong')
    }
}

export const deleteExp=(id)=>async(dispatch)=>{
        try {
                const {data} = await api.deleteExp(id);

                dispatch({type:'DELETE_EXP',payload:id})
        } catch (error) {
                console.log(error)                
        }
}