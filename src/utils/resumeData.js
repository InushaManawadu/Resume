import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default{
    name: 'Inusha Manawadu',
    title: 'Software Engineering Undergraduate',
    birthday: '02-09-1998',
    email: 'inusha.20191059@iit.ac.lk',
    phone: '+94 767262633',
    university: 'Informatics Institute of Technology',

    socials: {
        Facebook: {
            link: 'asa',
            text: 'Inusha Manawadu',
            Icon: <FacebookIcon />
        },
        LinkedIn: {
            link: 'asa',
            text: 'Inusha Manawadu',
            Icon: <LinkedInIcon />
        },
        GitHub: {
            link: 'asas',
            text: 'Inusha Manawadu',
            Icon: <GitHubIcon />
        },
    },
    about : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. \n\n Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",

    projects: [
        {
            tag: "React",
            image: "",
            title: "Project 1",
            description: "This is my first project using react",
            links: [
                { link: "https://www.google.com", icon: <GitHubIcon/>},
                { link: "https://www.google.com", icon: <GitHubIcon/>},
                { link: "https://www.google.com", icon: <GitHubIcon/>},
            ],
        },

        {
            tag: "React",
            image: "",
            title: "Project 1",
            description: "This is my first project using react",
            links: [
                { link: "https://www.google.com", icon: <GitHubIcon/>},
                { link: "https://www.google.com", icon: <GitHubIcon/>},
                { link: "https://www.google.com", icon: <GitHubIcon/>},
            ],
        },

        {
            tag: "Java",
            image: "",
            title: "Project 1",
            description: "This is my first project using Python",
            links: [
                { link: "https://www.google.com", icon: <GitHubIcon/>},
                { link: "https://www.google.com", icon: <GitHubIcon/>},
                { link: "https://www.google.com", icon: <GitHubIcon/>},
            ],
        },

        {
            tag: "Java",
            image: "",
            title: "Project 1",
            description: "This is my first project using Java",
            links: [
                { link: "https://www.google.com", icon: <GitHubIcon/>},
                { link: "https://www.google.com", icon: <GitHubIcon/>},
                { link: "https://www.google.com", icon: <GitHubIcon/>},
            ],
        },
    ],

};