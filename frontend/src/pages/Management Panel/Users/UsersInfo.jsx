// kullanıcı bilgileri ekle yönetim sayfası
// kullanıcı bilgilerinin yanına düzenleme butonları koy -> kullanıcı düzenleme form sayfasına yönlendir (kullanıcının kayıtlı bilgileri gözükecek) 
// kullanıcı ekleme butonu -> kullanıcı ekleme form sayfasına yönlendirme

import React from 'react'
import { Link } from "react-router-dom";

export default function UsersInfo() {
    return (
        <>
            <div style={{ padding: '300px' }}>
                Kullanıcılar
                <br />
                <Link to={`create-user`}>Kullanıcı Ekle</Link>
            </div>
        </>
    )

}