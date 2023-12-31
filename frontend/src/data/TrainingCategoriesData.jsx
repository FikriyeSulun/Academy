import React from 'react';

import { supabase } from '../main'

// TrainingCategories tablosundan verileri çeker
export async function fetchTrainingCategories() {
    try {
        const { data: TrainingCategories, error } = await supabase
            .from('TrainingCategories').select('*');

        // console.log(TrainingCategories);

        if (error) {
            throw error;
        }

        const trainingCategoriesWithPhotoURL = await Promise.all(
            TrainingCategories.map(async (trainingCategories) => {
                const photoURL = `https://jxclitqaeokejtukmuof.supabase.co/storage/v1/object/public/trainingCategories/${trainingCategories.en_name}.jpg`;

                return { ...trainingCategories, photoURL };
            })

        )

        return trainingCategoriesWithPhotoURL;
    }
    catch (error) {
        console.error('Eğitim Kategorileri alınırken hata oluştu:', error.message);
        return [];
    }
}
