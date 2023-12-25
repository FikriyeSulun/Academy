import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { fetchTrainingCategories } from '../../data/TrainingCategoriesData';
import { fetchTrainings } from '../../data/TrainingsData';

export default function Section2() {
  const [trainingCategories, setTrainingCategories] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(1); // Varsayılan kategori
  // console.log(selectedCategory);

  useEffect(() => {

    fetchTrainingCategories().then((categories) => {
      // console.log('Training Categories:', categories);
      setTrainingCategories(categories);
    });

    fetchTrainings().then((trainings) => {
      // console.log('Trainings:', trainings);
      setTrainings(trainings);
    });

  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredTrainings = selectedCategory
    ? trainings.filter(training => training.category === selectedCategory)
    : trainings;

  const filteredCategory = selectedCategory
    ? trainingCategories.filter(category => category.id === selectedCategory)
    : trainingCategories;

  return (
    <section className='all-training'>
      <div className="container">

        <div className="training-header">
          <h3>ACUNMEDYA AKADEMİ EĞİTİMLERİ</h3>
        </div>

        <div className="training-categories">

          {trainingCategories.map((category) => (
            <button
              key={category.id}
              className={`categoryName`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </button>
          ))}

        </div>

        <div className="swiper-container">

          {filteredCategory.map((category) => (
            <div key={category.id} className="training-cards swiper-wrapper">

              {
                filteredTrainings.map(training => (
                  <div
                    key={training.id}
                    className={`training-card categorie${category.en_name?.toLowerCase()} swiper-slide`}
                  >
                    <Link to={`/trainings/${category.name?.toLowerCase()}`}>
                      <div className="training-card_icon">
                        {/* {icon && <i className={icon}></i>} */}
                      </div>
                      <div className="training-card_title">{training.name}</div>
                      <div className="training-card_text"></div>
                    </Link>
                  </div>
                ))
              }

            </div>
          ))}

        </div>
      </div>
    </section >
  )
}