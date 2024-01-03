// Kullanıcı yaratma yönetim sayfası

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../main'

import { fetchTrainingCategories } from '../../../data/TrainingCategoriesData';
import { fetchTrainings } from '../../../data/TrainingsData';


export default function CreateUser(e) {
    const navigate = useNavigate();
    const [selectedUserRole, setSelectedUserRole] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const [trainingCategories, setTrainingCategories] = useState([]);
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {

        fetchTrainingCategories().then((categories) => {
            console.log('Training Categories:', categories);
            setTrainingCategories(categories);
        });

        fetchTrainings().then((trainings) => {
            console.log('Trainings:', trainings);
            setTrainings(trainings);
        });

    }, []);



    const handleUserRoleChange = (event) => {
        setSelectedUserRole(event.target.value);
    };

    const handleTrainingCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    // const filteredTrainings = selectedCategory
    //     ? trainings.filter(training => training.category_id === selectedCategory)
    //     : trainings;

    console.log(selectedCategory)


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
                    userId: user.userId,
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
        }

        console.log(user);

        // user.id = data.user.id

        // const { data: profileData, error: profileError } = await supabase
        //     .from('UsersData')
        //     .insert({ name: user.name, userId: user.userId, trainingCategory: user.trainingCategory, training: user.training })
        //     .select() >

        navigate('/');
    }

    return (
        <>
            <section className='createUser'>
                <div className='container'>
                    <div className="createUserForm">
                        <h2>Kullanıcı Ekle</h2>
                        <form onSubmit={addUser}>
                            <p><input required type="text" name='name' placeholder='Ad Soyad' /></p>
                            <p><input required type="email" name='email' placeholder='E-Posta' /></p>
                            <p><input required type="password" name='password' placeholder='Şifre' /></p>
                            <div className='select'><label htmlFor="userId">Kullanıcı yetkisi: </label>
                                <select id="userId" name="userId" defaultValue="" onChange={handleUserRoleChange}>
                                    <option value="" disabled>Seçiniz</option>
                                    <option value="management">Yönetim</option>
                                    <option value="instructor">Eğitmen</option>
                                    <option value="student">Öğrenci</option>
                                </select>
                            </div>
                            {selectedUserRole === "instructor" || selectedUserRole === "student" ? (
                                <div className="instructor-student">
                                    <div className='select'>

                                        <label htmlFor="trainingCategory">Eğitim Kategorisi: </label>
                                        <select id="trainingCategory" name="trainingCategory" defaultValue="" onChange={handleTrainingCategoryChange}>
                                            <option value="" disabled>Seçiniz</option>

                                            {trainingCategories.map(category => (
                                                <option key={category.id} value={category.id}>{category.name}</option>
                                            ))}

                                            {/* <option value="television">Televizyon</option>
                                <option value="gastronomy">Gastronomi</option>
                                <option value="digital">Dijital</option>
                                <option value="software">Yazılım</option> */}
                                        </select>

                                    </div>
                                    {selectedCategory !== "" ? (
                                        <div className='select'>
                                            <label htmlFor="training">Eğitim: </label>
                                            <select id="training" name="training" defaultValue="">
                                                <option value="" disabled>Seçiniz</option>
                                                {/* Buraya, selectedCategory'e bağlı olarak eğitimler eklenecek */}
                                                {trainings.map(training => (
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