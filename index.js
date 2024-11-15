function enviar(){

    var nome = document.getElementById("username").value;
    var idade = document.getElementById("age").value;
    var endereco = document.getElementById("address").value;
    var curso = document.getElementById("desired course").value;
    var email = document.getElementById("email").value;

    if(nome == "Miguel" && idade == "20" && endereco == "Rua Guaribas" && email == "gabriel1524@gmail.com" && curso == "Desenvolvimento de Sistemas", "Contabilidade", "Multmídia"){
        alert('Cadastrado com Sucesso');
        location.href = 'index2.html';
    }else{
        alert('Usuario ou senha incorreto');
    }
}