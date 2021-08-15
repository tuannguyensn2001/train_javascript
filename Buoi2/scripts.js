// document.querySelector()
// document.querySelectorAll()
// innerHTML 
// value -> input
// innerText
// textContent
// in
// classList
// getAttribute
// setAttribute


// onclick
// onchange
// oninput
// onkeydown
// onkeypress
// onblur
// onmouseover
// onmouseleave
// onmouseenter


//addEventListener

const div = document.querySelector('div');

// div.onclick = function() {
//     console.log('click 1');
// }

// div.onclick = function(){
//     console.log('click 2');
// }

// div.onclick = function(){
//     console.log('click 3');
// }

// div.addEventListener('click',function(){
//     console.log('click me 1');
// })
// div.addEventListener('click',function(){
//     console.log('click me 2 ');
// })
// div.addEventListener('click',function(){
//     console.log('click me 3');
// })

//preventDefault,stoppropagation

// document.querySelector('a').onclick = function(event){
//     event.preventDefault();
// }


// document.querySelector('form').onsubmit = function(event){
//         event.preventDefault();
// }

// const parent = document.querySelector('#parent');

// const child = document.querySelector('#child');

// parent.onclick = function(){
//     console.log('click parent');
// }

// child.onclick = function(event){
//     event.stopPropagation();
//     console.log('click child');
// }


// const child = document.querySelector('#child');

// console.log(child.parentElement);


// const li = document.querySelectorAll('li');

// // let index = 0;



// li.forEach(function(item,fake_index){
//     item.onclick = function(event) {

//         li.forEach(function(item2){
//             item2.classList.remove('active_tab');
//         })
//         // li[index].classList.remove('active_tab');

//         // index = fake_index;

//         const content = document.querySelectorAll('.tab_content > div');

//         content.forEach(function(content){
//             content.classList.remove('active_content');
//         })

//         content[fake_index].classList.add('active_content');
        
//         // console.log(content);

//         event.target.classList.add('active_tab');
//     }
// })

const input = document.querySelector('input');
const comment = document.querySelector('.comment');
const cancel = document.querySelector('.cancel');

input.focus();

input.oninput = function(event){
    const value = event.target.value;
    
    event.target.value = value.trim();

    if(!value) {
        comment.disabled = true;
    } else {
        comment.disabled = false;
    }  
}

function handleSubmitComment()
{
    const p = document.createElement('div');

    // const text = document.createTextNode(input.value);

    // p.appendChild(text);
    
    p.textContent = input.value;
    p.onclick = function(){
        console.log('click the p');
    }
    document.querySelector('.messages').appendChild(p);

    // const p = `<p>${input.value}</p>`;

    // const html = document.querySelector('.messages');

    // html.innerHTML += p;

    input.value = '';
    input.focus();
    comment.disabled = true;
}

input.onkeydown = function(event){
    const key = event.keyCode;

    if(key === 13) {
        // console.log('bam phim enter');
        
        handleSubmitComment();
        

    }

}

cancel.onclick = function(){
    input.value = '';
    input.focus();
    comment.disabled = true;
}

comment.onclick = function(){
    handleSubmitComment();
}


// window.addEventListener('click',function(event){
//     if(event.target.tagName.toLowerCase() === 'p'){
//         console.log('click the p');
//     }
// })

