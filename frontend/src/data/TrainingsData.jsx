import React from 'react';

import { supabase } from '../main'

// TrainingCategories tablosundan verileri çeker
export async function fetchTrainings() {
    try {
        const { data: Trainings, error } = await supabase
          .from('Trainings').select('*');

        if (error) {
            throw error;
        }

        return Trainings;
    }
    catch (error) {
        console.error('Eğitim bilgileri alınırken hata oluştu:', error.message);
        return [];
    }
}
