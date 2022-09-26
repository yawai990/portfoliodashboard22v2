import {makeStyles} from 'tss-react/mui';

export const useStyles = makeStyles()((theme)=>{
    return {
        margin:{
          margin:theme.spacing(0.5)
        },
        sm_padding:{
          padding:theme.spacing(0.5)
        },
      card:{
        background:'white',
        color:'black'
      },
      flex:{
        display:'flex'
      },
      away:{
        justifyContent:'space-between',
        alignItems:'center'
      },
      centering:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      },
      project_number:{
        width:'24px',
        height:'24px',
        color:'white',
        borderRadius:'50%',
        padding:'8px',
      }
    }
  })