import {projects} from './data.js'
import style from './projects.module.css'

export default function Projects(){
    const projectsHtml = projects.map(project => {
        const {id, name, repo, coverImg, description:desc, link} = project
        return (
            <div key={id} className={style.project_container}>
                <h1 className={style.project_title}>{name}</h1>
                <a href={link}><img className={style.project_img} src={coverImg} /></a>
                <p className={style.desc}>{desc}</p>
                <a className={style.github} href={repo}><i className="fa-xl fa-brands fa-github"></i></a>
            </div>
        )
    })
    return (
        <>
            <h1 className={style.page_title}>Projects</h1>
            <div className={style.main_container}>
                {projectsHtml}
            </div>
        </>
    )
}