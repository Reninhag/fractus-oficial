// let showorhide = document.querySelector('#btn');
// let sideBar = document.querySelector('.nav-bar');


// showorhide.onclick = function(){
//     if (showorhide.onclick == true){
       
//         sideBar.classList.add('open')
//     }

//     else {
//         sideBar.classList.add('fechar');
//         sideBar.classList.remove
//     }

// }   

let showorhide = document.querySelector('#btn');
let hide = document.querySelector('#btn-fechar');
let sideBar = document.querySelector('.navegacao');

function abrir(){
    sideBar.classList.add('abrir')
}

function fechar(){
    sideBar.classList.remove('abrir')
}

showorhide.addEventListener("click", abrir);
hide.addEventListener("click", fechar)





let body = document.querySelector('body');
let light = document.querySelector('#light')

light.onclick = function(){
    if (light.checked == true){
        body.classList.add('lightMode');

        document.getElementById('mudar-nome').innerHTML='Modo Escuro';
        
    }
    else {
        body.classList.remove('lightMode');
        document.getElementById('mudar-nome').innerHTML='Modo Claro';
    }
}

let element = document.querySelector('#scroll-horizontal');

element.addEventListener('wheel', (event) => {
    event.preventDefault();
  
    element.scrollBy({
      left: event.deltaY < 0 ? -30 : 30,
    });
  });