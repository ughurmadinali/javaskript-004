1)
//получите доступ к элементу с помощью (get...)
<div class="master"></div>

const div1 = document.getElementsByClassName('master')
console.log(div1);

2)
//получите доступ к элементу с помощью (get...)
<div id="master"></div>

const div2 = document.getElementById('master')
console.log('div2');

3)
//получите доступ к элементу с помощью (get...)
<div></div>

const div3 = document.getElementsByTagName('master')
console.log('div3');

4)
//получите доступ к элементу с помощью (query...) через имя атрибута
<div title="someText"></div>
const div4 = document.querySelector('title')

5)
//получите доступ к элементу с помощью (query...) через имя и значение атрибута
<div title="someText"></div>
const div5 = document.querySelector('title.someText')

6)
//получите доступ к элементу с помощью (query...) через тег, имя и значение атрибута
<div title="someText"></div>
const div6 = document.querySelector('div6.title')

7)
//получите доступ к элементу с помощью (query...) через имя класса
<div class="someText"></div>
const div7 = document.querySelector('someText')

8)
//получите доступ к элементу с помощью (query...) через имя идентификатора
<div id="someText"></div>
const div8 = document.querySelector('div.id.someText')

9)
//получите доступ к элементу с помощью (query...) через тег
<div></div>
const div9 = document.querySelector('div')