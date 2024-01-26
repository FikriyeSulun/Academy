import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { getTrainingCategories, getTrainings, getInstructors } from '../data/getData';

export default function HamburgerMenu() {
    const [trainingCategories, setTrainingCategories] = useState([]);
    const [trainings, setTrainings] = useState([]);
    const [instructors, setInstructors] = useState([]);
    const [subMenus, setSubMenus] = useState([{ isOpen: false }, { isOpen: false }]);

    useEffect(() => {
        // TrainingCategories tablosundan verileri TrainingCategoriesData içinden fetchTrainingCategories ile getirir
        getTrainingCategories().then((categories) => {
            setTrainingCategories(categories);
        });

        // Trainings tablosundan verileri TrainingsData içinden fetchTrainings ile getirir
        getTrainings().then((trainings) => {
            setTrainings(trainings);
        });

        // Instructors tablosundan verileri InstructorsData içinden fetchInstructors ile getirir
        getInstructors().then((instructors) => {
            setInstructors(instructors);
        });

    }, [])

    const toggleSubMenu = (index) => {
        const updatedSubMenus = [...subMenus];
        updatedSubMenus[index].isOpen = !updatedSubMenus[index].isOpen;
        setSubMenus(updatedSubMenus);
    }

    return (
        <div className="hamburgerMenu">
            <ul className='hamburgerMenuList'>

                <li className="menu-item-has-children">
                    <Link to={"/trainings"} >
                        Eğitimler
                    </Link>
                    <button onClick={() => toggleSubMenu(0)}><i className="fa-solid fa-chevron-down"></i></button>
                </li>
                {subMenus[0].isOpen && (
                    <ul className='hamburgerMenuSubnav'>
                        {trainingCategories.map(category => (
                            <>
                                <li key={category.id}>
                                    <Link to={`/trainings/${category.name.toLowerCase()}`}>
                                        {category.name}
                                    </Link>
                                    <button onClick={() => toggleSubMenu(0)}><i className="fa-solid fa-chevron-down"></i></button>
                                </li>
                                <div className='training-categories-trainings'>
                                    <ul>
                                        {trainings.filter(training => training.category_id === category.id).map(training => (
                                            <li className='inActiveMenu subnav-training-list' key={training.id}>
                                                <Link to={`/trainings/${training.categoryName.toLowerCase()}/${training.urlName}`}>
                                                    {training.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </>

                        ))}
                    </ul>
                )}

                <li className="menu-item-has-children">
                    <Link to={"/instructors"} >
                        Eğitmenler
                    </Link>
                    <button onClick={() => toggleSubMenu(1)}><i className="fa-solid fa-chevron-down"></i></button>
                </li>
                {subMenus[1].isOpen && (
                    <ul className='hamburgerMenuSubnav'>
                        {trainingCategories.map(category => (
                            <>
                                <li key={category.id}>
                                    <Link to={`/trainings/${category.name.toLowerCase()}`}>
                                        {category.name}
                                    </Link>
                                    <button onClick={() => toggleSubMenu(0)}><i className="fa-solid fa-chevron-down"></i></button>
                                </li>
                                <div className='training-categories-instructors'>
                                    <ul>
                                        {instructors.filter(instructor => instructor.category_id === category.id).map(instructor => (
                                            <li className='inActiveMenu subnav-instructor-list' key={instructor.id}>
                                                <Link to={`/trainings/${instructor.categoryName.toLowerCase()}/${instructor.urlName}`}>
                                                    {instructor.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div></>
                        ))}
                    </ul>
                )}

                <li>
                    <Link className="inActiveMenuTwo" to={"/contact"} > İletişim </Link>
                </li>

                <li>
                    <Link className='toapplyBtn' to={"/to-apply"} >Başvuru yap</Link>
                </li>
            </ul>
        </div>
    )
}