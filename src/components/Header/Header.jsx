
import {NavLink} from 'react-router-dom'
import { useState } from 'react';
import Icon from '../Icon/Icon';
import style from './header.module.css';

export default function Header(props) {
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState(false)

  function handleLinkClick(props) {
    const {setScroll} = props
    setShow(prevShow => !prevShow);
    setIsActive(prevIsActive => !prevIsActive)
    setScroll(prevScroll => !prevScroll)
  }

  return (
    <>
      <header className={style.container}>
        <NavLink className={style.navlink} to="/">
          <div className={style.index_link}>
            <div className={style.circle}></div>
            <h3 className={style.name}>Gavin Barham</h3>
            <p className={style.small_text}>Software Engineer</p>
          </div>
        </NavLink>
        {props.windowSize < 500 ? (
          <div className={style.dropdown}>
            <div
              className={style.icon_container}
              onClick={() => setShow(prevShow => !prevShow)}
            >
              <i className={`${style.icon} ${style.close_icon}`}>
                <Icon isActive={isActive} setIsActive={setIsActive}/>
              </i>
            </div>
            <nav className={show ? style.show : null}>
              <ul className={style.nav__items_dropdown}>
                <li className={style.link}>
                  <NavLink
                    className={style.nav__items}
                    to="/projects"
                    onClick={handleLinkClick}
                  >
                    Projects
                  </NavLink>
                </li>
                <li className={style.link}>
                  <NavLink
                    className={style.nav__items}
                    to="/resume"
                    onClick={handleLinkClick}
                  >
                    Resume
                  </NavLink>
                </li>
                <li className={style.link}>
                  <NavLink
                    className={style.nav__items}
                    to="/contact"
                    onClick={handleLinkClick}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          <ul
            className={`${style.desktop_nav} ${style.nav__items_dropdown}`}
          >
            <li>
              <NavLink
                className={style.navlink}
                to="/projects"
                onClick={handleLinkClick}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className={style.navlink}
                to="/resume"
                onClick={handleLinkClick}
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                className={style.navlink}
                to="/contact"
                onClick={handleLinkClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        )}
      </header>
    </>
  );
}
