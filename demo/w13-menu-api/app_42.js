// import  menu  from'./data.js'
const supabaseUrl = 'https://spguhxeeusfjlibdhcxj.supabase.co'
const supabase_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwZ3VoeGVldXNmamxpYmRoY3hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3NTM4NjgsImV4cCI6MTk5MzMyOTg2OH0.am5aCCd9Zr0EmrXUQOgbEDVgM0baq1GMDdyHKJU41uA'

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');


const url = 'https://spguhxeeusfjlibdhcxj.supabase.co/rest/v1/menu_42?select=*';



let menu;

const displayMenuItems = (menu) => {
    let displayMenu = menu.map((item) => {
        return `
        <article class="menu-item">
          <img src="${item.remote_img}" alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.descrip}
            </p>
          </div>
        </article>

        `
    });
    // console.log('displayMenu before join',displayMenu);
    displayMenu = displayMenu.join('');
    // console.log('displayMenu after join',displayMenu);
    sectionCenter.innerHTML = displayMenu;
};

// const categories = ['all', 'breakfast', 'lunch', 'dinner', 'shakes'];


const displayMenuButtons = () => {
  const categories = ['all', ...new Set(menu.map((item) => item.category))];
  let menuButtons = categories.map((category) => {
    return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
  });
  // console.log('displayButtons before join', menuButtons);
  menuButtons = menuButtons.join('');
  // console.log('displayButtons after join\n', menuButtons);
  btnContainer.innerHTML = menuButtons;

  const filterBtns = document.querySelectorAll('.filter-btn');
  console.log('filterBtns', filterBtns);
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      console.log('data-id', e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;
      const filterMenu = menu.filter((item) => item.category === category);
      if (category === 'all') {
        console.log('all', menu);
        displayMenuItems(menu);
      } else {
        console.log(category, filterMenu);
        displayMenuItems(filterMenu);
      }
    });
  });
};

const fetchData = async () =>{
  try {
    //let{data,error} = await supa.from('menu_42').select('*');
    const response = await fetch(url,{
      method:'GET',
      headers:{
        apiKey:`${supabase_key}`,
        Authorization:`Bearer ${supabase_key}`

      }
    });
    const data = response.json();
    console.log('fetchData',data); 
    return data;
  }catch(error){
    console.log(error);
  }
}

window.addEventListener('DOMContentLoaded', async (m) => {
  menu = await fetchData(url);
  await displayMenuItems(menu);
  await displayMenuButtons(menu);
});



