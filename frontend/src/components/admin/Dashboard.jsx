import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container, Typography, AppBar, Grid, Button } from '@mui/material';
import './styles/Dashboard.css';


import CreatePost from './CreatePost';
import AllPosts from './AllPosts';

const Dashboard = () => {

    const handleCreatePostClick = ()=>{
        const root = ReactDOM.createRoot(document.getElementById('admin-root'));
        root.render(
            <CreatePost />
        );
    }
    const handleAllPostClick = ()=>{
        const root = ReactDOM.createRoot(document.getElementById('admin-root'));
        root.render(
            <AllPosts />
        );
    }


    return (
        <div className="dashboard-wrapper">
            <Container>
                <AppBar className='navbar'>
                    <Typography variant='h4'>
                        Welcome Admin
                    </Typography>
                </AppBar>
                <Grid container spacing={2} className='grid-con' >
                    <Grid item xs={5}>
                        
                        <Grid className='navitem' item xs={12}>
                        <Button variant='contained' onClick={()=>handleCreatePostClick()}>
                            Create Post
                        </Button>
                        </Grid>
                        <Grid className='navitem' item xs={12}>
                        <Button variant='contained' onClick={()=>handleAllPostClick()}>
                            All Post
                        </Button>
                        </Grid>
                        
                        
                        
                    </Grid>
                    <Grid id='admin-root' item xs={7}>
                    
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Dashboard