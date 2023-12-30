import React, { useState } from 'react';

export default function Section5() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const questions = [
    {
      question: 'Eğitim nerede gerçekleşmektedir?',
      answer: 'Eğitimlerimiz yüz yüze gerçekleştirilmekte olup; İstanbul Nişantaşı Üniversitesi NeoTech Campus’te bulunan, Acunmedya Akademi’nin stüdyolarında ve bilgisayar laboratuarlarında uygulamalı olarak yapılmaktadır.',
    },
    {
      question: 'Uygulamalı eğitim ile kastedilen nedir?',
      answer: 'Eğitimlerimiz ağırlıklı uygulamalı ve sektörden eğitmenlerle bire bir çalışmalar yapılarak gerçek deneyim fırsatları ile sunulmaktadır.',
    },
    {
      question: 'Eğitimi almak için herhangi bir ön koşul var mı?',
      answer: 'Eğitimlerimiz, lise mezunu olan ve seçtiği mesleğe istek duyan herkes için uygundur. Bunun yanında tüm iş kolları kendi dinamikleri ve özelliklerini gerektirdiğinden dolayı, aday öğrencilerimizin doğru karar verdiğinden emin olmak için öğrencilerimizle ön görüşme yapılmaktadır.',
    },
    {
      question: 'Ön görüşmeden geçemezsem, ödememi geri alabilir miyim?',
      answer: 'Ön görüşmenin olumsuz neticelenmesi halinde yapmış olduğunuz ödeme eksiksiz olarak iade edilir.',
    },
    {
      question: 'Finansal bir yardım ya da burs desteği var mı?',
      answer: 'Bankaların kredi kartlarına uygulanan özel taksitler, okul taksit sistemi ile öğrencilerimize tüm ödeme kolaylıkları sağlanmaktadır.',
    },
    {
      question: 'Taksitle ya da kredi kartıyla ödeme olacak mı?',
      answer: 'Anlaşmalı bankalarımız tarafından sağlanan OTS (Okul Taksit Sistemi) ile eğitim ücretini 6 ila 9 ay arasında, kredi kartına ihtiyaç duymadan taksitlendirebiliyorlar.',
    },
    {
      question: 'Kayıt olmadan önce akademiyi ziyarete gelebilir miyim?',
      answer: 'Evet, ziyarette bulunabilirsiniz. Kampüsümüzü ziyaret edip, imkanlarımızı deneyimlemenizi özellikle tavsiye ediyoruz.',
    },
    {
      question: 'Eğitimi alacak kişilere sağlanacak ek faydalar nelerdir?',
      answer: 'Tüm öğrencilerimiz Acunmedya Akademi’nin geniş network’üne dahil oluyor, eğitim süresince organize edilen Talks, Workshop ve MasterClass etkinlikleri sayesinde, sektör duayenleri ile bire bir tanışma, sohbet etme, soru sorma fırsatı yakalıyor ve kendi network’lerini oluşturuyorlar.',
    },
  ];

  return (
    <section className='Questions'>
      <div className="container questions">

        <div className="questions-content">

          <div className="questions-header">
            <h4>SIKÇA SORULAN SORULAR</h4>
          </div>

          {questions.map((item, index) => (
            <div key={index} className='question'>

              <button
                className={`accordion ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleAccordionClick(index)}
              >
                <h6>{item.question}</h6>
                <span className='material-sybols-outlined'>
                  <i className='fa-solid fa-chevron-down'></i>
                </span>
              </button>
              <div className={`panel ${activeIndex === index ? 'panel-show' : ''}`}>
                <p>{item.answer}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}