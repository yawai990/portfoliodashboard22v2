import React,{useState} from 'react';
import {Modal,Box,CardMedia, Button,Card} from '@mui/material';
import FileBase64 from 'react-file-base64';
import { useStyles } from './Style';
import {useSelector} from 'react-redux';

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
    const [image,setImage] = useState('');
    const {classes}=useStyles();
    

  return (
    <Modal
        open={open}
        onClose={handleClose}
        >
<Box sx={style}>

    {image && <Card className={`${classes.margin} ${classes.centering}`}>
  
    <CardMedia component='img' image={image && image} height='220' style={{
      objectFit:'cover',
      objectPosition:'center'
    }}  />

    </Card>}

    <form>
      <div className={`${classes.margin} ${classes.sm_padding}`}>
          <FileBase64 name='photo' type='file' multiple={ false } onDone={e=>setImage(e.base64)}  />
      </div>

          <Button variant='outlined' type="submit">Upload Photo</Button>
          </form>

        </Box>
        </Modal>
  )
}

export default UploadModal