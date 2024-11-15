function logar(){

    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == 'Gabriel' && password == '1234'){
        alert('Logado com Sucesso');
        location.href = "index2.html";
    }else{
        alert('Usuario ou senha incorreto');
    }
}