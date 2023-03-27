import style from './Footer.module.css'

export default function Footer(){
    return (
        <div className={style.footer}>
            <footer className={style.footer_container}>
                <div className={style.footer_items_container}>
                    <div className={style.footer_section}>
                        <h3 className={style.headers}>Phone</h3>
                        <a href="tel: 337-884-7885">1 (337) 884-7885</a>
                    </div>
                    <div className={style.footer_section}>
                        <h3 className={style.headers}>Email</h3>
                        <a href = "mailto: gavinbarham@yahoo.com">gavinbarham@yahoo.com</a>
                    </div>
                    <div className={style.footer_section}>
                        <h3 className={style.headers}>Follow me</h3>
                        <a href='https://www.linkedin.com/in/gavin-barham-4ba088247/'><i className="fa-brands fa-linkedin"></i></a>
                        <a href='https://github.com/Gavin-Barham'><i className="fa-brands fa-github"></i></a>
                    </div>
                    <div className={`${style.footer_watermark} ${style.footer_section}`}>
                        <p>© 2023 By Gavin Barham.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}