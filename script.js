//Varaiveis para deixa o jogo aleatorio
//Classes
let classesCard = ['um', 'dois' , 'tres' , 'quatro' , 'cinco', "seis" ]
//let classesCard = ['um' , 'dois']
let classesCardAleatorios = shuffleArray(classesCard)
let classesCardAleatorios2 = shuffleArray(classesCardAleatorios)
//array que junta as classes aleatorias e dps array que aleatoriza o array
let arr = []
let arrAlea = []
//Variaves e array dos cards
let card
let arrCard = []
        //Valoes que interagem com o úsuario
//Armazendo os valores dos cards selecionados
let valor1 = ''
let valor2 = ' '
//Aréa de feedback para o úsuario
let resultado = document.createElement("h1")
document.getElementById('btn').appendChild(resultado)
resultado.classList.add('resultado')
let quantiadeJogadas = 0
//Armazenando os cards
let cartasViradas = []
let parAchados = []
//Botoes
let btnReiniciar = document.createElement("button")
let button = document.createElement("button");

let b = 0


                    //Scripts
let botaoIniciar = document.createElement("button");
document.getElementById('btn').appendChild(botaoIniciar)
botaoIniciar.innerText = 'Iniciar Jogo'
botaoIniciar.classList.add("btn_Iniciar")
botaoIniciar.addEventListener("click", iniciarJogo)

function iniciarJogo(){
    //Remover Botão Inciar
    if(b === 0)
    {   
        document.getElementById('btn').removeChild(botaoIniciar)
        b++
    }
    
    //Adicionar botão reiniciar
    document.getElementById("btn").appendChild(btnReiniciar)
    btnReiniciar.addEventListener("click", reset)
    btnReiniciar.innerText = 'Reiniciar Jogo'
    btnReiniciar.classList.add('btn_reiniciar')
    gerandoClassesAleatorias()
    
    
}

function gerandoClassesAleatorias(){
    //Pegando que foram aleatorizados e juntando em um único array
    for (let i = 0; i < classesCard.length; i++) {
        //Adicionando as classes a um único array
        arr.push(classesCardAleatorios[i])
        arr.push(classesCardAleatorios2[i])
        //console.log(arr)
    }
    //Aleatorizando o array com todas as classes
    arrAlea = shuffleArray(arr)
    classeAosCards()
}


function classeAosCards(){
    
    //Gerar divs que serãos os cards. De acordo com a quantidade de classes
    for (let i = 0; i < arrAlea.length; i++) {
        //Criando a div (card)
        card = document.createElement('div')
        //Adicionando a div que tem a classe valores
        document.getElementById('valores').appendChild(card)
        //Adicionando a classe de acordo com o index do array
        card.classList.add(arrAlea[i])
        //E adicionando uma classe card geral a todos os card
        card.classList.add('card')
        //Adicionando um conteudo ao card
        card.innerText = arrAlea[i]
        card.addEventListener("click", remove)
        //Adicionando ao array
        arrCard.push(card)
    }
}


 function remove(){
    //Remover a class que esconde o conteudo do card

    //Adicionando cada card a um array
    if(cartasViradas.length < 2){
        cartasViradas.push(this)
        //Redefinindo o valor do resultadao das escolhas
        resultado.innerText = ''
        //Trocando as class para mostra qual card foi selecionado
        this.classList.replace('card' , 'noCard')
        //Guardando o valor do primeiro card
        if (valor1 === '') {
            //Guardando o valor
            valor1 = this.innerText;
            console.log(`o valor 1 é ${valor1}`);
        }
        //Guardando o valor do segundo card
        else if (valor2 === ' ') {
            //Gaurdando valor
            valor2 =this.innerText;
            console.log(`O valor2 é ${valor2}`)
            checarEscolhas()
        }
        console.log(cartasViradas)
    }
    else{
        checarEscolhas()
    }
    
 }

 function checarEscolhas(){
    //Checando se os valores são iguais
    if (valor1 === valor2) {
        //Gerando o resultado e resetando os valores
        //Resetando os valores
        valor1 = '';
        valor2 = ' ';
        //Remover os cards escolhidos do array, e adicionando as outros
        while (cartasViradas.length > 0) {
            i = 0
            const element = cartasViradas[i];
            //Adcicionando ao array de pares achados
            parAchados.push(element)
            //Removendo do array de cartas viradas
            cartasViradas.shift()
            i ++
            console.log(parAchados)
            if (parAchados.length === arrCard.length) {
                reiniciarJogo()
            }
        }
        
    } 
    //Checando se os valores são iguais
    else {
        //Gerando o resultado e resetando os valores
        valor1 = ''
        valor2 = ' '
        //Remover os cards escolhidos do array, trocando as classes
        setTimeout(() => {
            while (cartasViradas.length > 0) {
                i = 0
                const element = cartasViradas[i];
                //Alterando a classe do card para esconde-lo novamente
                element.classList.replace('noCard' , 'card')
                //Removendo do array
                cartasViradas.shift()
                i ++
            }
        }, 500);
    }

}

function reiniciarJogo() {
    resultado.innerHTML = "Concluido"
    
    //Novo Jogo
    
    document.getElementById("btn").removeChild(btnReiniciar)
    document.getElementById('btn').appendChild(button);
    button.innerText = 'Jogar Novamente'
    button.addEventListener("click", reset)
    button.classList.add('btn_jogarNovamente')
}

function reset() {
    const element = document.querySelector('.btn_jogarNovamente')
    if (element) {
        document.getElementById('btn').removeChild(button)
    }
    
    const areaCards = document.getElementById('valores');
    //Removendo todos os cards do jogo
    while (areaCards.firstChild) {
         areaCards.removeChild(areaCards.firstChild);
    }

                //Restando Todo o Jogo
 
    classesCard = ['um', 'dois' , 'tres' , 'quatro' , 'cinco' , 'seis']
    //classesCard = ['um' , 'dois']
    classesCardAleatorios = shuffleArray(classesCard)
    classesCardAleatorios2 = shuffleArray(classesCardAleatorios)
    arr = []
    arrAlea = []
    card
    arrCard = []
    valor1 = ''
    valor2 = ' '
    resultado.innerText = ''
    cartasViradas = []
    parAchados = []
    iniciarJogo()
}

 function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  