import React from 'react'
import style from '../style/homePage.module.css'
import photo from '../img/homePage/home_page_block_1_photo.svg'
import gantel from '../img/homePage/home_page_gantel.svg'
import cherry from '../img/homePage/home_page_cherry.svg'
import meat_grinder from '../img/homePage/home_page_meat_grinder.png'
import body_weight from '../img/homePage/home_page_body_weight.svg'
import iPhone_13 from '../img/homePage/home_page_iPhone_13.svg'
import woman from '../img/homePage/home_page_block_5_photo.svg'
import left from '../img/homePage/home_page_block_5_left.svg'
import right from '../img/homePage/home_page_block_5_right.svg'
import envelope from '../img/homePage/home_page_block_6_envelope.svg'
import phone from '../img/homePage/home_page_block_6_phone.svg'
import whatsapp from '../img/homePage/home_page_block_6_whatsapp.svg'
import you_tube from '../img/homePage/home_page_block_6_you_tube.svg'
import facebook from '../img/homePage/home_page_block_6_facebook.svg'
import instagram from '../img/homePage/home_page_block_6_instagram.svg'
import tik_tok from '../img/homePage/home_page_block_6_tik_tok.svg'
import twitter from '../img/homePage/home_page_block_6_twitter.svg'
import block6_main_photo from '../img/homePage/home_page_block_6_main_photo.svg'
import map from '../img/homePage/home_page_block_6_map.svg'
import { useNavigate } from 'react-router-dom'



const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className={style.home_page_main}>

      <div>
        <div className={style.home_page_block_1}>
          <div className={style.home_page_block_1_text}>

            <div className={style.home_page_block_1_text_1}>
              <p>авторская программа стройного тела</p>
            </div>

            <div className={style.home_page_block_1_text_2}>
              <p>Стань стройнее <br /> за 56 дней </p>
            </div>

            <div className={style.home_page_block_1_text_3}>
              <p>Наши профессиональные фитнес-тренеры и <br /> диетологи приведут тебя к стройной, <br /> здоровой и счастливой жизни. </p>
            </div>

            <div className={style.home_page_block_1_text_4}>
              <button className={style.home_page_block_1_text_btn} onClick={() => navigate('/slim-body')} >УЗНАТЬ БОЛЬШЕ</button>
            </div>

          </div>

          <div className={style.home_page_block_1_img}>
            <img src={photo} alt="" />
          </div>

        </div>



        <div className={style.home_page_block_2}>

          <div className={style.home_page_block_2_list}>
            <img className={style.home_page_block_2_list_img} src={gantel} alt="" />
            <p className={style.home_page_block_2_list_text1}>быстро</p>
            <p className={style.home_page_block_2_list_text2}>Первые результаты уже <br /> после первых недель</p>
          </div>

          <div className={style.home_page_block_2_list}>
            <img className={style.home_page_block_2_list_img} src={cherry} alt="" />
            <p className={style.home_page_block_2_list_text1}>Вкусно</p>
           
          </div>

          <div className={style.home_page_block_2_list}>
            <img className={style.home_page_block_2_list_img} src={meat_grinder} alt="" />
            <p className={style.home_page_block_2_list_text1}>безопасно</p>
            <p className={style.home_page_block_2_list_text2}>Под присмотром опытных <br /> специалистов</p>
          </div>


          

          <div className={style.home_page_block_2_list}>
            <img className={style.home_page_block_2_list_img} src={body_weight} alt="" />
            <p className={style.home_page_block_2_list_text1}>Удаленно</p>
            <p className={style.home_page_block_2_list_text2}>Материалы и <br /> рекомендации онлайн</p>
          </div>
        </div>




      <div className={style.home_page_block_3}>
        <div className={style.home_page_block_3_list}>
          <p className={style.home_page_block_3_list_text_1}>Немного о нас</p>
          <div className={style.home_page_block_3_list_2}>
            <p className={style.home_page_block_3_list_2_text_main}>О сервисе</p>
            <p className={style.home_page_block_3_list_2_text}>Кому подходит</p>
            <p className={style.home_page_block_3_list_2_text}>Уровни</p>
          </div>
          <p className={style.home_page_block_3_list_2_text_2}>Этот проект создан для того, чтобы помоч вам прийти к желаной <br /> форме с пользой для вашего здоровья. Для каждого участника <br />будет разработан индивидуальный рацион питания, с учетом <br /> вашого распорядка дня, а так же медицинские показания. <br />  Вы научитесь есть правильние продукты в нужном количестве, в <br /> следствие чего вес будет таять без следа и без возврата. <br />
