import {makeStyles} from 'tss-react/mui';

export const useStyles=makeStyles()((theme)=>{
    return {
        form:{
            padding:'10px 20px',
            borderRadius:'8px',
            backgroundColor:'white',
        },
        sm_padding:{
            padding:'0.5rem',
        },
        padding:{
            padding:'1.2rem',
        },
        margin:{
            margin:theme.spacing(1)
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
        form_menu:{
                fontSize:'12px'
        },
        btn_submit:{
            marginTop:'1rem',
            textTransform:'capitalize'
        },
        uppercase:{
            textTransform:'uppercase'
        },
        lang_card:{
            width:'60px',
            height:'60px',
            boxShadow:'0 0 10px rgba(0,0,0,0.7)',
            overflow:'hidden'
        },
        centering:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }
    }
})