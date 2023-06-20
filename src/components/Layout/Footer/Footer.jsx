import s from './Footer.module.scss';
import SectionTitle from "../../sharedComponents/SectionTitle/SectionTitle";
import insta from '../../../assets/insta.svg'
import whatsapp from '../../../assets/whatsup.svg'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.contacts}>
            <SectionTitle classname={s.title}>Contact</SectionTitle>
            <a href="tel:+499999999999" className={s.phone}>
              +49 999 999 99 99
            </a>
            <div className={s.icons}>
              <a href='#' className={s.icon}>
                <img src={insta} alt="instagram"/>
                instagram
              </a>
              <a href='#' className={s.icon}>
                <img className={s.whatsappIcon} src={whatsapp} alt="whatsapp"/>
                WhatsApp
              </a>
            </div>
          </div>
          <div className={s.address}>
            <SectionTitle classname={s.title}>Address</SectionTitle>
            <p className={s.addressText}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
            <p className={s.hours}>Working Hours:</p>
            <p className={s.hoursValue}>24 hours a day</p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4102804109734!2d13.372526676991406!3d52.507913737123836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdd6cfe0f%3A0xb4b0903f299decf1!2zTGlua3N0cmHDn2UgMi84LiBFdGFnZSwgMTA3ODUgQmVybGluLCDQk9C10YDQvNCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1687281154924!5m2!1sru!2sru"
          width="100%" height="525" style={{'border':0}} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </footer>
  );
};

export default Footer;
