import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";
import Modal from 'react-modal';

export const List=({people,setPeople})=>{
  const [modalIsOpen,setIsOpen]=useState(false)
  const [imgUrl,setImgUrl]=useState('');
  const openModal=(e)=>{
    console.log(e.traget)
    setImgUrl(e.target.src)
    setIsOpen(true)
  };
  const closeModal=()=>{
    setIsOpen(false);
  }
  const handleDelete=(e)=>{
    console.log(e.target.id)
  }
    console.log(people);

    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };
    

    return(
        <>
        <div className="row justify-content-center text-center">
          {people.length==0 && <div>...no events</div>}
        {people.map((obj)=>(
            <div className="mt-2 col-md-4 col-12">
            <Card sx={{ maxWidth: 280 }} className="border border-danger" >
            <CardMedia
              component="img"
              height="140"
              image={obj.image}
              alt={obj.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {obj.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {obj.age}
              </Typography>
            </CardContent>
            <CardActions>
              <motion.span whileHover={{ scale: 1.3 }}>

              
              <Button id={obj.id} size="small" color="primary" onClick={handleDelete}>
                Delete
              </Button>
              </motion.span>
            </CardActions>
          </Card>
          </div>
        ))}
        
        </div>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button onClick={closeModal}>close</button>
        <Button onClick={closeModal} size="small" color="primary">close</Button>
        <div><img className='modalImg' src={imgUrl} alt="foto" />
        </div>
      </Modal>
        
        </>
    )
}