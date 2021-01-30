import { Card, CardActionArea, CardContent, CardMedia, Grow, Tabs, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import './Portfolio.css';
import { Grid, Tab } from '@material-ui/core';
import resumeData from '../../utils/resumeData';


const Portfolio = () => {

    const[tabValue, setTabValue] = useState("All");

    return (
        <Grid container className='section pb_45 pt_45'>
            <Grid item className='section_title mb_30'>
                <span></span>
                <h6 className='section_title_text'>Portfolio</h6>
            </Grid>
            
            {/**Tabs */}
            <Grid item xs={12}>
                <Tabs 
                    value={tabValue} 
                    indicatorColor='white' 
                    className='custom_tabs' 
                    onChange={(event, newValue) => setTabValue(newValue)}>
                        <Tab label='All' value='All' className={tabValue == 'All' ? 'customTabs_item_active' : 'customTabs_item'} />
                
                    {[...new Set(resumeData.projects.map(item => item.tag))].map(tag => (
                        <Tab label={tag} value={tag} className={tabValue == 'All' ? 'customTabs_item_active' : 'customTabs_item'}/>
                    ))}
                </Tabs>
            </Grid>

            {/**Projects */}
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    {resumeData.projects.map((project) => (
                        <>
                        {tabValue == project.tag || tabValue == 'All' ? (
                            <Grid item> 
                            <Grow in timeout={1000}>
                                <Card className='CustomCard' onClick={() => console.log("Clicked")}>
                                    <CardActionArea>
                                        <CardMedia className='customcard_image' image={project.image} title={project.title} />
                                        <CardContent>
                                            <Typography className='customCard_title'>{project.title}</Typography>
                                            <Typography variant='body2' className='customCard_description'>{project.description}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grow>
                        </Grid>
                        ) : null}   
                        </>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Portfolio
