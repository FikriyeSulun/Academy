import React from 'react';

import { supabase } from '../main'

export async function fetchInstructorsOfTrainings(){
    try {
        const { data: InstructorsOfTrainings, error } = await supabase
          .from('InstructorsOfTrainings').select('*');

        if (error) {
            throw error;
        }

        return InstructorsOfTrainings;
    }
    catch (error) {
        console.error('Eğitimeninin verdiği eğitimler bilgileri alınırken hata oluştu:', error.message);
        return [];
    }
}