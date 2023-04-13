let tours_42 = [
  { 
    id:1,
    name:'Best of Paris in 7 Days Tour',
    info:'Paris is synonymous with the finest things that culture can,offer — in art, fashion, food, literature, and ideas. On thistour, your Paris-savvy Rick Steves guide will immerse you in thevery best of',
    local_img:'./img/paris.jpg',
    price:1995,
  },
  { 
    id:2,
    name:'Best of Ireland in 14 Days Tour',
    info:'Rick Steves Best of Ireland tour kicks off with the best ofDublin, followed by Irelands must-see historical sites,charming towns, music-filled pubs, and seaside getaways —including Kinsale, the D...',
    local_img:'./img/vienna.jpeg',
    price:3895,
  },
  { 
    id:3,
    name:'Best of Rome in 7 Days Tour',
    info:'Our Rome tour serves up Europes most intoxicating brew ofdazzling art, earth-shaking history, and city life with style.On this Rome vacation, your tour guide will resurrect thegrandeur of ancient ...',
    local_img:'./img/italy.jpeg',
    price:2095,
  },
  { 
    id:4,
    name:'Best of Poland in 10 Days Tour',
    info:'Starting in the colorful port city of Gdańsk, youll escape thecrowds and embrace the understated elegance ofready-for-prime-time Poland for 10 days. With an expert RickSteves guide at your side, y...',
    local_img:'./img/poland.jpeg',
    price:2595,
  },
];

const section = document.querySelector('.section-center');

const displayTours_42 = () => {
  const toursInfo = tours_42.map((tour)=>{
    const {id, name,info,local_img,price} = tour;
    return`
    <article class="single-tour">
    <img
      src=${local_img}
      alt=${name}
    />
    <footer>
      <div class="tour-info">
        <h4>${name}</h4>
        <h4 class="tour-price">$${price}</h4>
      </div>
      <p>${info}
        <button>read more</button>
      </p>
      <button class="delete-btn">not interested</button>
    </footer>
  </article>
    `
  }).join('');
  section.innerHTML = toursInfo;
};



window.addEventListener('DOMContentLoaded', () => {
  displayTours_42();
});
