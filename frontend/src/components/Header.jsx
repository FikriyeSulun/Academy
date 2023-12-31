import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { fetchTrainingCategories } from '../data/TrainingCategoriesData';
import { fetchTrainings } from '../data/TrainingsData';

export default function Header() {
  const [trainingCategories, setTrainingCategories] = useState([]);
  const [trainings, setTrainings] = useState([]);

  //Sayfa yüklendiğinde Supabasedeki 
  useEffect(() => {
    // TrainingCategories tablosundan verileri TrainingCategoriesData içinden fetchTrainingCategories ile getirir
    fetchTrainingCategories().then((categories) => {
      setTrainingCategories(categories);
    });

    // // TrainingCategories tablosundan verileri çeker
    // async function fetchTrainingCategories() {
    //   try {
    //     const { data: TrainingCategories, error } = await supabase
    //       .from('TrainingCategories').select('*');

    //     // console.log(TrainingCategories);

    //     if (error) {
    //       throw error;
    //     }

    //     setTrainingCategories(TrainingCategories);
    //   }
    //   catch (error) {
    //     console.error('Eğitim Kategorileri alınırken hata oluştu:', error.message)
    //   }
    // }
    // fetchTrainingCategories();

    fetchTrainings().then((trainings) => {
      setTrainings(trainings);
    });

    // Trainings tablosundan verileri çeker
    // async function fetchTrainings() {
    //   try {
    //     const { data: Trainings, error } = await supabase
    //       .from('Trainings').select('*');

    //     if (error) {
    //       throw error;
    //     }

    //     setTrainings(Trainings);
    //   }
    //   catch (error) {
    //     console.error('Eğitim bilgileri alınırken hata oluştu:', error.message)
    //   }
    // }
    // fetchTrainings();

  }, [])

  // console.log(trainingCategories);

  return (
    <header>
      <div className="container header-bottom text-white">
        <div className="headerContent">
          <div className="headerLogo col-auto">
            <Link to={"/"}><img src="/images/logo/header_logo.png" alt="logo" />
              Acunmedya Akademi</Link>
          </div>
          <div className="headerMenu col-auto">
            <ul className='headerMenuList'>
              <li>
                <Link className=" activeMenu" to={"/"} > Ana Sayfa </Link>
              </li>

              <li className="menu-item-has-children">
                <Link to={"/trainings"} >
                  Eğitimler
                  <i className="fa-solid fa-chevron-down"></i>
                </Link>
                <div className="subnav-container">
                  <ul className='subnav'>

                    {trainingCategories.map(category => (
                      <li className='inActiveMenu' key={category.id}>
                        <Link className='training-categories-header' to={`/trainings/${category.name.toLowerCase()}`}>
                          <img src={`/images/subnav icons/${category.en_name.toLowerCase()}.svg`} alt="" />{category.name}
                        </Link>

                        <div>
                          <ul>
                            {trainings.filter(training => training.category_id === category.id).map(training => (
                              <li className='inActiveMenu subnav-training-list' key={training.id}>
                                <Link to={`/trainings/${category.name.toLowerCase()}`}>
                                  {training.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </li>
                    ))}


                    {/* <li className='inActiveMenu'>
                    <Link to={"/trainings/television"}>
                      <img src="/images/subnav icons/television.svg" alt="" />Televizyon
                    </Link>
                  </li>
                  <li className='inActiveMenu'>
                    <Link to={"/trainings/gastronomy"}>
                      <img src="/images/subnav icons/gastronomy.svg" alt="" />Gastronomi
                    </Link>
                  </li>
                  <li className='inActiveMenu'>
                    <Link to={"/trainings/digital"}>
                      <img src="/images/subnav icons/digital.svg" alt="" />Dijital
                    </Link>
                  </li>
                  <li className='inActiveMenu'>
                    <Link to={"/trainings/software"}>
                      <img src="/images/subnav icons/software.svg" alt="" />Yazılım
                    </Link>
                  </li> */}

                  </ul>
                </div>
              </li>

              <li className="menu-item-has-children">
                <Link to={"/instructors"} >
                  Eğitmenler
                  <i className="fa-solid fa-chevron-down"></i>
                </Link>
                <div className="subnav-container">
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
                <Link className="inActiveMenuTwo" to={"/contact"} > İletişim </Link>
              </li>
            </ul>
          </div>
          <div className="headerRight col-auto">
            <button className='hamburgerMenuBtn text-white' >
              <i className="fa-solid fa-bars"></i>MENU
            </button>
            <Link className='blueBtn toapplyBtn' to={"/to-apply"}>Başvuru yap</Link>
            <Link className='-underline loginBtn' to={"/login"}>Giriş yap</Link>
          </div>
        </div>

      </div>
    </header>
  )
}