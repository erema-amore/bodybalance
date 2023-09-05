import React from 'react'
import style from '../style/homePage.module.css'
import photo from '../img/homePage/home_page_block_1_photo.svg'
import gantel from '../img/homePage/home_page_gantel.svg'
import cherry from '../img/homePage/home_page_cherry.svg'
import meat_grinder from '../img/homePage/home_page_meat_grinder.png'
import body_weight from '../img/homePage/home_page_body_weight.svg'
import iPhone_13 from '../img/homePage/home_page_iPhone_13.svg'


const HomePage = () => {
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
              <button className={style.home_page_block_1_text_btn}>УЗНАТЬ БОЛЬШЕ</button>
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
          <p className={style.home_page_block_4_list1_text1}></p>
          <p className={style.home_page_block_4_list1_text2}></p>
        </div>

        <div className={style.home_page_block_4_list1}>
          <p className={style.home_page_block_4_list1_text1}></p>
          <p className={style.home_page_block_4_list1_text2}></p>
        </div>

        <div className={style.home_page_block_4_list1}>
          <p className={style.home_page_block_4_list1_text1}></p>
          <p className={style.home_page_block_4_list1_text2}></p>
        </div>

      </div>
      
    </div>

  </div>
  )
}

export default HomePage