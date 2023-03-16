const menu = [
    {
        id: 1,
        title:'hot dog',
        category:'breakfast',
        price:15.59,
        img:'./images/hotdog.jpg',
        remote_img:'',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non qui recusandae natus, repudiandae voluptates quasi aperiam temporibus sint labore provident beatae ut esse perspiciatis deserunt, atque magni! Nemo, culpa!',

    },
    {
        id: 2,
        title:'Hamburger',
        category:'lunch',
        price:150.59,
        img:'./images/Hamburger.jpg',
        remote_img:'',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non qui recusandae natus, repudiandae voluptates quasi aperiam temporibus sint labore provident beatae ut esse perspiciatis deserunt, atque magni! Nemo, culpa!',

    },
    {
        id: 3,
        title:'steak',
        category:'dinner',
        price:1500.59,
        img:'./images/11.jpg',
        remote_img:'',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non qui recusandae natus, repudiandae voluptates quasi aperiam temporibus sint labore provident beatae ut esse perspiciatis deserunt, atque magni! Nemo, culpa!',

    },
    {
        id: 4,
        title:'buttermilk pancakes',
        category:'breakfast',
        price:15.59,
        img:'./images/item-1.jpeg',
        remote_img:'',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non qui recusandae natus, repudiandae voluptates quasi aperiam temporibus sint labore provident beatae ut esse perspiciatis deserunt, atque magni! Nemo, culpa!',

    },
    {
        id: 5,
        title:'dinner double',
        category:'dessert',
        price:13.99,
        img:'./images/item-2.jpeg',
        remote_img:'',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non qui recusandae natus, repudiandae voluptates quasi aperiam temporibus sint labore provident beatae ut esse perspiciatis deserunt, atque magni! Nemo, culpa!',

    },
    {
        id: 6,
        title:'godzilla milkshake',
        category:'shakes',
        price:15.59,
        img:'./images/item-3.jpeg',
        remote_img:'',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non qui recusandae natus, repudiandae voluptates quasi aperiam temporibus sint labore provident beatae ut esse perspiciatis deserunt, atque magni! Nemo, culpa!',

    },
];


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

