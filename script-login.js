const login = document.getElementById('login');
const senha = document.getElementById('senha');


function logar(){
    if(login.value === "joaov" && senha.value === "joaov"){
        alert('Sucesso');
        location.href = "vendas.html";
    }else{
        alert('Usuario ou senha incorretos');
    }

}