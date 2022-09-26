const ProjectsReducer = (project=[],action)=>{
        switch (action.type) {
                case 'ADD_PROJECT':
                        return [...project,action.payload]
            case 'FETCH_PROJECTS':
                    return action.payload
            default:
                return project
        }
}

export default ProjectsReducer;