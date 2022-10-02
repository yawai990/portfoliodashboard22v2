import React,{useState,useEffect} from 'react';
import {Grid,Typography,Card,CardContent,Box, TextField, Button} from '@mui/material';
import { useStyles } from './Style';
import {useSelector,useDispatch} from 'react-redux';
import { Icon } from '@iconify/react';
import editTwotoneFull from '@iconify/icons-line-md/edit-twotone-full';
import {updateContact} from '../../actions/contact';
import {useGlobalContext} from '../../context';


const lists =[
  {id:1,name:'email'},
  {id:2,name:'phone'},
  {id:3,name:'linkedIn'},
  {id:4,name:'telegram'},
  {id:5,name:'viber'},
]

const init ={
  phone:'',linkedIn:'',viber:'',email:'',telegram:''
}

const Contact = () => {
    const {classes} = useStyles();
    const [edit,setEdit] = useState(false);
    const [contactList,setContactList] = useState(init);
    const dispatch= useDispatch();
    const contactlist = useSelector(state=>state.rootReducer.contact);
    const {handleReload} = useGlobalContext();

    useEffect(()=>{
      setContactList(contactlist.length > 0 ? contactlist[0]:init)
    },[contactlist]);

    const handleSubmit =e=>{
      e.preventDefault();
    dispatch(updateContact(contactlist.length > 0 ? contactlist[0]._id:null,contactList))
    handleReload('Contact List Updated')
      setEdit(false)
    }
    
  return (
    <Grid className={classes.margin}  item sm={12}>
            <Card>

                <CardContent>
                <Typography variant='h6' fontWeight={550} gutterBottom>Contact List</Typography>

                <Typography component='div'>
                              
                                <Box className={classes.flex}>
                                {
                                  edit ? <form onSubmit={handleSubmit}>
                                          <Typography className={`${classes.centering} ${classes.margin}`} component='div'>
                                    <Typography  paddingRight={1.5} textTransform='capitalize' letterSpacing={0.5} fontWeight={550} fontFamily='sans'>Email</Typography>

                                  <TextField type='email' 
                                  name='email' variant='standard' 
                                  value={contactList.email && contactList.email} 
                                  placeholder='abcdde@gmail.com'
                                  onChange={
                                    (e)=>setContactList({
                                      ...contactList,[e.target.name]:e.target.value
                                    })}
                                   />
                                  </Typography>

                                    <Typography className={`${classes.centering} ${classes.margin}`} component='div'>
                                    <Typography paddingRight={1.5} textTransform='capitalize' letterSpacing={0.5} fontWeight={550} fontFamily='sans'>Phone</Typography>

                                  <TextField type='number' 
                                  name='phone' variant='standard' 
                                  value={contactList.phone && contactList.phone} 
                                  placeholder='09111222333'
                                  onChange={
                                    (e)=>setContactList({
                                      ...contactList,[e.target.name]:e.target.value
                                    })}
                                   />
                                  </Typography>

                                  <Typography className={`${classes.centering} ${classes.margin}`} component='div'>
                                    <Typography paddingRight={1.5} textTransform='capitalize' letterSpacing={0.5} fontWeight={550} fontFamily='sans'>LinkedIn</Typography>

                                  <TextField type='text' 
                                  name='linkedIn' variant='standard' 
                                  value={contactList.linkedIn && contactList.linkedIn} 
                                  placeholder='linkedIn Link'
                                  onChange={
                                    (e)=>setContactList({
                                      ...contactList,[e.target.name]:e.target.value
                                    })}
                                   />
                                  </Typography>

                                  <Typography className={`${classes.centering} ${classes.margin}`} component='div'>
                                    <Typography paddingRight={1.5} textTransform='capitalize' letterSpacing={0.5} fontWeight={550} fontFamily='sans'>Telegram</Typography>

                                  <TextField type='text' 
                                  name='telegram' variant='standard' 
                                  value={contactList.telegram && contactList.telegram} 
                                  placeholder='telegram Link'
                                  onChange={
                                    (e)=>setContactList({
                                      ...contactList,[e.target.name]:e.target.value
                                    })}
                                   />
                                  </Typography>

                                  <Typography className={`${classes.centering} ${classes.margin}`} component='div'>
                                    <Typography paddingRight={1.5} textTransform='capitalize' letterSpacing={0.5} fontWeight={550} fontFamily='sans'>Viber</Typography>

                                  <TextField type='text' 
                                  name='viber' variant='standard' 
                                  value={contactList.viber && contactList.viber} 
                                  placeholder='viber Link'
                                  onChange={
                                    (e)=>setContactList({
                                      ...contactList,[e.target.name]:e.target.value
                                    })}
                                   />
                                  </Typography>
                            
                                  <Button type='submit' variant='outlined'>save</Button>
                                  </form>
                                  :<Card className={classes.md_padding} elevation={0}>
                                    {
                                      lists.map(list=>(
                                        <Typography className={classes.flex} component='div' key={list.id}>
                                    <Typography 
                                    textTransform='capitalize' 
                                    fontFamily='sans-serif' 
                                    fontWeight={550}>
                                      {list.name} :
                                      </Typography> 

                                      {contactlist.length > 0 ? contactlist.map(clist=>(
                                          <Typography key={clist._id}>{clist[list.name] || 'xxxxxxxxx'}</Typography>
                                      )):
                                    <Typography>{contactList[list.name] || 'xxxxxxxxx'}</Typography>
                                    }

                                  </Typography>
                                      ))
                                    }                              
                                  </Card>
                                }
                                <div className={classes.centering}>
                                <Button onClick={()=>setEdit(true)} variant='outlined'>
                                  <Icon icon={editTwotoneFull} />
                                  Edit
                                </Button>
                                </div>
                                </Box>
                                  
                </Typography>
                </CardContent>
            </Card>
    </Grid>
  )
}

export default Contact