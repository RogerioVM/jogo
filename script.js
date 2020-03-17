let temporizador;
let dif;
let conta = 0;
let c;

function iniciar () {
    
    document.querySelector('#pause').style.display = 'inline-block';
    // document.querySelector('#result').style.display = 'inline-block';
    
    dif = document.getElementsByName('dificuldade');
    if(dif[0].checked) {
        
        document.querySelector('#finalizar').style.display = 'none'
        temporizador = setInterval(jogo,1000)
        conta 
        conta++;

    } else if (dif[1].checked) {
        
        document.querySelector('#finalizar').style.display = 'none'
        temporizador = setInterval(jogo,750)
        conta = 0
        conta++;

    } else if (dif[2].checked) {
        
        document.querySelector('#finalizar').style.display = 'none'
        temporizador = setInterval(jogo,500)
        conta = 0
        conta++;

    } else {
        
        document.querySelector('#finalizar').style.display = 'none'
        temporizador = setInterval(jogo,250)
        conta = 0
        conta++;

    }
    
    document.querySelector('button').classList.toggle('show');
}


function jogo() {

    let bola = document.createElement('div');
    bola.setAttribute('class','bola');
    let pos1 = Math.floor(Math.random() * 550);
    let pos2 = Math.floor(Math.random() * 500);
    
    bola.setAttribute('style',`left:${pos1}px;top:${pos2}px`);
    bola.setAttribute('onclick','estourar(this)');

    document.body.appendChild(bola);
}


function estourar(elemento) {
    
    document.body.removeChild(elemento);
    
    let resultado = document.createElement('div');
    resultado.setAttribute('id','pontos');
    document.body.appendChild(resultado);
    
    dif = document.getElementsByName('dificuldade');
    

    c = document.querySelector('#pontos');
    c.style.position = 'absolute';
    c.style.top = '400px';
    c.style.left = '50px';
    c.style.display = 'none';
    c.style.fontSize = '24px';

    if(dif[0].checked) {

        c.innerHTML = `Parabéns, você estourou ${conta++} bolinhas no nivel Easy.<br/>
        Avançe o nível e se desafie ainda mais.`;
    } else if(dif[1].checked) {

        c.innerHTML = `Muito Bom, você estourou ${conta++} bolinhas no nivel Medium.<br/>
         Avançe o nível e se desafie ainda mais.`;
    } else if(dif[2].checked) {

        c.innerHTML = `Excelente, você estourou ${conta++} bolinhas no nivel Hard.<br/>
         Avançe o nível e se desafie ainda mais.`;
    } else {

        c.innerHTML = `Incrível! Você estourou ${conta++} bolinhas <br/>no nivel Expert.<br/>
        Seus reflexos estão espetaculares.`;
}
}

function result() {
    pausar()
    c.style.display = 'block';

    let botaoFinalizar = document.querySelector('#finalizar');

    botaoFinalizar.style.display = 'block';
    botaoFinalizar.style.marginTop = '230px';
    

} 

function pausar () {
    clearInterval(temporizador);
    document.querySelector('#comeco').innerHTML = 'Reiniciar';
    document.querySelector('#pause').style.display = 'none';
    document.querySelector('#result').style.display = 'inline-block'
    document.querySelector('button').classList.toggle('show');
}


