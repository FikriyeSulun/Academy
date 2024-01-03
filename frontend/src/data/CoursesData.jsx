import React from 'react';

import { supabase } from '../main'

// Courses tablosundan verileri çeker
export async function fetchCourses() {
    //türkçe karakterleri ingilizce karaktere çevirme fonksiyonu
    const turkishToEnglish = (str) => {
        const letters = { "İ": "i", "I": "i", "Ş": "s", "Ğ": "g", "Ü": "u", "Ö": "o", "Ç": "c", "ı": "i", "ş": "s", "ğ": "g", "ü": "u", "ö": "o", "ç": "c" };
        return str.replace(/([İIŞĞÜÇÖışğüöç])/g, function (letter) {
            return letters[letter];
        });
    };

    try {
        const { data: Courses, error } = await supabase
            .from('Courses').select('*');

        if (error) {
            throw error;
        }

        //Çektiğimiz kategori id ve name'leri categoryNames içine atıyoruz
        const instructorNames = await fetchInstructorsName();

        const courseWithinstructorNames = await Promise.all(
            Courses.map(async (course) => {

                const englishUrlName = turkishToEnglish(course.course_name.toLowerCase().replace(/\s+/g, '-'));
                //küçük harfe çevrildi ve boşluklara - koyuldu
                const photoURL = 
                `https://jxclitqaeokejtukmuof.supabase.co/storage/v1/object/public/courseCards/${englishUrlName}.jpg`;

                // Kursun hangi eğitmen tarafından yüklendiğini buluyoruz.
                const instructor = instructorNames.find((instructor) => instructor.id === course.created_by);

                return { ...course, photoURL, instructorName: instructor ? instructor.name : '' };
            })
        );

        return courseWithinstructorNames;
    }
    catch (error) {
        console.error('Kurs bilgileri alınırken hata oluştu:', error.message);
        return [];
    }
}

//Instructors tablomuzdan id ve name'leri çekiyoruz
export async function fetchInstructorsName() {
    try {
        const { data: Instructors, error } = await supabase
            .from('Instructors').select('id, name');

        if (error) {
            throw error;
        }

        return Instructors;
    } catch (error) {
        console.error('Eğitmen bilgileri alınırken hata oluştu:', error.message);
        return [];
    }
}