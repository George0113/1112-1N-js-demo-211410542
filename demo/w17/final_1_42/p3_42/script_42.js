const search = document.querySelector('#search');
const submit = document.querySelector('#submit');
const random = document.querySelector('#random');
const resultHeading = document.querySelector('#result-heading');
const mealsEl = document.querySelector('#meals');
const single_mealEl = document.querySelector('#single-meal');

const searchMeal = (e) => {
  e.preventDefault();
  const term = search.value;
  //   console.log('term', term);
  if (term.trim()) {
    fetch(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('cocktail data', data);

        if (data.meals === null) {
          resultHeading.innerHTML = `<p> There are no search results. Try again! </p>`;
        } else {
          resultHeading.innerHTML = `<h2> Search Results for '${term}' </h2>`;
          mealsEl.innerHTML = data.drinks
            .map((meal) => {
              return `
                  <div class="meal">
                    <img src="${meal.strDrinkThumb}" />
                    <div class="meal-info" data-mealid="${meal.idDrink}">
                       <h3> ${meal.strGlass} </h3>
                    </div>
                  </div>
                `;
            })
            .join('');
        }
      });
  } else {
    // alert('Please enter a search term');
  }
};

// const getMealById = (mealID) => {
//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${mealID}`)
//     .then((resp) => resp.json())
//     .then((data) => {
//       console.log('single meal', data);
//       const meal = data.meals[0];
//       addMealToDOM(meal);
//     });
// };

// const addMealToDOM = (meal) => {
//   const ingredients = [];
//   for (let i = 1; i <= 20; i++) {
//     if (meal[`strIngredient${i}`]) {
//       ingredients.push(
//         `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
//       );
//     } else {
//       break;
//     }
//   }
//   console.log('ingredients', ingredients);

//   single_mealEl.innerHTML = `
//       <div class="single-meal">
//         <h1> ${meal.strMeal} </h1>
//         <img src="${meal.strMealThumb}" />
//         <div class="main">
//            <p> ${meal.strInstructions} </p>
//            <h2> Ingredients </h2>
//            <ul>
//              ${ingredients
//                .map((ing) => {
//                  return `<li>${ing}</li>`;
//                })
//                .join('')}
//            </ul>
//         </div>

//       </div>
//    `;
// };

// Event listeners
submit.addEventListener('click', searchMeal);

mealsEl.addEventListener('click', (e) => {
  // console.log('e.path', e.composedPath());
  const composedPath = e.composedPath();
  const mealInfo = composedPath.find((item) => {
    if (item.classList) {
      return item.classList.contains('meal-info');
    } else {
      return false;
    }
  });
  if (mealInfo) {
    // console.log('mealInfo', mealInfo);
    const mealID = mealInfo.getAttribute('data-mealid');
    getMealById(mealID);
  }
});
