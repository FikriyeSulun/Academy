// Eğitimlerin kategorilerinin sayfaları
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getTrainingCategories } from "../data/getData";

export default function TrainingCategoriesDetail() {
    const { slugCategories } = useParams();
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const trainingCategories = await getTrainingCategories();
                const selectedCategory = trainingCategories.find(category => category.name.toLowerCase() === slugCategories);

                if (selectedCategory) {
                    setCategory(selectedCategory);
                } else {
                    console.error('Eğitim bulunamadı');
                }
            } catch (error) {
                console.error('Eğitim bilgileri alınırken hata oluştu:', error.message);
            }
        };

        fetchData();
    }, [slugCategories]);

    if (!category || !category.name) {
        return <p>Yükleniyor...</p>;
    }

    const toUpperCaseTurkish = (str) => {
        const letters = {
            "a": "A", "b": "B", "c": "C", "ç": "Ç", "d": "D", "e": "E", "f": "F", "g": "G", "ğ": "Ğ", "h": "H", "ı": "I", "i": "İ", "j": "J", "k": "K", "l": "L", "m": "M", "n": "N", "o": "O", "ö": "Ö", "p": "P", "r": "R", "s": "S", "ş": "Ş", "t": "T", "u": "U", "ü": "Ü", "v": "V", "y": "Y", "z": "Z",
        };

        return str.replace(/([abcçdefgğhıijklmnoöprsştuüvyz])/g, function (letter) {
            return letters[letter];
        });
    };

    return (
        <>
            <section className="category-detail">
                <div className="container trainingCategories-container">
                    <div className="trainingCategories-content">
                        <div className="category-header">
                            <h2>{`${toUpperCaseTurkish(category.name)}`}</h2>
                        </div>
                        <div className="category-title-text">
                            <p>{category.title_text}</p>
                        </div>
                    </div>
                </div>
                
                <div className="trainingCategories-bg-img">
                    <img src={category.photoURL} alt={category.name} />
                </div>
            </section>
        </>
    )
}