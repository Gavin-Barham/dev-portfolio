import style from './resume.module.css'
import {skills} from '../Projects/data.js'

export default function Resume(){
    const skillsHtml = skills.map(skill => {
        return <li key={skill}>{skill}</li>
    })
    return (
        <div className={style.resume}>
            <h1 className={style.page_title}>Resume</h1>
            <div className={`${style.section} ${style.skills}`}>
                <h2 className={style.section_title}>Expertise</h2>
                <hr></hr>
                <div className={style.content}>
                    <ul>
                        {skillsHtml}
                    </ul>
                </div>
            </div>
            <div className={`${style.section} ${style.education}`}>
                <h2 className={style.section_title}>Education</h2>
                <hr></hr>
                <div className={style.content}>
                    <ul>
                        <li>
                            <div className={style.course}>
                                <h3>CS50x</h3>
                                <h4>Harvard Online Course</h4>
                                <p className={style.date}>05/22 - 11/22</p>
                                <p className={style.subject}>Intro to computer science</p>
                            </div>
                        </li>
                        <li>
                            <div className={style.course}>
                                <h3>Odin Project</h3>
                                <h4>Odin Online Course</h4>
                                <p className={style.date}>11/22 - 01/23</p>
                                <p className={style.subject}>Node.js & Express.js course</p>
                            </div>
                        </li>
                        <li>
                            <div className={style.course}>
                                <h3>Scrimba</h3>
                                <h4>Scrimba Online Course</h4>
                                <p className={style.date}>01/23 - 03/23</p>
                                <p className={style.subject}>Frontend carrer path</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`${style.section} ${style.volunteer}`}>
                <h2 className={style.section_title}>Volunteer</h2>
                <hr></hr>
                <div className={style.content}>
                    <h3>Mentor Scrimba Students</h3>
                    <p className={style.date}>01/23-present</p>
                    <h4>Tasks/Achievments</h4>
                    <ul>
                        <li>
                            <p className={style.bullet}>Help other members of courses I've completed with code reviews and active mentorship</p>
                        </li>
                        <li>
                            <p className={style.bullet}>Help keep members motivated and fight through imposter syndrome</p>
                        </li>
                        <li>
                            <p className={style.bullet}>Work with members to set weekly goals and challenges for themselves</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}