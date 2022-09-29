import { padding } from '@mui/system';
import {makeStyles} from 'tss-react/mui';

export const useStyles=makeStyles()((theme)=>{
    return {
        sm_padding:{
            padding:theme.spacing.apply(1)
        },
        sm_margin:{
            margin:theme.spacing(0.5)
        },
        lang_card:{
            minWidth:'130px',
            minHeight:'100px',
            maxWidth:'160px',
            maxHeight:'130px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexWrap:'wrap',
            position:'relative',
        },
        lang_sCard:{
            width:'100%',
            height:'100%',
            position:'absolute',
            display:'flex',
            justifyContent:'flex-end',
            alignItems:'flex-start',
        }
    }
})