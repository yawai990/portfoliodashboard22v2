const authReducer=(state={user:null,error:[]},action)=>{
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {...state,error:[...state.error,action.payload]}
        case 'LOGIN':
            localStorage.setItem('user',JSON.stringify({...action?.payload}))
            return {user:action?.payload,error:[]}
            case 'LOGOUT':
                return {...state,user:action.payload}
        default:
            return state
    }
};

export default authReducer;