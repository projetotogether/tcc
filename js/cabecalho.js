let toggle = document.querySelector('.toggle-icon');
let sumir = document.querySelector('.sumir');
let navigation = document.querySelector('.navigation');
let header = document.querySelector('.header');
let glass = document.querySelector('.card-glass');

navigation.classList.toggle('active');
header.classList.toggle('active');

toggle.onclick = function(){
  sumir.classList.toggle('sumir');
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
  header.classList.toggle('active');
  glass.classList.toggle('active');

}


// COMPARAÇÃO E PARA ADICIONAR DE ACORDO COM O ID
function activeLink() {
  let list = document.querySelectorAll(".menu li");
  list.ForEach((item) => item.classList.remove('bookmarked'));
  this.classList.add('bookmarked');
}

let page = window.location.pathname;
// alert(page);
// NÃO TERÁ EM TODAS AS PÁGINAS
// VERIFICAR SE OS CAMINHOS ESTÃO CORRETOS
if(page == '\home'){
  let home = document.getElementById('home');
  home.activeLink();
}
else if(page == '\sobrenos'){
  let sn = document.getElementById('sobrenos');
  sn.activeLink();
}
else if(page == '\login\entrar'){
  let log = document.getElementById('login');
  log.activeLink();
}
else if(page =='\perfil'){
  let per = document.getElementyById('perfil');
  per.activeLink();
}
else if(page == '\chatting'){
  let chat = document.getElementyById('chat');
  chat.activeLink();
}
else if (page=='/cadastro')
{

}

 