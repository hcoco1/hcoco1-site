import { SiFlask, SiRedux, SiAxios, SiStyledcomponents } from "react-icons/si";

export const blogPosts = [
    {
        src: "https://hcoco1.blog/assets/images/flask-react-python.png",
        type: 'Coding',
        title: "Building a Navigation Bar",
        year: "2023-10-07",
        intro: "So, this is it!, the final project...",
        link: "https://hcoco1.blog/Phase-5-Final-Project-Blog/",
        filePath: './src/data/posts/phase-5-final-project-blog.md',
        tags: ['#Flask', '#UseContext', '#Axios', '#StyledComponents', '#PostgreSQL'],
        badge: 'New'
    },
    {
        src: "https://hcoco1.blog/assets/images/code_cha.png",
        type: 'Study',
        title: "Phase 4 Study Guide",
        year: "2023-09-21",
        intro: "Study Guide for the Flatiron...",
        link: "https://hcoco1.blog/phase-4-challenge/",
        filePath: './src/data/posts/phase-4-challenge.md',
        tags: ['#Flask', '#Python', '#SQLAlchemy', '#SQLite3', '#Click'],
        badge: 'New'
    },
    {
        src: "https://hcoco1.blog/assets/images/rss.png",
        type: 'Coding',
        title: "What is RSS?",
        year: "2023-09-05",
        intro: "Have you noticed the little RSS...",
        link: "https://hcoco1.blog/whats-rss/",
        filePath: './src/data/posts/whats-rss.md',
        tags: ['#RSS', '#Feed', '#XML'],
        
    },
    {
        src: "https://hcoco1.blog/assets/images/sqlalchemy.jpeg",
        type: 'Coding',
        title: "Aggregate functions",
        year: "2023-08-27",
        intro: "In this tutorial, I will use SQLAlchemy...",
        link: "https://hcoco1.blog/aggregate-functions-In-SQLAlchemy/",
        filePath: './src/data/posts/aggregate-functions-In-SQLAlchemy.md',
        tags: ['#SQLAlchemy', '#SQLite3'],

    },
    {
        src: "https://hcoco1.blog/assets/images/reac-table.jpg",
        type: 'Coding',
        title: "Dynamic Tables in React",
        year: "2023-07-01",
        intro: "In web development, tables are commonly...",
        link: "https://hcoco1.blog/creating-a-dynamic-table-in-react/",
        filePath: './src/data/posts/creating-a-dynamic-table-in-react.md',
        badge: 'Most readed',
        tags: ['#ReactTable', '#ReactBootstrap', '#ReactRouter'],
    },
    {
        src: "https://hcoco1.blog/assets/images/js.png",
        type: 'Coding',
        title: "JS Dynamic List",
        year: "2023-05-01",
        intro: "Since I had difficulty showing a list of items...",
        link: "https://hcoco1.blog/javascript-dynamic-list/",
        filePath: './src/data/posts/javascript-dynamic-list.md',
        tags: ['#JavaScript'],
    },
    {
        src: 'https://hcoco1.blog/assets/images/change.jpeg',
        type: 'World',
        title: "Changing careers",
        year: "2023-02-01",
        intro: "Changing careers is exciting and ...",
        link: "https://hcoco1.blog/changing-careers/",
        filePath: './src/data/posts/changing-careers.md',
        tags: ['#Career'],
    }
];

