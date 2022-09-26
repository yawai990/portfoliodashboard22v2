import {makeStyles} from 'tss-react/mui';

export const useStyles=makeStyles()((theme)=>{
    return {
        form:{
            padding:'10px 20px',
            borderRadius:'8px',
            backgroundColor:'white',
        },
        padding:{
            padding:'1.2rem',
        },
        divider:{
            display:'flex'
        },
        form_input:{
            margin:'0.5rem 0',
        },
        form_file:{
            width: '97%',
        margin: '10px 0',
        },
        btn_submit:{
            marginTop:'1rem',
            textTransform:'capitalize'
        }
    }
})