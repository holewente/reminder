import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const List=({people})=>{
    console.log(people);
    return(
        <>
        <div className="row justify-content-center text-center">
        {people.map((obj)=>(
            <div className="mt-2 col-md-4 col-12">
            <Card sx={{ maxWidth: 345 }} className="border border-danger" >
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
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          </div>
        ))}
        
        </div>
        
        </>
    )
}