// Eğitmenlerin sayfaları
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getInstructors } from "../data/getData";

export default function InstructorsDetail() {
    const { slugCategories, slugInstructors } = useParams();
    const [instructor, setInstructor] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const instructors = await getInstructors();
                console.log(instructors)
                const selectedInstructor = instructors.find(instructor => (instructor.urlName === slugInstructors && instructor.categoryName.toLowerCase() === slugCategories));
                console.log(selectedInstructor)
                if (selectedInstructor) {
                    setInstructor(selectedInstructor);
                } else {
                    console.error('Eğitimen bulunamadı');
                }
            } catch (error) {
                console.error('Eğitimen bilgileri alınırken hata oluştu:', error.message);
            }
        };

        fetchData();
    }, [slugInstructors, slugCategories]);

    if (!instructor || !instructor.urlName || !instructor.categoryName.toLowerCase()) {
        return <p>Yükleniyor...</p>;
    }

    return (
        <>
            <section className="instructor-detail">
                <div className="container instructor-container">
                    <div className="instructor-content">
                        <h3>{instructor.name}</h3>
                        <h4>{instructor.title}</h4>
                        <p>{instructor.about_me}</p>
                    </div>

                </div>

                <div className="instructor-bg-img">
                    <img src={instructor.photoURL} alt={instructor.name} />
                </div>
            </section>
        </>
    )
}