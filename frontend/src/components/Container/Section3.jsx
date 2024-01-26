import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { getInstructors } from '../../data/getData';

export default function Section3() {
  const [instructors, setInstructors] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {

    getInstructors().then((instructors) => {
      // console.log('Instructors:', instructors);
      setInstructors(instructors);
    });

    // Ekran genişliğine göre kart sayısını güncelle
    const updateCardCount = () => {
      if (window.innerWidth < 426) {
        setCardsToShow(1)
      } else if (window.innerWidth < 769) {
        setCardsToShow(2);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(3);
      } else {
        setCardsToShow(4);
      }
    };

    // Sayfa yüklendiğinde ve ekran boyutu değiştiğinde kontrol et
    window.addEventListener('resize', updateCardCount);
    updateCardCount();

    return () => {
      // Event listener'ı temizle
      window.removeEventListener('resize', updateCardCount);
    };

  }, []);

  const totalCards = instructors.length;
  // console.log(totalCards)

  const moveSlider = (direction) => {
    const newCard = currentCard + direction;

    if (newCard >= 0 && newCard < totalCards) {
      setCurrentCard(newCard);
    }
  };

  const cardsToShowArray = instructors.slice(currentCard, currentCard + cardsToShow);

  return (
    <section className='all-instructors'>
      <div className="container">

        <div className="instructors-header">
          <h3>ACUNMEDYA AKADEMİ EĞİTMENLERİ</h3>
        </div>

        <div className="instructor-cards">

          <div className="left-arrow-slider">
            <button className="prev-button" onClick={() => moveSlider(-1)}>
              <i className="fa-solid fa-angles-left"></i>
            </button>
          </div>

          <div className="slider-container">
            <div className="slider">

              {
                cardsToShowArray.map(instructor => (
                  <div className="instructors-card" key={instructor.id}>
                    <Link to={`/instructors/${instructor.categoryName.toLowerCase()}/${instructor.urlName}`}>

                      <div className="instructors-bg-img">
                        <img src={instructor.photoURL} alt={instructor.name} />
                      </div>

                      <div className="instructors-title">
                        <div className="instructors-info">
                          <h4 className="instructors-name">{instructor.name}</h4>
                          <h4 className="instructors-area">{instructor.categoryName}</h4>
                        </div>
                      </div>

                    </Link>
                  </div>
                ))}

            </div>
          </div>

          <div className="right-arrow-slider">
            <button className="next-button" onClick={() => moveSlider(1)}>
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}