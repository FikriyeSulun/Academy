// kullanıcı bilgileri ekle yönetim sayfası
// kullanıcı bilgilerinin yanına düzenleme butonları koy -> kullanıcı düzenleme form sayfasına yönlendir (kullanıcının kayıtlı bilgileri gözükecek) 
// kullanıcı ekleme butonu -> kullanıcı ekleme form sayfasına yönlendirme

import React from 'react'
import { Link } from "react-router-dom";

export default function UsersInfo() {
    return (
        <section className='users-info'>
            <div className="container">
                <div className='users-info-content'>
                    <h2>Kullanıcılar</h2>
                    <ul>
                        <li>kullanıcı 1 <Link to={`update-user`}>Kullanıcı Düzenle</Link></li>
                        <li>kullanıcı 2 <Link to={`update-user`}>Kullanıcı Düzenle</Link></li>
                        <li>kullanıcı 3 <Link to={`update-user`}>Kullanıcı Düzenle</Link></li>
                        <li>kullanıcı 4 <Link to={`update-user`}>Kullanıcı Düzenle</Link></li>
                    </ul>
                    <Link to={`create-user`}>Kullanıcı Ekle</Link>
                </div>
            </div>
        </section>
    )

}