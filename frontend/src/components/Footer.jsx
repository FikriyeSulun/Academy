import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <footer>
      <div className='container text-white'>

        <div className="footer-header footer-hr">
          <div className="footer-header-left">
            <div className="footerLogo col-auto">
              <Link to={"/"}><img src="/images/logo/footer_logo.png" alt="logo" /></Link>
            </div>

            <div className="document">
              <h3>EĞİTİM</h3>
              <Link to={"/distance-training-agreement"}>Uzaktan Eğitim Sözleşmesi</Link>
              <Link to={"/registration-documents"}>Kayıt Evrakları</Link>
            </div>
          </div>

          <div className="footer-header-socials col-auto">
            <div className="footer-header-socials__title">Follow us on social media</div>
            <div className="footer-header-socials__list">
              <Link to={"https://www.facebook.com/acunmedyaakademi/"}><img className='facebook' src="/images/footer/social/facebook-f.svg" alt="" /></Link>
              <Link to={"https://twitter.com/acunmedyakademi"}><img className='twitter' src="/images/footer/social/twitter.svg" alt="" /></Link>
              <Link to={"https://www.instagram.com/acunmedyaakademi/"}><img className='instagram' src="/images/footer/social/instagram.svg" alt="" /></Link>
              <Link to={"https://www.linkedin.com/school/acun-medya-akademi/"}><img className='linkedin' src="/images/footer/social/linkedin-in.svg" alt="" /></Link>
            </div>
          </div>
        </div>

        <div className="footer-contact-and-address footer-hr">
          <div className="address col-auto">
            <p>NeoTech Campus: Maslak Mahallesi, Taşyoncası Sokak,
              <br />
              No: 1V ve No:1Y Bina Kodu: 34481742, 34398 Sarıyer/İstanbul</p>
          </div>

          <div className="footer-contact">
            <div className="phone col-auto">
              <p>Telefon: (0212) 210 10 10</p>
            </div>
            <div className="email col-auto">
              <p>E-posta: info@acunmedyaakademi.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="bottom-left col-auto">
            © 2021 ACUNMEDYA AKADEMİ
          </div>
          
          <div className="bottom-right col-auto">
            <Link to={"/privacy-policy"}>Gizlilik Politikası</Link>
            <Link to={"/personal-data-protection-law"}>KVKK Aydınlatma Metni</Link>
            {/* <Link to={"/help-center"}>Yardım</Link> */}
          </div>
        </div>
      </div>
    </footer>
  )
}