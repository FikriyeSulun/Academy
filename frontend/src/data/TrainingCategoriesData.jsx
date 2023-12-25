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

        return TrainingCategories;
    }
    catch (error) {
        console.error('Eğitim Kategorileri alınırken hata oluştu:', error.message);
        return [];
    }
}
