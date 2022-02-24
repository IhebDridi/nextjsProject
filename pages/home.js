import style from "../styles/UT.module.css"



export default function Home(){
    return (
        <div>
             <section  className={style.showcase}>
    <header>
      <img src="http://utik.co/UTIK.png" className={style.logo} width="50px"></img>
      <div className={style.toggle}></div>
    </header>
    <div  className={style.overlay}></div>
    <div className={style.text}>
      <h2>Data </h2>
      <h3>Can drive !</h3>
      <p>We provide data qualification and client-related knowledge development solutions.</p>
      <a href="#">Demo</a>
    </div>
    <ul  className={style.social}>
      <li><a href="#"><img src="http://utik.co/facebook.png"></img></a></li>
      <li><a href="#"><img src="http://utik.co/twitter.png"></img></a></li>
      <li><a href="#"><img src="http://utik.co/github.png" width="41px"></img></a></li>
    </ul>
  </section>
  <div className={style.social}>
    <ul>
      <li><a href="#">Soon</a></li>
    </ul>
  </div>

        </div>
    )
}