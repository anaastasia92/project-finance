import cls from '../Footer/Footer.module.css'
import logo  from '../images/logo.png';
import strela from '../images/strela.png';

export default function Footer(){
    return (
<footer>
       <div className={cls.left}>
        <p>oll@investing.com</p> 
        <p>+972 53 1112233</p>
       </div>

       <div className={cls.right}>
       <img  className="strela" src={strela} alt=""/>
       <img  className="logo" src={logo} alt=""/>
       </div>
</footer>

    )
}