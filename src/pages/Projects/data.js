import project1 from './../../images/project_images/project1.png'
import project2 from './../../images/project_images/project2.png'
import project3 from './../../images/project_images/project3.png'
import project4 from './../../images/project_images/project4.png'

const projects = [
    {
        id: 1,
        name: "Dice Game",
        repo: "https://github.com/Gavin-Barham/strixhaven-rpg-app",
        coverImg: project1,
        description: "A dice rolling rpg game for desktop browser",
        link: "https://voluble-faun-c3ca7c.netlify.app"
    },
    {
        id: 2,
        name: "Unit Converter",
        repo: "https://github.com/Gavin-Barham/unit-coverter",
        coverImg: project2,
        description: "Convert volume, length, and mass between metric and imperial",
        link: "https://jolly-salamander-62f670.netlify.app"
    },
    {
        id: 3,
        name: "Password Generator",
        repo: "https://github.com/Gavin-Barham/password-generator",
        coverImg: project3,
        description: "A random password generator",
        link: "https://wonderful-liger-af836c.netlify.app"
    },
    {
        id: 4,
        name: "NFT Coverpage",
        repo: "https://github.com/Gavin-Barham/NFT-responsive",
        coverImg: project4,
        description: "A responsive NFT market homepage",
        link: "https://boisterous-arithmetic-af9d9e.netlify.app"
    },
]

const skills = ["Python", "SQL", "SQLite", "Javascript", "Node.js", "Express.js", "React", "HTML5", "CSS", "REST API's", "Git", "Terminal"]

export {projects, skills}