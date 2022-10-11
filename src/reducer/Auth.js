const authReducer=(state={user:null},action)=>{
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('user',JSON.stringify({...action?.payload}))
            return {...state,user:action?.payload}
            case 'LOGOUT':
                return {...state,user:action.payload}
        default:
            return state
    }
};

export default authReducer;