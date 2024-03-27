import './Projects.css';
import QrProject from '../../assets/images/qr-project.png';
import Chatapp from '../../assets/images/Screenshot from 2024-03-27 19-53-03.png';
import Fst from '../../assets/images/fst.png';
import Ebuds from '../../assets/images/ebuds.png';
import Fastapi from '../../assets/images/fastapi.png';
import Netflix from '../../assets/images/netflix.png';

import {useMemo} from "react";
import {Project as ProjectType} from "../../Types/Project.ts";
import {Project} from  "../";

export const Projects= () => {
    const projects: ProjectType[] = useMemo<ProjectType[]>(() => [
        {
            "title": "Connect To People",
            "subtitle": "Free Chatting Website",
            "description": "The project created for a free chatting website connecting people to send requests, make friends, and chat. It utilizes Django,React, Django Rest Framework, Dhapne, Channels, Signuls, PostgreSQL,Redux, Tailwind, and CSS to create a user-friendly UI and offer a variety of features to enhance your online chatting experience.",
            "github": "https://github.com/MOHAMMEDSIFANKP/Chat_Application_Frontend.git",
            "website": "https://chat-application-one-omega.vercel.app/",
            "image": Chatapp,
            "techStack": ["React", "Django", "Django Rest Framework", "JWT Token", "PostgreSQL", "Websockets", "SignalR", "Django Channels", "Nginx", "Tailwind CSS"]
        },
        
        {
            "title": "Fstkichenequipments",
            "subtitle": "Small Ecommerce Project",
            "description": "This project is a small ecommerce website built for my client. The site showcases products and categories, allowing the admin to add products and categories with images through the backend. Users can view product details and contact the site admin. The site is designed to be very user-friendly. It utilizes Django, Ajax, Bootstrap, PostgreSQL, HTML, and CSS.",
            "github": "https://github.com/MOHAMMEDSIFANKP/Fstkitchenequipments.git",
            "website": "https://fstkitchenequipments.onrender.com/",
            "image": Fst,
            "techStack": ["Django", "Ajax", "Bootstrap", "PostgreSQL", "HTML", "CSS"]
        },
        {
            "title": "User Crud Fast API Project",
            "subtitle": "",
            "description": "This project is built to help students learn FastAPI. It explains authentication with token user login and user CRUD operations. It also covers FastAPI folder structure and documentation , I used Fastapi, JWT Token and Sqlite3.",
            "github": "https://github.com/MOHAMMEDSIFANKP/fastapi_user_crud.git",
            "website": "https://fastapi-user-crud.onrender.com/docs",
            "image": Fastapi,
            "techStack": ["FastAPI", "JWT Token", "React",  "Firebase", "Sqlite3"]
        },        
        {
            "title": "Career Bridge",
            "subtitle": "Job Portal",
            "description": "This project is a job portal with three layers: admin user, regular user, and company user. Users can search for jobs, and companies can post job openings. Users can apply for job postings and schedule interviews. This project utilizes Django, React, Django Rest Framework, Daphne, SignalR, Channels, Redis, and Celery.",
            "github": "https://github.com/MOHAMMEDSIFANKP/career_bridge_backend_aws",
            "website": "",
            "image": "ProjectImage",
            "techStack": ["Django", "Django Rest Framework", "Daphne", "SignalR", "Channels", "Redis", "Celery"]
        },
        {
            "title": "Ebuds",
            "subtitle": "E-Commerce Platform",
            "description": "Ebuds is an e-commerce platform with two user layers: admin and regular users. Admins have the ability to track orders and manage users, while regular users can browse products, make purchases, add items to their cart or wishlist, and access all other functionalities of the website. This project utilizes HTML & CSS, PostgreSQL, and Render.",
            "github": "https://github.com/MOHAMMEDSIFANKP/EBUDS.git",
            "website": "https://ebuds.onrender.com",
            "image": Ebuds,
            "techStack": ["HTML", "CSS", "PostgreSQL", "Render"]
        },
        {
            "title": "Qr Project",
            "subtitle": "",
            "description": "This website is created for two user layers: regular users and admin users. Regular users can login, view their profiles, and generate QR codes associated with their profiles. When admin users log in, they are directed to a dashboard where they can view a list of all users and their corresponding QR codes. Admins also have the ability to scan a QR code to view user details. This project utilizes Django, HTML & CSS, Docker, Social Authentication (Google Authentication), Class-based views, and Django Forms.",
            "github": "https://github.com/MOHAMMEDSIFANKP/django_docker_project.git",
            "website": "https://qr-project-5ic8.onrender.com/",
            "image": QrProject,
            "techStack": ["Django", "HTML", "CSS", "Social Authentication (Google)", "Class-based Views", "Django Forms", "Hosted Render"]
        },        
        {
            "title": "Netflix Clone",
            "subtitle": "Movie Streaming Platform",
            "description": "This project is a Netflix clone created for study purposes. It showcases a collection of movies and TV shows, allowing users to click on them to view trailers. The site mimics the functionality of Netflix. This project utilizes HTML & CSS, JavaScript, React, and other technologies to replicate the Netflix user interface and features.",
            "github": "https://github.com/MOHAMMEDSIFANKP/Netflix_React.git",
            "website": "https://netflix-clone-silk-alpha.vercel.app/",
            "image": Netflix,
            "techStack": ["HTML", "CSS", "JavaScript", "React","Vercel"]
        }
        
        
        
        
      
    ], []);

    return (
        <section id={'projects'} className={'projects container'}>
            <div className={'projects__header'}>
                <p className={'projects__heading'}>Projects</p>
                <p className={'projects__subheading'}>Works, I'm most proud of</p>
            </div>
            <div className={'projects__list'}>
                {projects.map((project, index) => <Project key={index} project={project}/>)}
            </div>
        </section>
    );
};