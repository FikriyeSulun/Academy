// Kullanıcı yaratma yönetim sayfası
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import supabase from '../../../utils/supabaseHelper';

import { getTrainingCategories, getTrainings, getUserRoles } from '../../../data/getData';

export default function CreateUser(e) {
    const navigate = useNavigate();
    const [userRoles, setUserRoles] = useState([]);
    const [trainingCategories, setTrainingCategories] = useState([]);
    const [trainings, setTrainings] = useState([]);
    const [selectedUserRole, setSelectedUserRole] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [filteredTrainings, setFilteredTrainings] = useState([]);

    useEffect(() => {
        getUserRoles().then((userRoles) => {
            // console.log('UserRoles:', userRoles);
            setUserRoles(userRoles);
        });

        getTrainingCategories().then((categories) => {
            // console.log('Training Categories:', categories);
            setTrainingCategories(categories);
        });

        getTrainings().then((trainings) => {
            // console.log('Trainings:', trainings);
            setTrainings(trainings);
        });

    }, []);

    useEffect(() => {
        const newTrainings = trainings.filter(training => training.category_id === selectedCategory)
        setFilteredTrainings(newTrainings)
        // console.log(newTrainings);
    }, [selectedCategory, trainings])

    const handleUserRoleChange = (event) => {
        setSelectedUserRole(event.target.value);
        setSelectedCategory("");
    };

    const handleTrainingCategoryChange = (event) => {
        const categoryValue = parseInt(event.target.value)
        setSelectedCategory(categoryValue);

    };

    //kullanıcı ekleme
    async function addUser(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData);

        const { data, error } = await supabase.auth.signUp({
            email: user.email,
            password: user.password,
            options: {
                data: {
                    name: user.name,
                    userRole: user.userRole,
                    trainingCategory: user.trainingCategory,
                    training: user.training
                }
            }
        });

        if (error) {
            if (error.status === 400) {
                alert('Bu bilgilerde kayıtlı kullanıcı var.');
            } else {
                // error.status === 422
                alert('Bilgiler hatalı veya eksik girildi.');
            }
            return;
        } else {

            console.log(data)
            // const userData = data.user;

            navigate('/management-panel')
        }

    }

    return (
        <>
            <section className='createUser'>
                <div className='container'>
                    <div className="createUserForm">
                        <h2>Kullanıcı Ekle</h2>
                        <form onSubmit={addUser}>
                            <p><input autoComplete='off' required type="text" name='name' placeholder='Ad Soyad' /></p>
                            <p><input autoComplete='off' required type="email" name='email' placeholder='E-Posta' /></p>
                            <p><input autoComplete='off' required type="password" name='password' placeholder='Şifre' /></p>
                            <div className='select'><label htmlFor="userRole">Kullanıcı yetkisi: </label>
                                <select id="userRole" name="userRole" defaultValue="" onChange={handleUserRoleChange}>
                                    <option value="" disabled>Seçiniz</option>

                                    {userRoles.map(role => (
                                        <option key={role.id} value={role.en_name}>{role.name}</option>
                                    ))}

                                </select>
                            </div>
                            {selectedUserRole === "instructor" || selectedUserRole === "student" ? (
                                <div className="instructor-student">
                                    <div className='select'>

                                        <label htmlFor="trainingCategory">Eğitim Kategorisi: </label>
                                        <select id="trainingCategory" name="trainingCategory" value={selectedCategory} onChange={handleTrainingCategoryChange}>
                                            <option value="" disabled>Seçiniz</option>

                                            {trainingCategories.map(category => (
                                                <option key={category.id} value={category.id}>{category.name}</option>
                                            ))}

                                        </select>

                                    </div>
                                    {selectedCategory !== "" ? (
                                        <div className='select'>
                                            <label htmlFor="training">Eğitim: </label>
                                            <select id="training" name="training" defaultValue="">
                                                <option value="" disabled>Seçiniz</option>
                                                {/* Buraya, selectedCategory'e bağlı olarak eğitimler eklenecek */}
                                                {filteredTrainings.map(training => (
                                                    <option key={training.id} value={training.id}>{training.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    ) : null}
                                </div>

                            ) : null}


                            <button> Ekle</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}