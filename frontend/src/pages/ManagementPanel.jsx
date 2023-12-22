// Yönetim Paneli

import React from 'react';
import { Link } from "react-router-dom";

export default function ManagementPanel() {
    return (
        <>
            <div style={{ padding: '300px' }}>
                <b>Yönetim Paneli</b>
                {/* İlk olarak Eğitim kategorileri, Eğitimler ve Kullanıcılar şeklinde düzenleme bağlantıları eklenecek */}
                <div>
                    <Link to={`/management-panel/training-categories`}>Eğitim Kategorileri</Link>
                </div>
                <div>
                    <Link to={`/management-panel/trainings`}>Eğitimler</Link>
                </div>
                <div>
                    <Link to={`/management-panel/users`}>Kullanıcılar</Link>
                </div>
            </div>

        </>
    )

}