И для этого вам не придется голодать! </p>

         <p className={style.home_page_block_3_list_2_text_3}>Так же по желанию вы сможете выбрать програму тренировок, <br /> и под надзором опитных тренеров заниматься прямо дома. Ваш <br /> прогресс будет фиксироваться еженедельно в вашем профиле <br /> в личном кабинете.</p>

        </div>

        <div className={style.home_page_block_3_img}>
          <img src={iPhone_13} alt="" />
        </div>


        </div>
        
    </div>



    <div className={style.home_page_block_4}>

      <div className={style.home_page_block_4_text1}>Результаты нашых клиентов </div>

      <div className={style.home_page_block_4_list}>

        <div className={style.home_page_block_4_list1}>
          <p className={style.home_page_block_4_list1_text1}>150 +</p>
          <p className={style.home_page_block_4_list1_text2}>учасников уже улучшили <br />
свое тело с нашей командой</p>
        </div>

        <div className={style.home_page_block_4_list1}>
          <p className={style.home_page_block_4_list1_text1}>20</p>
          <p className={style.home_page_block_4_list1_text2}>месяцев - сколько
 существует проект “SB”</p>
        </div>

        <div className={style.home_page_block_4_list1}>
          <p className={style.home_page_block_4_list1_text1}>500 +</p>
          <p className={style.home_page_block_4_list1_text2}>килограмм в общем 
потеряно у всех учасников </p>
        </div>

        <div className={style.home_page_block_4_list1}>
          <p className={style.home_page_block_4_list1_text1}>15</p>
          <p className={style.home_page_block_4_list1_text2}>серцифицированых специалистов на связи с вами</p>
        </div>

      </div>

      <div className={style.home_page_block_5}>
        <div className={style.home_page_block_5_left}>
          <img src={left} alt="" />
        </div>

        <div className={style.home_page_block_5_list}>

          <div className={style.home_page_block_5_list_img}>
            <img src={woman} alt="" />
          </div>
          <div className={style.home_page_block_5_list_text}>
            <p className={style.home_page_block_5_list_text1}>После родов долго и безуспешно пыталась <br /> вернуть себя в форму, и получилось это на <br />проекте “SB”. Результат на сегодня  - минус 10кг.</p>
            <p className={style.home_page_block_5_list_text2}>Анна, 24 года. Киев</p>
          </div>

        </div>

        <div className={style.home_page_block_5_right}>
          <img src={right} alt="" />
        </div>
      </div>

      <div className={style.home_page_block_6}>
        <div className={style.home_page_block_6_list1}>

        <div className={style.home_page_block_6_list1_1}>
          <p>Есть вопросы?</p>
        </div>
        
        <div className={style.home_page_block_6_list1_2}>
          <p>Оставьте нам сообщение, и мы <br /> сразу свяжемся с вами!</p>
        </div>

        <div className={style.home_page_block_6_list1_3}>
        <input type="search" placeholder="Введите имя"/>
        </div>
        <div className={style.home_page_block_6_list1_4}>
        <input type="search" placeholder="Введите телефон"/>
        </div>
        <div className={style.home_page_block_6_list1_5}>
        <input type="search" placeholder="Введите e-mail"/>
        </div>
        <div className={style.home_page_block_6_list1_6}>
        <input type="search" placeholder="Введите сообщение"/>
        </div>
        <div className={style.home_page_block_6_list1_7}>
          <button className={style.home_page_block_6_list1_7_btn}>ОТПРАВИТЬ СООБЩЕНИЕ</button>
        </div>
        
        </div>


        <div className={style.home_page_block_6_list2}>
          {/* <img src={block6_main_photo} alt="" /> */}

          <div className={style.home_page_block_6_list2}>

        <div className={style.home_page_block_6_list2_1}>
          <p>Как с нами связаться?</p>
        </div>
        <div className={style.home_page_block_6_list2_2}>
          <img src={envelope} alt="" />
          <p className={style.home_page_block_6_list2_2_text1}>body-balance@gmail.com</p>
        </div>
        <div className={style.home_page_block_6_list2_3}>
          <img src={phone} alt="" />
          <p className={style.home_page_block_6_list2_2_text1}>+(996) 555 - 99 - 88 - 00</p>
        </div>
        <div className={style.home_page_block_6_list2_4}>
          <p className={style.home_page_block_6_list2_2_text1}>Fax: (996) 312 - 88 - 77 - 66</p>
        </div>
        <div className={style.home_page_block_6_list2_5}>
          <p className={style.home_page_block_6_list2_2_text1}>Делитесь впечетлениями о <br />  нашем клебе и успехам с <br /> друзьями в социальных сетях</p>
        </div>
        <div className={style.home_page_block_6_list2_6}>
          <img src={whatsapp} alt="" />
          <img src={you_tube} alt="" />
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={tik_tok} alt="" />
          <img src={twitter} alt="" />
          </div>
        </div>
        </div>

        


        <div className={style.home_page_block_6_list3}>
        <div className={style.home_page_block_6_list3_text}>
          <p>Найти нас на карте:</p>
        </div>
        <div className={style.home_page_block_6_list3_photo}>
          <img src={map} alt="" />
        </div>
        </div>

      </div>
      


      
    </div>
  </div>
  )
}

export default HomePage