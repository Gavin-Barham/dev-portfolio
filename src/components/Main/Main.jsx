import {NavLink} from 'react-router-dom'

import style from './Main.module.css'
import profilePic from '../../images/profile.png'


export default function Main() {
    return ( 
        <>
            <main className={style.main__container}>
                    <div className={style.content_container}>
                        <h1 className={style.large_text}>Hello</h1>
                        <h3 className={style.title}>A bit about me</h3>
                        <p>
                            I began my coding journey on March 24, 2022 with CS50x an intro to computer science course offered by Harvard. Since that first - “Hello, world!” - I haven't looked back. The depth of the field and endless learning curve continues to intrigue and draw me deeper into software engineering and programming. The joy found in successfully creating applications that provide vast improvements in the day to day operations of homes, businesses, and industries, offers the kind of job satisfaction that will keep me looking forward to opening my code editor each and every day, for years to come.
                        </p>
                        <div className={style.btn_container}>
                            <div> 
                                <NavLink className={`${style.nav_btn} ${style.yellow}`} to='/projects'>Projects</NavLink>
                            </div>
                            <div>
                                <NavLink className={`${style.nav_btn} ${style.red}`} to='/resume'>Resume</NavLink>
                            </div>
                            <div>
                                <NavLink className={`${style.nav_btn} ${style.blue}`} to='/contact'>Contact</NavLink>
                            </div>
                        </div>
                    </div>
                    <img className={style.profile_pic} src={profilePic}></img>
            </main>   
        </>
    )
}