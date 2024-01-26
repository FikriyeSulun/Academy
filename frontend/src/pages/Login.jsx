// Giriş yap sayfası
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import supabase from '../utils/supabaseHelper';
import {toast} from 'react-toastify';
import useSession from '../utils/useSession';

export default function Login() {
  const navigate = useNavigate();
  const session = useSession();
  
  useEffect(() => {
    if(session){
      navigate('/')
    }
  }, [session])

  async function login(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: user.password,
    })

    if (error) {
      toast.error('Böyle bir kullanıcı bulunamadı. Hatalı kullanıcı adı veya hatalı şifre girişi yapmış olabilirsiniz.');
    }else{
      navigate('/')
    }

  }

  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className="loginForm">
            <h2>Giriş Yap</h2>
            <form onSubmit={login}>
              <p><input autoComplete='off' required type="email" name='email' placeholder='E-Posta' /></p>
              <p><input autoComplete='off' required type="password" name='password' placeholder='Şifre' /></p>
              <button>Giriş Yap</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}