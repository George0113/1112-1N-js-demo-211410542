import { menu } from'./data.js'

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

const displayMenuItems = (menu) => {
    let displayMenu = menu.map((item) => {
        return `
        <article class="menu-item">
          <img src="${item.img}" alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
          </div>
        </article>

        `
    });
    // console.log('displayMenu before join',displayMenu);
    displayMenu = displayMenu.join('');
    // console.log('displayMenu after join',displayMenu);
    sectionCenter.innerHTML = displayMenu;
}



window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayMenubtnItem(menu);
});

const displayMenubtnItem = (menu) =>{
    const menubtn = ["all", ...new Set(menu.map((item)=>item.category))].map((item=>{
        return`
        <button type="button" class="filter-btn" data-id=${item}>${item}</button>
        `
    }));

    console.log('array', menubtn);

    btnContainer.innerHTML = menubtn.join('');
}

