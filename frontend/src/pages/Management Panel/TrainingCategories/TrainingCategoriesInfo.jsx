
import React from 'react'
import { Link } from "react-router-dom";

export default function TrainingCategoriesInfo() {
    return (
        <section className='training-categories-info'>
            <div className="container">
                <div className='training-categories-info-content'>
                    <h2>Kategoriler</h2>
                    <ul>
                        <li>kategori 1 <Link to={`update`}>Kategori Düzenle</Link></li>
                        <li>kategori 2 <Link to={`update`}>Kategori Düzenle</Link></li>
                        <li>kategori 3 <Link to={`update`}>Kategori Düzenle</Link></li>
                        <li>kategori 4 <Link to={`update`}>Kategori Düzenle</Link></li>
                    </ul>
                    <Link to={`create`}>Kategori Ekle</Link>
                </div>
            </div>
        </section>
    )

}