const btn = document.querySelector('.btn');
const ProductsContainer = document.querySelector('.products-container');

window.addEventListener('DOMContentLoaded', async()=>{
    const url = "https://course-api.com/javascript-store-products";
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('data',data);
        displayItems(data);
    } catch (error) {
        console.error(error);
    }
});
    
    const displayItems = (items) => {
      const displayData = items
        .map((item) => {
            console.log(item);
            return`
            <div class="single-product${item.fields.company}">
            <img src="${item.fields.image[0].url}" class="single-product-img img" alt="albany table">
            <footer>
              <h5 class="name">${item.fields.name}</h5>
              <span class="price">$${item.fields.price}</span>
            </footer>
          </div>`;
        })
        .join('');
        console.log(ProductsContainer);
        ProductsContainer.innerHTML = displayData;
    };