export const portafolio_Posts = [
    {
        src: "https://hcoco1.blog/assets/images/flask-react-python.png",
        type: 'Web App',
        title: "E-commerce",
        year: "October 2023",
        intro: "This project is an e-commerce platform built with React for the frontend and flask for the backend.",
        link_app: "https://phase5-app-tyia.onrender.com/",
        link_git: "https://github.com/hcoco1/e-commerce-2",
        link_demo: "https://youtu.be/9TeuJNePlGw",
        tags: ['#Flask', '#UseContext', '#Axios', '#StyledComponents', '#PostgreSQL'],
        badge: 'New'
    },
    {
        src: "https://srinathh.github.io/assets/images/generic/jekyll-logo-dark-solid.png",
        type: 'Web Site',
        title: "Ivan Arias Blog Site",
        year: "September 2023",
        intro: "My blog site is a Jekyll static site whose purpose is to share my knowledge and experience in the software development world.",
        link_app: "https://hcoco1.blog/",
        link_git: "https://github.com/hcoco1/blog-hcoco1",
        tags: ['#Jekyll', '#Github'],
        
    },
    {
        src: "https://www.web-alliance.co.uk/blog/admin/blg_img/1663842396_1654089990_AdobeStock_42677898%20(1).jpeg",
        type: 'Web App',
        title: "Database Tool (DT)",
        year: "August 2023",
        intro: "Database Tool (DT) is a SQLALCHEMY/SQLITE3/CLICK command line interface (CLI) designed to manage US entities",
        link_git: "https://github.com/hcoco1/phase3_cli_click",
        link_demo: "https://youtu.be/UrotTLXdx5c",
        tags: ['#SQLAlchemy', '#SQLite3', '#Click'],
        badge: 'Popular'
    },
    {
        src: "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/03/931/506/FLORIDA-REAL-ESTATE-HOME-SALE-GETTY.jpg?ve=1&tl=1",
        type: 'Web App',
        title: "Real Estate Site (RES)",
        year: "July 2023",
        intro: "Real Estate Site (RES) is a REACT/REACT-BOOTSTRAP/REACT-ROUTER app that accesses data from a web database.",
        link_app: "https://phase2app.vercel.app/",
        link_git: "https://github.com/hcoco1/phase2app",
        link_demo: "https://youtu.be/gTGiYxPJ-Dk",
        tags: ['#ReactRouter', '#ReactBootstrap'],
      
    },
    {
        src: "https://images.unsplash.com/photo-1457092716468-97352752b749?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1095&q=80",
        type: 'Web Site',
        title: "My Web Site (latest version)",
        year: "July 2023",
        intro: "My last site looked good, but I wasn't happy with it. I wanted to build  web page using something other than pre-build templates",
        link_app: "https://hcoco1.com/",
        link_git: "https://github.com/hcoco1/hcoco1-site",
        tags: ['#React', '#ReactBootstrap', '#ReactRouter'],
        
    },
    {
        src: "https://i.ebayimg.com/images/g/RBwAAOSwsv5cg8lp/s-l1600.jpg",
        type: 'Web App',
        title: "World Population Dashboard (WPD)",
        year: "May 2023",
        intro: "World Population Dashboard is an HTML/CSS/JS app that accesses data from an API I created. You can leave messages, and they will persist.",
        link_app: "https://hcoco1.github.io/Phase1_app/",
        link_git: "https://github.com/hcoco1/Phase1_app",
        link_demo: "https://youtu.be/w_4ZAicscw4",
        tags: ['#HTML', '#CSS', '#JavaScript', '#API'],
        
    },
    {
        src: "https://www.bootstrapdash.com/blog/wp-content/uploads/2017/08/bootstrap-4-beta-whats-new.jpg",
        type: 'Web Site',
        title: "My Web Site (Bootstrap version)",
        year: "Feb 2023",
        intro: "This website was created using a BOOTSTRAP template. I used React app to modify it with Bootstrap classNames.",
        link_app: "https://hcoco1.github.io/hcoco1-site-bootstrap/",
        link_git: "https://github.com/hcoco1/hcoco1-site-bootstrap",
        tags: ['#React', '#Bootstrap'],
        
    },
    {
        src: 'https://tatuking.com/wp-content/uploads/2020/06/html-css3.jpg',
        type: 'Web Site',
        title: "My Web Site (oldest version)",
        year: "Sep 2022",
        intro: "This website was created using plain HTML and CSS, serving as my introduction to the world of web development.",
        link_app: "https://hcoco1.github.io/hcoco1-website/",
        link_git: "https://github.com/hcoco1/hcoco1-website",
        tags: ['#HTML', '#CSS'],
        
    }
];

export const skills = [
    { iconName: "fab fa-react fa-2x", color: '#3366c4', skillName: "React", percentage: 50 },
    { iconName: "fab fa-react fa-2x", color: '#3366c4', skillName: "React Router", percentage: 40 },
    { iconName: "fab fa-bootstrap fa-2x", color: '#563d7c', skillName: "Bootstrap", percentage: 40 },
    { iconName: "fab fa-sass fa-2x", color: '#c92f2f', skillName: "Sass", percentage: 20 },
    { iconName: "fab fa-figma fa-2x", color: '#563d7c', skillName: "Figma", percentage: 10 },
    { iconName: "fab fa-github fa-2x", color: 'black', skillName: "GitHub", percentage: 50 },
    { iconName: "fab fa-js fa-2x", color: '#b6d14d', skillName: "JavaScript", percentage: 40 },
    { iconName: "fab fa-html5 fa-2x", color: '#11cee3', skillName: "HTML", percentage: 60 },
    { iconName: "fab fa-css3-alt fa-2x", color: '#c52727', skillName: "CSS", percentage: 60 },
    { iconName: "fab fa-python fa-2x", color: '#1e1e1f', skillName: "Python", percentage: 30 },
    { iconName: "fas fa-database fa-2x", color: '#d0bc35', skillName: "SQL", percentage: 30 },
    { IconComponent: SiFlask, color: 'black', skillName: "Flask", percentage: 30 },
    { IconComponent: SiRedux, color: 'purple', skillName: "Redux", percentage: 20 },
    { IconComponent: SiAxios, color: 'black', skillName: "Axios", percentage: 20 },
    { IconComponent: SiStyledcomponents, color: 'blue', skillName: "Styled Components", percentage: 20 },




];

