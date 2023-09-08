
import React from 'react';
import style from '../style/footer.module.css'; 

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <div className={style.footerLogo}>
          <h3>Logo</h3>
        </div>
        <div className={style.footerLinks}>
          {/* Ссылка */}
          <h3>Ссылка</h3>
          <h3>Ссылка</h3>
          {/* Ссылки */}
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
