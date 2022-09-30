const initState={
        projects:[],
        languages:[],
        image:[],
        error:[],
}

const rootReducer = (state=initState,action)=>{
        switch (action.type) {
                case 'ADD_PROJECT':
                        return {...state,projects:[...state.projects,action.payload]}
               case 'DELETE_PROJECT':
                         return {...state,projects:state.projects.filter(pro=>pro._id !== action.payload)}
            case 'FETCH_PROJECTS':
                    return  {...state,projects:action.payload}

                //for language
                case 'ADD_LANGUAGES':
                        return {...state,languages:[...state.languages,action.payload]}
               case 'DELETE_LANGUAGES':
                         return {...state,languages:state.languages.filter(lang=>lang._id !== action.payload)}
            case 'GET_LANGUAGES':
                    return  {...state,languages:action.payload}

                //for profile image
                case 'GET_IMAGE':
                    return  {...state,image:action.payload}
                case'UPLOAD_IMAGE':
                    return {...state}
            default:
                return state
        }
}

export default rootReducer;