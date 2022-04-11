
let sliderr = document.querySelector('#slider');
console.log(sliderr);
let offset = 0;

let dotttOne = document.querySelector('#dotone');
let dotttTwo = document.querySelector('#dottwo');
let dotttThree = document.querySelector('#dotthree');

 dotttOne.addEventListener('click', movess1);
 dotttTwo.addEventListener('click', movess2);
 dotttThree.addEventListener('click', movess3);

 function movess1() {
    sliderr.style.left = 0 + '%';
   
}

function movess2() {
    sliderr.style.left = -137 + '%';
      
}

function movess3() {
    sliderr.style.left = -274 + '%';
       
}

//////////

