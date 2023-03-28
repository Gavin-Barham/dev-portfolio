import {NavLink} from 'react-router-dom'

import style from './Main.module.css'
import profilePic from '../../profile.png'


export default function Main() {
    return ( 
        <>
            <main className={style.main__container}>
                    <div className={style.content_container}>
                        <h1 className={style.large_text}>Hello</h1>
                        <h3 className={style.title}>A bit about me</h3>
                        <p>
                            I began my coding journey on March 24, 2022 with CS50x an intro to computer science course offered by Harvard, and since that first "Hello, world" i haven't looked back. The endless learning and depth of the field has been my biggest draw to programming by far as well as the joy of creating things that help people, and solve problems for them.
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