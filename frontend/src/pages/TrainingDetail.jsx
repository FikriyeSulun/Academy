// Eğitimlerin sayfaları
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getTrainings } from "../data/getData";

export default function TrainingsDetail() {
  const { slugCategories, slugTrainings } = useParams();
  const [training, setTraining] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const trainings = await getTrainings();
        console.log(trainings)
        const selectedTraining = trainings.find(training => (training.urlName === slugTrainings && training.categoryName.toLowerCase() === slugCategories));
        console.log(selectedTraining)
        if (selectedTraining) {
          setTraining(selectedTraining);
        } else {
          console.error('Eğitim bulunamadı');
        }
      } catch (error) {
        console.error('Eğitim bilgileri alınırken hata oluştu:', error.message);
      }
    };

    fetchData();
  }, [slugTrainings, slugCategories]);

  if (!training || !training.urlName || !training.categoryName.toLowerCase()) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <>
      <section className="training-detail">
        <div className="container training-container">
          {/* <div className="training-content">
            <div className="training-header">
              <h2>{`${toUpperCaseTurkish(training.name)}`}</h2>
            </div>
            <div className="training-title-text">
              <p>{training.title_text}</p>
            </div>
          </div> */}
        </div>

        <div className="training-bg-img">
          <img src={training.photoURL} alt={training.name} />
        </div>
      </section>
    </>
  )
}