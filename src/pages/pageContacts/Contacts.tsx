import cls from '../pageContacts/Contacts.module.css'
import Envelope from '../pageContacts/Img/Envelope.png'
import Info from '../pageContacts/Img/Info.png'
import MapPinLine from '../pageContacts/Img/MapPinLine.png'
import map from '../pageContacts/Img/map.png'

export function Contacts() {
    return (
      <div className={cls.contact}>
        <div className={cls.text}>
          <div className={cls.con}>Contacts</div>
          <div className={cls.our}>Our location and contact information</div>
          <div className={cls.help}>Let Us Help You with Your Questions and Concerns
          </div>
          <div className={cls.paragr}>You can reach us by phone, email, or through our online contact form. Our team is committed to providing exceptional customer service and will respond to your inquiries promptly. Don't hesitate to contact us - we are here to help you!</div>
        </div>
        <div className={cls.section}>
          <div className={cls.mail}>
            <img className={cls.envelope} src={Envelope} alt=""/>
            <p>oll@investing.com</p>
            <p>Online 24 hours</p>
          </div>
          <div className={cls.phone}>
            <img className={cls.info} src={Info} alt=""/>
            <p>+972 53 111 22 33</p>
            <p>Support 24/7</p>
          </div>
          <div className={cls.adres}>
            <img className={cls.map} src={MapPinLine} alt=""/>
            <p>Prof. Menakhem Plaut St 10, Rehovot</p>
            <p>Sun - Fri: 8.00-18.00</p>
          </div>
        </div>
        <img className={cls.map1} src={map} alt=""/>
      </div>
    )
    
  }