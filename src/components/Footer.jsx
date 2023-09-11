
import React from 'react';
import style from '../style/footer.module.css'; 
import logo from '../img/navBar/logo.png'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <div className={style.footerLogo}>
        < img src={ logo } alt="logo" className={style.futer_logo_btn}/>
        </div>
        
        <div className={style.footerContact}>
          
          <p>адрес: г. Бишкек прт Мира 59</p>
          <p>email: body-balance@example.com</p>
          <p> тел: +(996) 555 - 99 - 88 - 00</p>
          <p>fax: (996) 312 - 88 - 77 - 66</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
