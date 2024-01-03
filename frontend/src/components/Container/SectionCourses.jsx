import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { fetchTrainingCategories } from '../../data/TrainingCategoriesData';
import { fetchCourses } from '../../data/CoursesData';

export default function SectionCourses() {
    const [trainingCategories, setTrainingCategories] = useState([]);
    const [courses, setCourses] = useState([]);
    const [showCourseSelect, setShowCourseSelect] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(1);

    useEffect(() => {
        fetchTrainingCategories().then((categories) => {
            // console.log('Training Categories:', categories);
            setTrainingCategories(categories);
        });

        fetchCourses().then((courses) => {
            console.log('Courses:', courses);
            setCourses(courses);
        });

    }, []);

    const handleButtonClick = () => {
        setShowCourseSelect(!showCourseSelect);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredCategory = selectedCategory
        ? trainingCategories.filter(category => category.id === selectedCategory)
        : trainingCategories;

    const filteredCourses = selectedCategory
        ? courses.filter(course => course.training_category === selectedCategory)
        : courses;

    return (
        <section className='all-course'>
            <div className="container">

                <div className='courses-container'>
                    <div className="courses-header">
                        <h3>ACUNMEDYA AKADEMİ KURSLARI</h3>
                    </div>

                    <div className="course-categories">
                        <button className='select-courses-category' onClick={handleButtonClick}><p>Tüm Kurslar</p>
                            <span className={`material-sybols-outlined ${showCourseSelect ? 'rotate' : ''}`}>
                                <i className='fa-solid fa-chevron-down'></i>
                            </span></button>
                        <div className={`course-select ${showCourseSelect ? 'visible' : ''}`}>
                            {/* <button
                                className={`categoryName`}
                                onClick={() => handleCategoryClick(category.id)}
                            >
                                Tüm Kurslar
                            </button> */}
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
                    </div>
                </div>

                <div className="all-courses">

                    {filteredCategory.map((category) => (
                        <div key={category.id} className="course-cards swiper-wrapper">

                            {
                                filteredCourses.map(course => (
                                    <div
                                        key={course.id}
                                        className={`course-card categorie${category.en_name?.toLowerCase()} swiper-slide`}
                                    >
                                        <Link to={`/course`}>
                                            <div className="course-card_img">
                                                <img src={course.photoURL} alt={course.course_name} />            
                                            </div>
                                            <div className="course-card_title">{course.course_name}</div>
                                            <div className="course-card_text">
                                                {course.course_title}
                                            </div>
                                            <div className="course-card_text">
                                                {course.instructorName}
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }

                        </div>
                    ))}

                </div>
            </div>
        </section>

    )
}