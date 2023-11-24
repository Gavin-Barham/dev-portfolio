import project1 from './../../images/project_images/gb-react-router.png'
import project2 from './../../images/project_images/ht-docs.png'
import project3 from './../../images/project_images/project3.png'
import project4 from './../../images/project_images/project4.png'

const projects = [
    {
        id: 1,
        name: "gb-react-router",
        repo: "https://github.com/Gavin-Barham/gb-react-router",
        coverImg: project1,
        description: "A type safe React routing library for SPA's. Built with Typescript and React.",
        link: "https://www.npmjs.com/package/gb-react-router"
    },
    {
        id: 2,
        name: "Health Tracker API",
        repo: "https://github.com/Gavin-Barham/ht-server-ts",
        coverImg: project2,
        description: "A RestfulAPI backend for a diabetes health tracking app.",
        link: "https://health-tracker-api-docs.netlify.app"
    },
    {
        id: 3,
        name: "Password Generator",
        repo: "https://github.com/Gavin-Barham/password-generator",
        coverImg: project3,
        description: "Random unique password generator.",
        link: "https://wonderful-liger-af836c.netlify.app"
    },
    {
        id: 4,
        name: "NFT Coverpage",
        repo: "https://github.com/Gavin-Barham/NFT-responsive",
        coverImg: project4,
        description: "A responsive NFT market homepage.",
        link: "https://boisterous-arithmetic-af9d9e.netlify.app"
    },
]

const skills = ["C","Javascript","Typescript","Python","SQL","SQLite","PostgreSQL","Firestore","Node.js","Express.js","React","React-Native","Redux","HTML5","CSS","SCSS","REST API's","Docker","AWS","Git","SSH","Linux CLI"]

export {projects, skills}