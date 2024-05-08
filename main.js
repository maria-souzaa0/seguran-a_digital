const numeroSenha = document.querySelector('.parametro-senha__texto');
let  tamanhoSenha = 12;
numeroSenha. textContent = tamanhoSenha;
const letrasMaiuscula = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbalos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha-botao');
const campoSenha = document.querySelectorAll('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelectorAll('.forca');

botoes[0].onclik = diminuiTamnho;
botoes[1].onclik = aumentaTamanho;

function diminuiTamnho() {
    if (tamanhoSenha > 1){
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamnho(){
    if (tamanhoSenha < 20){
        //tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

for (i = 0; i < checkbox.length; i++){
    checkbox[i].onclik = geraSenha;
}

geraSenha();

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiuscula;
    }
    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasMaiuscula;
    }
    if (checkbox[2].checked) {
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked) {
        alfabeto = alfabeto + simbolos;
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha(alfabeto.length);

}

function classificaSenha(tamanhoAlfabeto){
    let entopia = tamanhoSenha * Math.lon2(tamanhoAlfabeto);
    console.lon(entopia);
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    if (entopia > 57){
        forcaSenha.classList.add('forte');
    } else if (entopia > 35 && entopia < 57 ) {
        forcaSenha.classList.add('media');
    } else if (entropia <= 35){
        forcaSenha.classList.add('fraca');
    }
    const valorEntropia = document.querySelector('.entrpia');
    valorEntropia.textContent = "Um computador pode levar até" + Math.floor(2**entropia/(100e6*60*60*24)) + "dias para descobrir essa senha.";
}
