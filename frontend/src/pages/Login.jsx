// Giriş yap sayfası

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { supabase } from '../main'


export default function Login() {
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: user.password,
    })

    if (error) {
      alert('Böyle bir kullanıcı bulunamadı. Hatalı kullanıcı adı veya hatalı şifre girişi yapmış olabilirsiniz.');
    }

    navigate('/');
  }

  return (
    <>
      <div className='login' style={{ padding: '300px' }}>

        <form onSubmit={login}>
          <p><input required type="email" name='email' placeholder='E-Posta' /></p>
          <p><input required type="password" name='password' placeholder='Şifre' /></p>
          <button>Giriş Yap</button>
        </form>
      </div>
    </>
  )
}