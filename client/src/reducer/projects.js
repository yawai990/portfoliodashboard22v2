const initState={
        projects:[],
        languages:[],
        image:[],
        contact:[],
        exp:[],
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

                    //for exp
                    case 'GET_EXP':
                        return {...state,exp:action.payload}
                    case 'ADD_EXP'    :
                        return {...state,exp:[...state.exp,action.payload]}
                        case 'DELETE_EXP'    :
                        return {...state,exp:state.exp.filter(ex=>ex._id !== action.payload)}

                //for cont6act
                        case 'FETCH_CONTACT':
                                return {...state,contact:action.payload}
            default:
                return state
        }
}

export default rootReducer;