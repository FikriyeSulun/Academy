// import React from 'react';

// import { supabase } from '../main'

// // Users tablosundan verileri çeker
// export async function fetchUser() {
//     const { data, error } = await supabase.auth.getSession();

//     if (data) {
//         // Oturum açılmış kullanıcının bilgilerini içeren data nesnesi
//         console.log('Oturum açılmış kullanıcı:', data.user);
//     } else if (error) {
//         // Oturum açma işleminde bir hata oluştu
//         console.error('Oturum alınamadı:', error.message);
//     }
// }



import React, { useState, useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

import { supabase } from '../main'

export default function UserData() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    return (<div>{session.user.email}</div>)
  }
}