import {useState, useEffect} from 'react'

import style from './icon.module.css'

export default function Icon({isActive, setIsActive}) {

    function toggle() {
        setIsActive(prevState => !prevState)
    }
    return (
        <>
            <div className={style.button_container}>
                <div className={style.button} onClick={toggle}>
                    <div className={isActive ? `${style.line} ${style.top} ${style.handle_top}` : `${style.line} ${style.top}`}></div>
                    <div className={isActive ? `${style.line} ${style.middle} ${style.hidden}` : `${style.line} ${style.middle}`}></div>
                    <div className={isActive ? `${style.line} ${style.bottom} ${style.handle_bottom}` : `${style.line} ${style.bottome}`}></div>
                </div>
            </div>
        </>
    )
}