import React,{useEffect} from 'react';
import {Container,Card, Typography,IconButton} from '@mui/material';
import { Icon } from '@iconify/react';
import Masonry from 'react-masonry-css';
import { useStyles } from './style';
import {useSelector,useDispatch} from 'react-redux';
import {getAllLanguages,deleteLang} from '../../actions/languages';
import {languageData} from '../../data';
import * as images from '../../assets';
import Loading from '../Loading/Loading';
import { useGlobalContext } from '../../context';

const breakpointColumnsObj = {
  default: 5,
  1100: 4,
  800:3,
  500: 2
};

const SkillsEditDelte = () => {
  const {classes} = useStyles();
  const dispatch=useDispatch();
  const languages = useSelector(state=>state.rootReducer.languages);
  const {handleReload} = useGlobalContext();
  const userRole =JSON.parse(localStorage.getItem('user')).user.role;

  const handleDelete=(id)=>{
    if(userRole === 1){
      dispatch(deleteLang(id));
      handleReload(`One Skills deleted`)
    }else{
      handleReload('Not Authorized')
    }
  }

  return (
    <Card component={Container} className={classes.sm_padding}>

      <Typography variant='h6' textAlign='center' gutterBottom>Your Skills</Typography>

      <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid" 
  columnClassName="my-masonry-grid_column">
  
        {
          languages.length > 0 || languages !== undefined ?
          languages.map(lang=>(
            <div key={lang._id} className={`${classes.lang_card} ${classes.sm_padding}`}>

              <img 
              src={images[languageData.filter(i=>i.id === lang.language && i.name)[0].name]}
               style={{
                width:'60%',
                height:'60%',
                objectFit:'cover',
                objectPosition:'center'
              }}
                />

              <Typography textTransform='uppercase' fontSize={13} letterSpacing={1} fontWeight={550}
              fontFamily='sans' className={classes.sm_margin}
              >
                {languageData.filter(i=>i.id === lang.language && i.name)[0].name}
                </Typography>

                <div className={classes.lang_sCard}>
                  <IconButton size="small" 
                  onClick={()=>handleDelete(lang._id)}
                  sx={[
                    (theme)=>({
                      '&:hover':{
                        color:theme.palette.primary.main
                      }
                    })
                  ]}
                  >
                  <Icon icon="ic:baseline-delete" />
                  </IconButton>
                </div>

            </div>
          )):<Loading />
        }


    </Masonry>

    </Card>
  )
}

export default SkillsEditDelte