import cls from './Header.module.css';
import { Link } from 'react-router-dom';
import logo  from '../images/logo.png';
import strela from '../images/strela.png';
import { useEffect, useState } from 'react';

export default function Header(){
    const [isNavBarVisible, setIsNavbarVisible] = useState(true)
    
    
    function handleScroll  (props: any) {
        console.log('scroll');
        
        console.log({props})
        setIsNavbarVisible(false)
    }

    useEffect(() => {
        console.log('rrrr')
        window.addEventListener(
            "scroll",
            function  (props: any) {
                console.log('scroll', window?.scrollY);
                if(window?.scrollY<= 20){
                    setIsNavbarVisible(true)
                }else{
                    setIsNavbarVisible(false)
                }
                
            });

        // return window.removeEventListener("scroll", handleScroll)
    }, [])
     

    return (
        
    <nav className={`${isNavBarVisible ?  `${cls.visible}` : cls.navbar}`}>
        <div className={cls.left}>
       <img  className="strela" src={strela} alt=""/>
        <img  className="logo" src={logo} alt=""/>
        
        </div>
        <div className={cls.centrel}>
        
        <Link
            to={'/statistics'}
            className={cls.link}
        >
           Statistics
        </Link>
        <Link
            to={'/analytics'}
            className={cls.link}
        >
           Analytics
        </Link>
        <Link
            to={'/contacts'}
            className={cls.link}
        >
           Contacts
        </Link>
        </div>
        <div className={cls.right}>
               <div>oll@investing.com</div> 
                <div>+972 53 1112233</div>
        </div>
    </nav>

    )
    }