export const interests = [
    { href: "https://chess.com", iconName: "fas fa-chess fa-3x", color: '#81f89f', interestName: "Chess" },
    { href: "https://scrimba.com/", iconName: "fas fa-laptop-code fa-3x", color: '#5638b9', interestName: "Coding" },
    { href: "https://theweek.com/", iconName: "fas fa-landmark fa-3x", color: '#a0bd38', interestName: "Politics" },
    { href: "https://photographylife.com/", iconName: "fas fa-camera-retro fa-3x", color: '#343d3b', interestName: "Photography" },
    { href: "https://www.nationalgeographic.com/magazine/", iconName: "fas fa-microscope fa-3x", color: '#1cc427', interestName: "Science" },
    { href: "https://open.spotify.com/user/ivan.arias23?si=e96f5e710e3b4b1a", iconName: "fas fa-music fa-3x", color: '#bd5d38', interestName: "Music" },
    { href: "https://www.wsj.com/podcasts/the-journal", iconName: "fas fa-podcast fa-3x", color: '#1c70d0', interestName: "Podcasts" },
    { href: "https://www.economist.com/", iconName: "fas fa-money-bill-alt fa-3x", color: '#ed0404', interestName: "Economics" },
    { href: "https://www.raspberrypi.org/learn/", iconName: "fab fa-raspberry-pi fa-3x", color: '#ed0404', interestName: "Pi" },
];

export const educationData = [
    {
        title: 'Flatiron School',
        year: 'October 2023 - Feb 2023',
        role: 'Software Engineer',
        description: 'Program Objectives: Build a full-stack web application with a React frontend, a Flask backend, and a PostgreSQL database.',
        link: 'https://flatironschool.com/',
    },
    {
        title: 'Valencia College',
        year: 'December 2022 - Apr 2022',
        role: 'Intensive English Program (IEP) Student',
        description: 'The Intensive English Program (IEP) is accredited by the Commission on English Language Program Accreditation.',
        link: 'https://valenciacollege.edu/academics/continuing-education/intensive-english-program/program-description.php',
    },
    {
        title: 'Florida Department of Education',
        year: 'May 2022 - Jan 2022',
        role: 'High School equivalency Diploma - GED',
        description: 'The General Education Development (GED) diploma is a valuable credential that can open doors to various education and career opportunities.',
        link: 'https://ged.com/',
    },
    {
        title: 'Central University of Venezuela',
        year: 'Nov 2013 - Nov 2010',
        role: 'M.Sc. in Geology (unfinished)',
        description: 'The objective of this master\'s degree is to generate a graduate with greater versatility in the field of industry and the applied sciences of Geology.',
        link: 'https://www.timeshighereducation.com/world-university-rankings/universidad-central-de-venezuela-ucv',
    },
    {
        title: 'Central University of Venezuela',
        year: 'Dec 2004 - Feb 1999',
        role: 'Geological Engineering degree',
        description: 'The objective of this degree is to generate a graduate with greater versatility in the field of industry and the applied sciences of Geology.',
        link: 'https://www.timeshighereducation.com/world-university-rankings/universidad-central-de-venezuela-ucv',
    },
];

export const experienceData = [
    {
        title: 'Amazon. C.A.',
        year: 'November 2020 - Present',
        role: 'Sortation Associate',
        description:
            'Scanning, inspecting, and sorting merchandise and packages to reach their intended locations. Implement safety protocols to minimize workplace accidents and maintained a clean and organized work environment.',
        link: 'https://www.amazon.jobs/en',
    },
    {
        title: 'Staffing Solutions',
        year: 'December 2019 - November 2020',
        role: 'General Labour',
        description:
            'Perform general landscaping duties, maintaining the cleanliness and appearance of the workplace and providing quality service in a timely and friendly manner.',
        link: 'https://www.livecareer.com/resume/objectives/construction/general-labor',
    },
    {
        title: 'Petroleum of Venezuela (PDVSA)',
        year: 'January 2005 - December 2019',
        role: 'Sedimentologist & Stratigrapher',
        description:
            'Oil and Gas Exploration Project with strict adherence to deadlines, Geostatistical Modeling, and GIS-based Thematic Mapping.',
        link: 'http://www.pdvsa.com/index.php?lang=en',
    },
];