/*
Необходимо выполнить в отдельном js файле, подключенному к отдельной HTML странице
1) Создать массив week и записать в него дни недели в виде строк
·        Вывести на экран все дни недели
·        Каждый из них с новой строчки
·        Выходные дни - курсивом
·        Текущий день - жирным шрифтом(использовать объект даты)
2) Запушить проект в репозиторий для усложненных заданий на Github
*/

const week = [' Понедельник ', ' Вторник ', ' Среда ', ' Четверг ', ' Пятница ', ' Суббота ', ' Воскресенье '];

let div = document.createElement("div");
let divsList = week.map(() =>  document.createElement("div"));
let spansList = week.map(() => document.createElement("span"));
let spansList2 = week.map((el, ind) => {
        return document.createElement("span")
});
let divDate = document.createElement("div");
 
const body = document.body;

week.forEach((el, ind) => {
    if(ind == 5 || ind == 6) {
        spansList[ind].insertAdjacentText('afterbegin', el);
        spansList[ind].style.cssText = "color: #ff0000; font-family: arial;";
        return div.insertAdjacentElement("beforeend", spansList[ind]);
    } else {
        spansList[ind].insertAdjacentText('afterbegin', el);
        spansList[ind].style.cssText = "font-family: arial;";
        return div.insertAdjacentElement("beforeend", spansList[ind]);
    }
})

body.insertAdjacentElement('afterbegin', div);
body.insertAdjacentHTML('beforeend', '<hr />');

week.forEach((el, ind) => {
    if(ind == 5 || ind == 6) {
        divsList[ind].insertAdjacentText('afterbegin', el);
        divsList[ind].style.cssText = "color: #ff0000; font-family: arial;";
        return body.insertAdjacentElement("beforeend", divsList[ind]);
    } else {
        divsList[ind].insertAdjacentText('afterbegin', el);
        divsList[ind].style.cssText = "font-family: arial;";
        return body.insertAdjacentElement("beforeend", divsList[ind]);
    }
})

body.insertAdjacentHTML('beforeend', '<hr />');

week.forEach((el, ind) => {
    if(ind == 5 || ind == 6) {
        spansList2[ind].insertAdjacentText('afterbegin', el);
        spansList2[ind].style.cssText = "color: #ff0000; font-weight: bold; font-style: italic; font-family: arial;";
        return body.insertAdjacentElement("beforeend", spansList2[ind]);
    } 
    // else {
    //     spansList[ind].insertAdjacentText('afterbegin', el);
    //     return div.insertAdjacentElement("beforeend", spansList[ind]);
    // }
});

let date = new Date();
let n = date.getDay() - 1;
divDate.insertAdjacentText('afterbegin', week[n]);
console.log(date, "  ", n)
body.insertAdjacentHTML('beforeend', '<hr />');
week.forEach((el, ind) => {
    if( ind == +n ) {
        divDate.style.cssText = "font-weight: bold; font-family: arial;"
        body.insertAdjacentElement('beforeend', divDate);
    }
})