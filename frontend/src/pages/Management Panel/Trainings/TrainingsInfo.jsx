
import React from 'react'
import { Link } from "react-router-dom";

export default function TrainingsInfo() {
    return(
        <section className='trainings-info'>
            <div className="container">
                <div className='trainings-info-content'>
                    <h2>Eğitimler</h2>
                    <ul>
                        <li>eğitim 1 <Link to={`update-training`}>Eğitim Düzenle</Link></li>
                        <li>eğitim 2 <Link to={`update-training`}>Eğitim Düzenle</Link></li>
                        <li>eğitim 3 <Link to={`update-training`}>Eğitim Düzenle</Link></li>
                        <li>eğitim 4 <Link to={`update-training`}>Eğitim Düzenle</Link></li>
                    </ul>
                    <Link to={`create-training`}>Eğitim Ekle</Link>
                </div>
            </div>
        </section>
    )

}