/*Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
  Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
Обязательно используй switch.Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

Ниже приведен список стран и стоимость доставки.*/

const CHINA = "китай";
const CHILIE = "чили";
const AUSTRALIA = "австралия";
const INDIA = "индия";
const JAMAICA = "ямайка";

let cost;
let country = prompt("Введите страну доставки");
let message;
if (country === null) {
  message = "Отмененно пользователем !";
} else {
  country = country.toLowerCase();
  console.log(country);
}

switch (country) {
  case "":
    alert("Ошибка! Ничего не введено!");
    break;

  case "Китай":
    cost = 100;
    country = "Китай";
    alert = `Доставка на ${country} будет стоить ${cost} кредитов`;
    break;

  case "чили":
    cost = 250;
    country = "чили";
    alert = `Доставка на ${country} будет стоить ${cost} кредитов`;
    break;

  case "Австралия":
    cost = 170;
    country = "Австралия";
    alert = `Доставка на ${country} будет стоить ${cost} кредитов`;

    break;

  case "Индия":
    cost = 80;
    country = "Индия";
    alert = `Доставка на ${country} будет стоить ${cost} кредитов`;

    break;

  case "Ямайка":
    cost = 120;
    country = "Ямайка";
    alert = `Доставка на ${country} будет стоить ${cost} кредитов`;
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
/*if (cost !== undefined) {
  message = `Доставка на ${country} будет стоить ${cost} кредитов`;
}
console.log(message);*/
