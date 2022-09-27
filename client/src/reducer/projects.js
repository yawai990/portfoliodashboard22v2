const initState={
        projects:[],
        languages:[
                {_id:1,language:'html',useFor:0},
                {_id:2,language:'mysql',useFor:2},
        ]
}

const rootReducer = (state=initState,action)=>{

        switch (action.type) {
                case 'ADD_PROJECT':
                        return {...state,projects:action.payload}
               case 'DELETE_PROJECT':
                         return {...state,projects:state.projects.filter(pro=>pro._id !== action.payload)}
            case 'FETCH_PROJECTS':
                    return  {...state,projects:action.payload}
            default:
                return state
        }
}

export default rootReducer;