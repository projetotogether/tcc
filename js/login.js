function verificarCampoVazioEmail()
{
    var teste=document.getElementById("email");
    if (teste.value==="")
    {     
        teste.classList.remove("text-input2");
    }
    else 
    {
      teste.classList.add("text-input2");
    } 
}
   
function verficarCampoVazioPswd()
{
    var teste2=document.getElementById("password");
    if (teste2.value==="")
    {     
        teste2.classList.remove("text-input2");
    }
    else 
    {
      teste2.classList.add("text-input2");
    }
}
  setInterval(verificarCampoVazioEmail,1);
  setInterval(verficarCampoVazioPswd,1);