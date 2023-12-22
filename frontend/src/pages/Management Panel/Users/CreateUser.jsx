// Kullanıcı yaratma yönetim sayfası

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../main'

export default function CreateUser() {
    const navigate = useNavigate();

    async function addUser(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData);

        const { data, error } = await supabase.auth.signUp({
            email: user.email,
            password: user.password,
            options: {
                data: {
                    name: user.name
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

        navigate('/');
    }

    return (
        <>
            <div className='createUser' style={{ padding: '300px' }}>
                Kullanıcı Ekle
                <form onSubmit={addUser}>
                    <p><input required type="text" name='name' placeholder='Ad Soyad' /></p>
                    <p><input required type="email" name='email' placeholder='E-Posta' /></p>
                    <p><input required type="password" name='password' placeholder='Şifre' /></p>
                    <button>Kullanıcı Ekle</button>
                </form>
            </div>

        </>
    )
}