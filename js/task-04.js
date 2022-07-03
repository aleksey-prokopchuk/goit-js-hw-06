/*
Задание 4

Счетчик состоит из спана и кнопок, которые, при клике,
должны увеличивать и уменьшать его значение на единицу.

    Создай переменную counterValue в которой будет храниться текущее
    значение счетчика и инициализируй её значением 0.
    Добавь слушатели кликов на кнопки, внутри которых увеличивай или
    уменьшай значение счтетчика.
    Обновляй интерфейс новым значением переменной counterValue.

*/

let counterValue = 0;

const containerCounter = document.querySelector('#counter');
// console.log(containerCounter);
const btnDecrement = containerCounter.querySelector('button[data-action="decrement"]');
// console.log(btnDecrement);
const btnIncrement = containerCounter.querySelector('button[data-action="increment"]');
// console.log(btnIncrement);
const counter = containerCounter.querySelector('#value');
// console.log(counter);

btnDecrement.addEventListener('click', () => {
  // console.log((counterValue -= 1));
  counter.textContent = counterValue -= 1;
});

btnIncrement.addEventListener('click', () => {
  // console.log((counterValue += 1));
  counter.textContent = counterValue += 1;
});
