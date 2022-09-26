import {makeStyles} from 'tss-react/mui';

export const useStyles = makeStyles()((theme)=>{
    return {
        appbar:{
            backgroundColor: theme.palette.primary.dark,
            color:'#fff'
        },
        appbar_container:{
            display:'flex'
        },
        container:{
            background:'#f0f0f0',
            position:'relative'
        },
        toolbar:theme.mixins.toolbar,
        welcome:{
            flexGrow:1,
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'flex-start'
        },
        margin:{
          margin:theme.spacing(1)
        },
      list:{
        padding:theme.spacing(2)
      },
      grid_padding:{
        padding:theme.spacing(0.2)
      },
      navLinks:{
        textTransform:'capitalize',
        margin:'15px 0',
        borderRadius:theme.spacing()
      },
      active:{
        backgroundColor:'#42a5f5',
        textTransform:'capitalize',
        margin:'15px 0',
        color:'#fff',
        borderRadius:theme.spacing(),
        '&hover':{
          background:'#A66CFF'
        }
      },
      card:{
        background:'white',
        color:'black'
      },
      centering:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      },
      Footer:{
        width:'100%',
        backgroundColor:'#151515',
        color:'white',
        position:'absolute',
        bottom:0,
        left:0,
        padding:theme.spacing(1),
      }
    }
  })