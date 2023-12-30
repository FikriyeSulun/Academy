import React from 'react';

export default function Section4() {

  const whyUS = [
    {
      header: 'Misyonumuz',
      title: 'Bilginin ve uygulamanın yenisini, doğrusunu, ilerisini ve geçerlisini sunmak Acunmedya Akademi’nin olmazsa olmaz gördüğü, sıkı sıkıya tutunduğu bir çalışma disiplinidir.'
    },
    {
      header: 'Eğitmenlerimiz',
      title: 'Eğitmen kadrosunda ünlü televizyoncular, uzman akademisyenler, deneyimli aşçılar, duayen şefler ve dijital dünyanın üstadlarının bir araya geldiği Acunmedya Akademi bu yönüyle de farklı ve yenilikçi olmayı başarmaktadır.'
    },
    {
      header: 'Ayrıcalıklarımız',
      title: 'Sağlam eğitim ve Akademi’ye özgü Maaşlı Eğitim Programı beraberinde gelen iş imkanları ve ilgili sektör çevreleriyle yakın ilişkiler içinde olan Acunmedya Akademililer ayrıcalıklı bir dünyanın kapılarını aralıyor.'
    },
    {
      header: 'Profesyonellik Sertifikası',
      title: 'Eğitimini başarıyla tamamlayan Acunmedya Akademililer, tüm dünyada ve Türkiye’de geçerli İstanbul Nişantaşı Üniversitesi Sertifikası almaya hak kazanacaklardır.'
    },
  ]

  return (
    <section className='whyUs'>
      <div className="container">

        <div className="whyUs-header">
          <h3>NEDEN ACUNMEDYA AKADEMİ?</h3>
        </div>

        <div className="whyUs-content">
          <div className="whyUS-cards">
            {whyUS.map((item, index) => (
              <div className="whyUS-card" key={index}>
                <h5>{item.header}</h5>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}