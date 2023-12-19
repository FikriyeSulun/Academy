import React from 'react';
import { Link } from "react-router-dom";


export default function Header() {

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
                <ul className='subnav'>
                  <li className='inActiveMenu'>
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
                  </li>
                </ul>
              </li>

              <li className="menu-item-has-children">
                <Link className="text-white" to={"/instructors"} >
                  Eğitmenler
                  <i className="fa-solid fa-chevron-down"></i>
                </Link>
                <ul className='subnav'>
                  {/* <li className='inActiveMenu'>
                                        <Link to={"/instructors/television/..."}>
                                            <img src="" alt="" /> Eğitmen ismi
                                        </Link>
                                    </li> */}
                </ul>
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