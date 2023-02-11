import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DoneIcon from '@mui/icons-material/Done';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function BasicCard() {
  return (
    <div>
      <h2 className='text-center font-weight-bold hdtxt'>Netlify Pricing</h2>
    <Box style={{ display: 'flex', justifyContent: 'center', padding: '10px 0' }} className="fntname">
 <Card sx={{  width: '300px', marginRight: '10px', marginLeft: '10px', padding: '0px'}} className="cardshd ">
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h4" component="div" style={{ textAlign:'center', padding: '5px 0' }} className="fntname">
          Starter
        </Typography>
       
        <Typography variant="body2" style={{ textAlign:'center', padding: '3px 0' }} className="fntname">
          The basics for personal projects, hobby sites, or experiments.
        </Typography>
      </CardContent>
      <CardActions>
        <div className='cnt'>
      <Button variant="contained" size="large" style={{ fontSize: '13px', fontWeight: 'bold'}} className="fntname col-md-12 text-center">
          Start for free
        </Button>
        </div>
      </CardActions>
      <div className='mrg'>
      <CardContent className="crdbgclr" >
        <Typography className='txtcnt'>
            <h2 className='algncnt fntname'>Free <span className='smltxt'> to get started</span></h2>
        </Typography>
      </CardContent>
      </div>
      <nav aria-label="main mailbox folders" className="fntname" style={{ padding: '10px'}}>
        <List>
          <ListItem disablePadding>
           
              <ListItemIcon>
               <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Deploy to global edge network" className="fntname" />
           
          </ListItem>
          <ListItem disablePadding>
           
              <ListItemIcon>
              <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Live site previews with a collaboration UI for team members" />
          </ListItem>
          <ListItem disablePadding>
           
              <ListItemIcon>
               <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Instant rollbacks to any version" />
           
          </ListItem>
          <ListItem disablePadding>
            
              <ListItemIcon>
              <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Deploy static assets & dynamic serverless functions" />
            
          </ListItem>
        </List>
      </nav>
    </Card>

    <Card sx={{  width: '300px', marginRight: '10px', marginLeft: '10px', padding: '0px'}} className="cardshd ">
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h4" component="div" style={{ textAlign:'center', padding: '5px 0' }} className="fntname">
          Pro
        </Typography>
       
        <Typography variant="body2" style={{ textAlign:'center', padding: '3px 0' }} className="fntname">
        Advanced features and support for private organization Git repos.
        </Typography>
      </CardContent>
      <CardActions>
        <div className='cnt'>
      <Button variant="contained" size="large" style={{ fontSize: '13px', fontWeight: 'bold'}} className="fntname col-md-12 text-center">
          Buy Pro
        </Button>
        </div>
      </CardActions>
      <div className='mrg'>
      <CardContent className="crdbgclr" >
        <Typography className='txtcnt'>
            <h2 className='algncnt fntname'><sup>$</sup>19 <span className='smltxt'>per member /month</span></h2>
        </Typography>
      </CardContent>
      </div>
      <nav aria-label="main mailbox folders" className="fntname" style={{ padding: '10px'}}>
        <List>
          <ListItem disablePadding>
           
              <ListItemIcon>
               <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Starter features, plus:" className="font-weight-bold" />
           
          </ListItem>
          <ListItem disablePadding>
           
              <ListItemIcon>
              <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Background Functions" />
           
          </ListItem>
          <ListItem disablePadding>
           
              <ListItemIcon>
               <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Password-protected sites" />
           
          </ListItem>
          <ListItem disablePadding>
            
              <ListItemIcon>
              <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="1TB bandwidth and 25k build minutes" />
            
          </ListItem>
          <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Audit logs with 7-day history" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Shared environment variables" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Slack & email notifications" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Email support" />
          
        </ListItem>
        </List>
      </nav>
    </Card>

    <Card sx={{  width: '300px', marginRight: '10px', marginLeft: '10px', padding: '0px'}} className="cardshd ">
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h4" component="div" style={{ textAlign:'center', padding: '5px 0' }} className="fntname">
        Business
        </Typography>
       
        <Typography variant="body2" style={{ textAlign:'center', padding: '3px 0' }} className="fntname">
        Collaboration, security, & compliance for larger teams getting started.
        </Typography>
      </CardContent>
      <CardActions>
        <div className='cnt'>
      <Button variant="contained" size="large" style={{ fontSize: '13px', fontWeight: 'bold'}} className="fntname col-md-12 text-center">
          Buy Business
        </Button>
        </div>
      </CardActions>
      <div className='mrg'>
      <CardContent className="crdbgclr" >
        <Typography className='txtcnt'>
            <h2 className='algncnt fntname'><sup>$</sup>99 <span className='smltxt'>per member /month</span></h2>
        </Typography>
      </CardContent>
      </div>
      <nav aria-label="main mailbox folders" className="fntname" style={{ padding: '10px'}}>
        <List>
          <ListItem disablePadding>
           
              <ListItemIcon>
               <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Pro features, plus:" className="font-weight-bold" />
           
          </ListItem>
          <ListItem disablePadding>
           
              <ListItemIcon>
              <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="SAML single sign-on" />
           
          </ListItem>
          <ListItem disablePadding>
           
              <ListItemIcon>
               <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Role-based access control" />
           
          </ListItem>
          <ListItem disablePadding>
            
              <ListItemIcon>
              <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="1.5TB bandwidth and 35k build minutes" />
            
          </ListItem>
          <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Audit logs with full history" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Unlimited Analytics for all sites" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Unlimited Forms and Identity" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Billing administrator role" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Support for GitHub Enterprise Server or self-managed GitLab" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Build Prioritization" />
          
        </ListItem>
        </List>
      </nav>
    </Card>

    <Card sx={{  width: '300px', marginRight: '10px', marginLeft: '10px', padding: '0px'}} className="cardshd ">
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h4" component="div" style={{ textAlign:'center', padding: '5px 0' }} className="fntname">
        Enterprise
        </Typography>
       
        <Typography variant="body2" style={{ textAlign:'center', padding: '3px 0' }} className="fntname">
        A custom plan with services tailored to team and performance requirements.
        </Typography>
      </CardContent>
      <CardActions>
        <div className='cnt'>
      <Button variant="contained" size="large" style={{ fontSize: '13px', fontWeight: 'bold'}} className="fntname col-md-12 text-center">
          Contact us
        </Button>
        </div>
      </CardActions>
      <div className='mrg'>
      <CardContent className="crdbgclr" >
        <Typography className='txtcnt'>
            <h2 className='algncnt fntname'>Contact us </h2>
        </Typography>
      </CardContent>
      </div>
      <nav aria-label="main mailbox folders" className="fntname" style={{ padding: '10px'}}>
        <List>
          <ListItem disablePadding>
           
              <ListItemIcon>
               <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="99.99% uptime SLA" className="font-weight-bold" />
           
          </ListItem>
          <ListItem disablePadding>
           
              <ListItemIcon>
              <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="24×7×365 premium support" />
           
          </ListItem>
          <ListItem disablePadding>
           
              <ListItemIcon>
               <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Unlimited teams with org-level controls" />
           
          </ListItem>
          <ListItem disablePadding>
            
              <ListItemIcon>
              <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Enterprise-grade global edge network" />
            
          </ListItem>
          <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="High-Performance Build with SLAs" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Custom contracts & invoicing" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Security & compliance review" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText style={{fontWeight:'bold'}} primary="Pentesting and load testing" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Log Drains" />
          
        </ListItem>
      
        </List>
      </nav>
    </Card>
    </Box>    
    </div>

    
  );
}