import React from 'react';

import { supabase } from '../main'

// Instructors tablosundan verileri çeker
export async function fetchInstructors() {
    //türkçe karakterleri ingilizce karaktere çevirme fonksiyonu
    const turkishToEnglish = (str) => {
        const letters = { "İ": "i", "I": "i", "Ş": "s", "Ğ": "g", "Ü": "u", "Ö": "o", "Ç": "c", "ı": "i", "ş": "s", "ğ": "g", "ü": "u", "ö": "o", "ç": "c" };
        return str.replace(/([İIŞĞÜÇÖışğüöç])/g, function (letter) {
            return letters[letter];
        });
    };

    try {
        const { data: Instructors, error } = await supabase
            .from('Instructors').select('*');

        if (error) {
            throw error;
        }

        //Çektiğimiz kategori id ve name'leri categoryNames içine atıyoruz
        const categoryNames = await fetchTrainingCategoriesName();

        const instructorsWithPhotoURL = await Promise.all(

            Instructors.map(async (instructor) => {
                const urlName = instructor.name.toLowerCase().replace(/\s+/g, '-');
                const englishUrlName = turkishToEnglish(instructor.name.toLowerCase().replace(/\s+/g, '-'));
                //küçük harfe çevrildi ve boşluklara - koyuldu
                const photoURL = `https://jxclitqaeokejtukmuof.supabase.co/storage/v1/object/public/instructors/${englishUrlName}.jpg`;

                // Eğitmenin hangi eğitim kategorisine ait olduğunu buluyoruz.
                const category = categoryNames.find((category) => category.id === instructor.category_id);


                // instructor ve fotoğrafların url'leri instructorsWithPhotoURL içine eklendi.
                // categoryName ile eğitmenlere ait bulunan kategoriler instructorsWithPhotoURL içine eklendi
                return { ...instructor, photoURL, categoryName: category ? category.name : '', urlName, englishUrlName  };
            })
        );

        return instructorsWithPhotoURL;
    }
    catch (error) {
        console.error('Eğitimen bilgileri alınırken hata oluştu:', error.message);
        return [];
    }
}

//TrainingCategories tablomuzdan id ve name'leri çekiyoruz
export async function fetchTrainingCategoriesName() {
    try {
        const { data: TrainingCategories, error } = await supabase
            .from('TrainingCategories').select('id, name');

        if (error) {
            throw error;
        }

        return TrainingCategories;
    } catch (error) {
        console.error('Eğitmen Kategorileri alınırken hata oluştu:', error.message);
        return [];
    }
}

// Promise.all fonksiyonu, bir dizi asenkron işlemi paralel olarak çalıştırır ve tüm işlemler tamamlandığında bir promise döndürür. Bu, birden çok asenkron işlemi eşzamanlı olarak yürütmek ve tamamlandığında sonuçları almak için kullanışlıdır. Promise.all kullanmak, işlemleri seri olarak değil, eşzamanlı olarak çalıştırarak performansı artırabilir.