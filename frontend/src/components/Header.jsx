import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { supabase } from '../main'

export default function Header() {
  const [trainingCategories, setTrainingCategories] = useState([]);
  const [trainings, setTrainings] = useState([]);

  //Sayfa yüklendiğinde Supabasedeki 
  useEffect(() => {
    // TrainingCategories tablosundan verileri çeker
    async function fetchTrainingCategories() {
      try {
        const { data: TrainingCategories, error } = await supabase
          .from('TrainingCategories').select('*');

        // console.log(TrainingCategories);

        if (error) {
          throw error;
        }

        setTrainingCategories(TrainingCategories);
      }
      catch (error) {
        console.error('Eğitim Kategorileri alınırken hata oluştu:', error.message)
      }
    }
    fetchTrainingCategories();

    // Trainings tablosundan verileri çeker
    async function fetchTraining() {
      try {
        const { data: Trainings, error } = await supabase
          .from('Trainings').select('*');

        if (error) {
          throw error;
        }

        setTrainings(Trainings);
      }
      catch (error) {
        console.error('Eğitim bilgileri alınırken hata oluştu:', error.message)
      }
    }
    fetchTraining();

  }, [])

  // console.log(trainingCategories);


  return (
    <header>
      <div className="container header-bottom">
        <div className="headerContent">
          <div className="headerLogo col-auto">
            <Link className='text-white' to={"/"}><img src="../src/assets/images/logo/header_logo.png" alt="logo" />
              Acunmedya Akademi</Link>
          </div>
          <div className="headerMenu col-auto">
            <ul className='headerMenuList'>
              <li>
                <Link className="text-white activeMenu" to={"/"} > Ana Sayfa </Link>
              </li>

              <li className="menu-item-has-children">
                <Link className="text-white" to={"/trainings"} >
                  Eğitimler
                  <i className="fa-solid fa-chevron-down"></i>
                </Link>
                <div class="subnav-container">
                  <ul className='subnav'>

                    {trainingCategories.map(category => (
                      <li className='inActiveMenu' key={category.id}>
                        <Link className='training-categories' to={`/trainings/${category.name.toLowerCase()}`}>
                          <img src={`./src/assets/images/subnav icons/${category.en_name.toLowerCase()}.svg`} alt="" />{category.name}
                        </Link>

                        <div>
                          {trainings.filter(training => training.category === category.id).map(training => (
                            <li className='inActiveMenu subnav-training-list' key={training.id}>
                              <Link to={`/trainings/${category.name.toLowerCase()}`}>
                                {training.name}
                              </Link>
                            </li>
                          ))}
                        </div>

                      </li>
                    ))}


                    {/* <li className='inActiveMenu'>
                    <Link to={"/trainings/television"}>
                      <img src="./src/assets/images/subnav icons/television.svg" alt="" />Televizyon
                    </Link>
                  </li>
                  <li className='inActiveMenu'>
                    <Link to={"/trainings/gastronomy"}>
                      <img src="./src/assets/images/subnav icons/gastronomy.svg" alt="" />Gastronomi
                    </Link>
                  </li>
                  <li className='inActiveMenu'>
                    <Link to={"/trainings/digital"}>
                      <img src="./src/assets/images/subnav icons/digital.svg" alt="" />Dijital
                    </Link>
                  </li>
                  <li className='inActiveMenu'>
                    <Link to={"/trainings/software"}>
                      <img src="./src/assets/images/subnav icons/software.svg" alt="" />Yazılım
                    </Link>
                  </li> */}
                  
                  </ul>
                </div>
              </li>

              <li className="menu-item-has-children">
                <Link className="text-white" to={"/instructors"} >
                  Eğitmenler
                  <i className="fa-solid fa-chevron-down"></i>
                </Link>
                <div class="subnav-container">
                  <ul className='subnav'>
                    {/* <li className='inActiveMenu'>
                                        <Link to={"/instructors/television/..."}>
                                            <img src="" alt="" /> Eğitmen ismi
                                        </Link>
                                    </li> */}
                  </ul>
                </div>
              </li>

              <li>
                <Link className="text-white inActiveMenuTwo" to={"/contact"} > İletişim </Link>
              </li>
            </ul>
          </div>
          <div className="headerRight col-auto">
            <button className='text-white hamburgerMenuBtn' >
              <i className="fa-solid fa-bars"></i>MENU
            </button>
            <Link className='blueBtn toapplyBtn' to={"/to-apply"}>Başvuru yap</Link>
            <Link className='text-white -underline loginBtn' to={"/login"}>Giriş yap</Link>
          </div>
        </div>


      </div>
    </header>
  )
}