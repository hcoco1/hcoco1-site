import { SiFlask, SiRedux, SiAxios, SiStyledcomponents } from "react-icons/si";

export const blogPosts = [
    {
        src: "https://hcoco1.blog/assets/images/flask-react-python.png",
        type: 'Coding',
        title: "Building a Navigation Bar using React Router",
        year: "2023-10-07",
        intro: "So, this is it!, the final project...",
        link: "https://hcoco1.blog/Phase-5-Final-Project-Blog/"
    },
    {
        src: "https://hcoco1.blog/assets/images/code_cha.png",
        type: 'Study',
        title: "Phase 4 Study Guide",
        year: "2023-09-21",
        intro: "Study Guide for the Flatiron...",
        link: "https://hcoco1.blog/phase-4-challenge/"
    },
    {
        src: "https://hcoco1.blog/assets/images/rss.png",
        type: 'Coding',
        title: "What is RSS?",
        year: "2023-09-05",
        intro: "Have you noticed the little RSS...",
        link: "https://hcoco1.blog/whats-rss/"
    },
    {
        src: "https://hcoco1.blog/assets/images/sqlalchemy.jpeg",
        type: 'Coding',
        title: "Aggregate functions",
        year: "2023-08-27",
        intro: "In this tutorial, I will use SQLAlchemy...",
        link: "https://hcoco1.blog/aggregate-functions-In-SQLAlchemy/"
    },
    {
        src: "https://hcoco1.blog/assets/images/reac-table.jpg",
        type: 'Coding',
        title: "Dynamic Tables in React",
        year: "2023-07-01",
        intro: "In web development, tables are commonly...",
        link: "https://hcoco1.blog/creating-a-dynamic-table-in-react/"
    },
    {
        src: "https://hcoco1.blog/assets/images/js.png",
        type: 'Coding',
        title: "JS Dynamic List",
        year: "2023-05-01",
        intro: "Since I had difficulty showing a list of items...",
        link: "https://hcoco1.blog/javascript-dynamic-list/"
    },
    {
        src: 'https://hcoco1.blog/assets/images/change.jpeg',
        type: 'World',
        title: "Changing careers",
        year: "2023-02-01",
        intro: "Changing careers is exciting and ...",
        link: "https://hcoco1.blog/changing-careers/"
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
            'Scanning, inspecting, and sorting merchandise and packages to reach their intended locations. Implemented safety protocols to minimize workplace accidents and maintained a clean and organized work environment.',
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