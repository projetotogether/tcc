let toggle = document.querySelector('.toggle-icon');
let glass = document.querySelector('.card-glass');
let navigation = document.querySelector('.navigation');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    glass.classList.toggle('active');
  }