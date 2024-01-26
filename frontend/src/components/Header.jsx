import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { getTrainingCategories, getTrainings, getInstructors } from '../data/getData';

import supabase from '../utils/supabaseHelper';
import { toast } from 'react-toastify';
import useSession from '../utils/useSession';
import HamburgerMenu from './HamburgerMenu';

export default function Header() {
  const [trainingCategories, setTrainingCategories] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const [isProfileSubnavOpen, setProfileSubnavOpen] = useState(false);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      alert("Çıkış yapılamadı")
    } else {
      toast.success("Çıkış yapıldı")
    }
  }

  const session = useSession();
  //Sayfa yüklendiğinde Supabasedeki 
  useEffect(() => {
    // TrainingCategories tablosundan verileri TrainingCategoriesData içinden fetchTrainingCategories ile getirir
    getTrainingCategories().then((categories) => {
      setTrainingCategories(categories);
    });

    // Trainings tablosundan verileri TrainingsData içinden fetchTrainings ile getirir
    getTrainings().then((trainings) => {
      setTrainings(trainings);
    });

    // Instructors tablosundan verileri InstructorsData içinden fetchInstructors ile getirir
    getInstructors().then((instructors) => {
      setInstructors(instructors);
    });

  }, [])

  // console.log(trainingCategories);

  // Hamburger menüyü açmak veya kapatmak için bu işlevi kullanın
  const toggleMenu = () => {
    setHamburgerMenuOpen(!isHamburgerMenuOpen);
  }

  const handleProfileButtonClick = () => {
    setProfileSubnavOpen(!isProfileSubnavOpen);
  }

  return (
    <>
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

                          <div className='training-categories-trainings'>
                            <ul>
                              {trainings.filter(training => training.category_id === category.id).map(training => (
                                <li className='inActiveMenu subnav-training-list' key={training.id}>
                                  <Link to={`/trainings/${training.categoryName.toLowerCase()}/${training.urlName}`}>
                                    {training.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </li>
                      ))}

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

                      {trainingCategories.map(category => (
                        <li className='inActiveMenu' key={category.id}>
                          <Link className='training-categories-header' to={`/trainings/${category.name.toLowerCase()}`}>
                            <img src={`/images/subnav icons/${category.en_name.toLowerCase()}.svg`} alt="" />{category.name}
                          </Link>

                          <div className='training-categories-instructors'>
                            <ul>
                              {instructors.filter(instructor => instructor.category_id === category.id).map(instructor => (
                                <li className='inActiveMenu subnav-instructor-list' key={instructor.id}>
                                  <Link to={`/instructors/${instructor.categoryName.toLowerCase()}/${instructor.urlName}`}>
                                    {instructor.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </li>
                      ))}

                    </ul>
                  </div>
                </li>

                <li>
                  <Link className="inActiveMenuTwo" to={"/contact"} > İletişim </Link>
                </li>
              </ul>
            </div>
            <div className="headerRight col-auto">
              <button className='hamburgerMenuBtn text-white' onClick={() => { toggleMenu() }} >
                <i className="fa-solid fa-bars"></i>MENU
              </button>
              <Link className='blueBtn toapplyBtn' to={"/to-apply"}>Başvuru yap</Link>

              {session ? (
                <>
                  <div className="menu-item-has-children header-user">
                    <button className="userName text-white" onClick={handleProfileButtonClick}>
                      {session.user.user_metadata.name}
                    </button>

                    {isProfileSubnavOpen && (
                      <div className="profile-subnav">
                        <ul className='profile-subnav-list'>
                          <li className='inActiveMenu'>
                            <Link>Profile</Link>
                          </li>
                          <li className='inActiveMenu'>
                            <button onClick={handleLogout}>Çıkış Yap</button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <Link className='-underline loginBtn' to={"/login"}>Giriş yap</Link>
              )}

            </div>
          </div>
        </div>
      </header>

      {isHamburgerMenuOpen && (
        <HamburgerMenu/>
      )}
    </>
  )
}