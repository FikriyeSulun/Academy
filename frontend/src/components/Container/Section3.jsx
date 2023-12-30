import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { fetchInstructors } from '../../data/InstructorsData';

export default function Section3() {
  const [instructors, setInstructors] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {

    fetchInstructors().then((instructors) => {
      console.log('Instructors:', instructors);
      setInstructors(instructors);
    });

  }, []);

  const totalCards = instructors.length;
  console.log(totalCards)

  const moveSlider = (direction) => {
    const newCard = currentCard + direction;

    if (newCard >= 0 && newCard < totalCards) {
      setCurrentCard(newCard);
    }
  };

  const cardsToShow = instructors.slice(currentCard, currentCard + 4);

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
                cardsToShow.map(instructor => (
                  <div className="instructors-card" key={instructor.id}>
                    <Link to={`/instructors/${instructor.categoryName.toLowerCase()}/${instructor.name.toLowerCase().replace(/\s+/g, '-')}`}>

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