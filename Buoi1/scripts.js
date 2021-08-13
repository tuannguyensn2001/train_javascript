// const min = 10;
// const max = 50;


// // 1 -2

// //10 - 11 

// console.log((max-min)*Math.random() + min);

// DOM  -> document object model 


//getElementById

// const button = document.getElementById('button');

//getElementByClassName

// const button = document.getElementsByClassName('button');


//getElementByTagName

// const button = document.getElementsByTagName('button');


//querySelector

// const button = document.querySelectorAll('button');

// const a = document.anchors;

// const button = document.querySelector('#a');


// console.dir(button);


// const div = document.querySelector('div');

// console.log(div.innerText);

// const image = document.querySelector('img');

// console.log(image.setAttribute('id','123'));
// console.log(image.abc);

// const button = document.querySelector('#a');


// function clickButton() {
//     console.log('click');
// }

// button.onclick = function(){
//     console.log(this.innerHTML);
// };

// const button = document.querySelectorAll('button');



// button.onclick = function(){
//     console.log('click me');
// }

// button.forEach(function(item) {
//     item.onclick = function(){
//         console.log(this.innerHTML);
//     }
// })

// a.style.color = 'blue';

// const button = document.querySelector('#a');

// button.onclick = function(event){
//     console.log(event.target.innerHTML);
// }

// const div = document.querySelector('div');

// div.onclick = function(event){
//     console.log('click div');
// }

// const input = document.querySelector('input');

// // input.onchange = function(event) {
// //     console.log('thay doi');
// // }

// input.onblur = function(event) {
//     console.log('over');
// }

// const button = document.querySelectorAll('button');

// button.forEach(item => {
//     item.onclick = function(event){
//        const color = event.target.innerText;

//         const p = document.querySelector('p');

//         p.style.color = color;

//     }
// })



// const image_slides = [
//     'https://img.freepik.com/free-vector/blue-copy-space-digital-background_23-2148821698.jpg?size=626&ext=jpg',
//     'https://img.freepik.com/free-vector/abstract-technological-background_23-2148897676.jpg?size=626&ext=jpg&ga=GA1.2.1937619873.1628553600',
//     'https://ak.picdn.net/shutterstock/videos/3865319/thumb/1.jpg',
//     'https://www.pikossymposium.com/wp-content/uploads/2018/06/bigstock-Abstract-Triangles-Pattern-Bac-94516874-e1463079024559.jpg',
//     'https://img.freepik.com/free-vector/abstract-banner-background-with-red-shapes_1361-3348.jpg?size=626&ext=jpg'
// ];

// const slide = document.querySelector('.slide_wrapper');

// let index = 0;



// slide.style.backgroundImage = `url(${image_slides[index]})`;



// const previous = document.querySelector('.previous');
// const next = document.querySelector('.next');


// previous.style.visibility = 'hidden';

// next.onclick = function(){
//     index++;
    
//     if (index === image_slides.length - 1 ){
//         next.style.visibility = 'hidden';
//     } 
//     else if (index === 0) {
//         previous.style.visibility = 'hidden';
//     } else {
//         next.style.visibility = 'visible';
//         previous.style.visibility = 'visible';
//     }

//     slide.style.backgroundImage = `url(${image_slides[index]})`;
// }

// previous.onclick = function(){
//     index--;
//     if (index === image_slides.length - 1 ){
//         next.style.visibility = 'hidden';
//     } 
//     else if (index === 0) {
//         previous.style.visibility = 'hidden';
//     } else {
//         next.style.visibility = 'visible';
//         previous.style.visibility = 'visible';
//     }
//     slide.style.backgroundImage = `url(${image_slides[index]})`;

// }


// let isHidden = false;

// const hide_show = document.querySelector('.hide-show');

// const img  = document.querySelector('img');

// hide_show.onclick = function() {
//     isHidden = !isHidden;

//     if(isHidden) {
//         img.style.width = '300px';
//     } else  img.style.width = '0';

// }



// const h1 = document.querySelectorAll('h1');

// const div = document.querySelectorAll(' li div');


// const state = [];


// for(let i = 0; i < h1.length; i++) {
//     state.push(false);
// }

// h1.forEach((item,index) => {
//     item.onclick = function(){
//         state[index] = !state[index];

//         if(state[index]){
//             div[index].style.display = 'block';
//         } else div[index].style.display = 'none';

//     }
// })

// const h1 = document.querySelectorAll('h1');

// h1.forEach((item) => {
//     item.onclick = function(){
//         const parent = this.parentNode;
        
//         const div = parent.querySelector('div');

//         if(div.classList.contains('active')){
//             div.classList.remove('active');
//         } else div.classList.add('active');
//     }
// })



const child = document.querySelector('.child');


let count = 1;

 child.style.width = `${count}%`;


// while(count < 100) {
//     setTimeout(function(){
//         count++;
//         child.style.width = `${count}%`;
//     },1000)
// }

// setInterval(() => {
//     count++;
//     child.style.width = `${count}%`;
// }, 1000);