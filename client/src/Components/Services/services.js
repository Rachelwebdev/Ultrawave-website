import "./style.css";
import Grid from '@mui/material/Grid';
import Service from "./service";


import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import WebIcon from '@mui/icons-material/Web';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Typography } from "@mui/material";



const Services = ()=>{
    const Services = [
        {
            img:<ImportantDevicesIcon sx={{fontSize:100}}/>,
            title:"Web Development",
            message:"We can turn your ideas into beautiful and powerful products that will make your business standout from the crowd."
        },
        {
            img:<WebIcon sx={{fontSize:100}}/>,
            title:"Web Marketing",
            message:"we will help you market your company online to prospective leads and high-value consumers"
        },
        {
            img:<SupportAgentIcon sx={{fontSize:100}}/>,
            title:"LifeTime Support",
            message:"We are forever responsible for the applications we build for you and we promise to be there for you if you need us."
        }

]
    return(
        <>
          
        
        <div className="Services_Container">
        <Typography variant="h5" fontWeight={700} color={'#E809A0'} marginTop={2} marginBottom={1}>
            Services We Provide
        </Typography>
        <Typography fontSize={'0.8rem'} fontWeight={700} color={'gray'}  marginBottom={2}>
        we only offer what we do best
        </Typography>

            <Grid container spacing={4}>
               {Services.map((service,i)=>{
                   return(
                    <Grid key={i} item xs={12} md={4} lg={4}>
                      <Service img={service.img} title={service.title} message={service.message}/>
                    </Grid>
                    )
               })}
                
                
            </Grid>
           
           

        </div>

        
        
        </>

        
    )
}

export default Services;