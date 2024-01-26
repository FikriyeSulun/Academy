// Yönetim Paneli

import React from 'react';
import { Link } from "react-router-dom";

export default function ManagementPanel() {
    return (
        <section className='management-panel'>
            <div className="container">
                <div className='management-panel-content'>
                    <h2>Yönetim Paneli</h2>
                    <div className='management-panel-links'>
                        <Link to={`/management-panel/training-categories`}>Eğitim Kategorileri</Link>
                    </div>
                    <div className='management-panel-links'>
                        <Link to={`/management-panel/trainings`}>Eğitimler</Link>
                    </div>
                    <div className='management-panel-links'>
                        <Link to={`/management-panel/users`}>Kullanıcılar</Link>
                    </div>
                </div>
            </div>
        </section>
    )

}