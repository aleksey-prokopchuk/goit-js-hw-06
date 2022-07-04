/*
Задание 2

В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>

В JavaScript есть массив строк.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

Напиши скрипт, который для каждого элемента массива ingredients:

    Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
    Добавит название ингредиента как его текстовое содержимое.
    Добавит элементу класс item.
    После чего вставит все <li> за одну операцию в список ul.ingredients.
*/

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const navEl = document.querySelector('#ingredients');

// ---------   Прошу підказати чи можна цю задачу вирішити за допомогою forEach?  (код нижче закоментований)
// const addLi = ingredients.forEach(ingredient => {
// const navLiEL = document.createElement('li');
//   navLiEL.classList.add('item');
//   navLiEL.textContent = ingredient;
//   navEl.appendChild(navLiEL);
//   // console.log(navLiEL);
// });

const addLi = ingredients.map(ingredient => {
  const navLiEL = document.createElement('li');
  navLiEL.classList.add('item');
  navLiEL.textContent = ingredient;
  console.log(navLiEL);
  return navLiEL;
});

navEl.append(...addLi);
