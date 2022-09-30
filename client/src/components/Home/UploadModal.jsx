import React,{useState} from 'react';
import {Modal,Box,CardMedia, Button,Card} from '@mui/material';
import FileBase64 from 'react-file-base64';
import { useStyles } from './Style';
import {useSelector,useDispatch} from 'react-redux';
import {uploadImage} from '../../actions/image';
import {useGlobalContext} from '../../context';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1.5px solid #000',
    boxShadow: 24,
    p: 4,
  };

const UploadModal = ({open,handleClose}) => {
    const [image,setImage] = useState({id:'',img:''});
    const {handleReload}= useGlobalContext();
    const profile=useSelector(state=>state.rootReducer.image);
    const dispatch=useDispatch();
    const {classes}=useStyles();

    const onhandleSubmit=e=>{
      e.preventDefault();

      if(image.img === ''){
        handleReload('Please Select other Image')
      }else{
        dispatch(uploadImage(image,profile[0]._id))
        handleClose()
        setImage({img:''})
      }

    }
    

  return (
    <Modal
        open={open}
        onClose={handleClose}
        >
<Box sx={style}>

    {image.name !== '' && <Card className={`${classes.margin} ${classes.centering}`}>
  
    <CardMedia component='img' image={image.img ==='' && profile.length > 0 ? profile[0].img:image.img} height='220' style={{
      objectFit:'cover',
      objectPosition:'center'
    }}  />

    </Card>}

    <form onSubmit={onhandleSubmit}>
      <div className={`${classes.margin} ${classes.sm_padding}`}>
          <FileBase64 name='img' type='file' multiple={ false } onDone={e=>setImage({...image,img:e.base64})}  />
      </div>

          <Button variant='outlined' type="submit">Upload Photo</Button>
          </form>

        </Box>
        </Modal>
  )
}

export default UploadModal