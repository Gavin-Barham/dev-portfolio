import project1 from './../../images/project_images/gb-react-router.png'
import project2 from './../../images/project_images/project2.png'
import project3 from './../../images/project_images/project3.png'
import project4 from './../../images/project_images/project4.png'

const projects = [
    {
        id: 1,
        name: "gb-react-router",
        repo: "https://github.com/Gavin-Barham/gb-react-router",
        coverImg: project1,
        description: "A type safe React routing library for SPA. Built with Typescript and React.",
        link: "https://www.npmjs.com/package/gb-react-router"
    },
    {
        id: 2,
        name: "Unit Converter",
        repo: "https://github.com/Gavin-Barham/unit-coverter",
        coverImg: project2,
        description: "Convert volume, length, and mass between metric and imperial.",
        link: "https://jolly-salamander-62f670.netlify.app"
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

const skills = ["Python", "SQL", "SQLite", "Javascript", "Node.js", "Express.js", "React", "HTML5", "CSS", "REST API's", "Git", "Terminal"]

export {projects, skills}