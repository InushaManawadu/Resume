import React from 'react';
import './Resume.css';
import { Grid, Icon, Typography, Paper } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LayersIcon from '@material-ui/icons/Layers';

import resumeData from '../../utils/resumeData';
import { TimelineDot } from '@material-ui/lab';

const Resume = () => {
    return (
        <>
            <Grid container className='section pb_45 pt_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
                </Grid>
            </Grid>

            <Grid container spacing={3} justify='space-between' className='section graybg pb_45 p_50'>

                <Grid item cs={12} sm={6} md={3}>
                    <Paper elevation={0} className='skill'>
                        <Typography variant='h6' className='skills_title'>Frontend</Typography>
                        <Typography variant='body2' className='skills_description'>
                            <TimelineDot variant={'outlined'} className='timeline_dot' />React Js
                        </Typography>
                        <Typography variant='body2' className='skills_description'>
                            <TimelineDot variant={'outlined'} className='timeline_dot' />Angular
                        </Typography>
                        <Typography variant='body2' className='skills_description'>
                            <TimelineDot variant={'outlined'} className='timeline_dot' />React-Native
                        </Typography>
                        <Typography variant='body2' className='skills_description'>
                            <TimelineDot variant={'outlined'} className='timeline_dot' />Flutter
                        </Typography>
                        <Typography variant='body2' className='skills_description'>
                            <TimelineDot variant={'outlined'} className='timeline_dot' />CSS
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item cs={12} sm={6} md={3}>
                    <Paper elevation={0} className='skill'>
                        <Typography variant='h6' className='skills_title'>Backend</Typography>
                        <Typography variant='body2' className='skills_description'>
                            <TimelineDot variant={'outlined'} className='timeline_dot' />Java
                        </Typography>
                        <Typography variant='body2' className='skills_description'>
                            <TimelineDot variant={'outlined'} className='timeline_dot' />Python
                        </Typography>
                        <Typography variant='body2' className='skills_description'>
                            <TimelineDot variant={'outlined'} className='timeline_dot' />PHP
                        </Typography>
                        <Typography variant='body2' className='skills_description'>
                            <TimelineDot variant={'outlined'} className='timeline_dot' />Node Js
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item cs={12} sm={6} md={3}>
                    <Paper elevation={0} className='skill'>
                        <Typography variant='h6' className='skills_title'>Database</Typography>
                        <Typography variant='body2' className='skills_description'>
                            <TimelineDot variant={'outlined'} className='timeline_dot' />My SQL
                        </Typography>
                        <Typography variant='body2' className='skills_description'>
                            <TimelineDot variant={'outlined'} className='timeline_dot' />SQL
                        </Typography>
                        <Typography variant='body2' className='skills_description'>
                            <TimelineDot variant={'outlined'} className='timeline_dot' />Mongo DB
                        </Typography>
                        <Typography variant='body2' className='skills_description'>
                            <TimelineDot variant={'outlined'} className='timeline_dot' />Firebase
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item cs={12} sm={6} md={3}>
                    <Paper elevation={0} className='skill'> 
                        <Typography variant='h6' className='skills_title'>AI</Typography>
                        <Typography variant='body2' className='skills_description'>
                            <TimelineDot variant={'outlined'} className='timeline_dot' />Tensorflow
                        </Typography>
                        <Typography variant='body2' className='skills_description'>
                            <TimelineDot variant={'outlined'} className='timeline_dot' />Open Cv
                        </Typography>
                        <Typography variant='body2' className='skills_description'>
                            <TimelineDot variant={'outlined'} className='timeline_dot' />Keras
                        </Typography>
                    </Paper>
                </Grid>
                
            </Grid>

            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>Experience</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={3} justify='space-around'>

                        <Grid item cs={12} sm={6} md={3}>
                            <div className='service'>
                                <Icon className='service_icon'><CodeIcon /></Icon>
                                <Typography className='service_title' variant='h6'>Web Development</Typography>
                                <Typography className='service_description' variant='body2'>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                                </Typography>
                            </div>
                        </Grid>

                        <Grid item cs={12} sm={6} md={3}>
                            <div className='service'>
                                <Icon className='service_icon'><PhoneAndroidIcon /></Icon>
                                <Typography className='service_title' variant='h6'>Mobile App Development</Typography>
                                <Typography className='service_description' variant='body2'>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                                </Typography><Typography className='service_description' variant='body2'></Typography>
                            </div>
                        </Grid>

                        <Grid item cs={12} sm={6} md={3}>
                            <div className='service'>
                                <Icon className='service_icon'><LayersIcon /></Icon>
                                <Typography className='service_title' variant='h6'>Machine Learning</Typography>
                                <Typography className='service_description' variant='body2'>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                                </Typography>
                            </div>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Resume
