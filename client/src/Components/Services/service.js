import React from 'react';
import "./style.css";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



const Service = ({img,title,message})=> {
  
  return (
    
   
       <Box  sx={{color:"#fff",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div className='Device_Circle'>
                {img}
            </div>
            
            
            <Typography variant="h5" color={'gray'} marginTop={2} marginBottom={2}>{title}</Typography>
            <Typography sx={{textAlign:"center",paddingX:7, color:'gray', maxWidth:'350px'}} variant="body2" gutterBottom>
               {message}
            </Typography>

       </Box>
     
       

      
      
       
        



    
  )
}

export default Service;