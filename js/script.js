// pegando elementos
let relogio = document.querySelector('#relogio')

// pegando hora,minuto e segundo do primeiro relogio
let h = document.querySelector('#h')
let m = document.querySelector('#m')
let s = document.querySelector('#s')

// relogio digital smart hora, minuto e segundo
let hSmart = document.querySelector('#hSmart')
let mSmart = document.querySelector('#mSmart')
let sSmart = document.querySelector('#sSmart')

// data e semanada
let data = document.querySelector('#data')
let semana = document.querySelector('#semana')

let dataHora = new Date()
// console.log(dataHora)

function moveRelogio(){

    let momentoAtual = new Date()

    // me devolvesomente a hora,minuto e segundo
    let hora = momentoAtual.getHours()
    let minuto = momentoAtual.getMinutes()
    let segundo = momentoAtual.getSeconds()

    // convertendo o number hora para string
    let strHora = new String(hora)
    let strMinuto = new String(minuto)
    let stringSegundo = new String(segundo)

    
    if (strHora.length == 1) hora = '0' + hora
    if (strMinuto.length == 1) minuto = '0' + minuto
    if (stringSegundo.length == 1) segundo = '0' + segundo

    h.textContent = hora
    m.textContent = minuto
    s.textContent = segundo

    hSmart.textContent = hora
    mSmart.textContent = minuto
    sSmart.textContent = segundo

    // chamando a mesma funcao que vai atualizar a cada segundo
    setTimeout("moveRelogio()",1000)
}

function pegarDia(){

    let agora = new Date()
    let diaSemana = agora.getDate()
    // console.log(diaSemana)

    switch (diaSemana){
        case 0:
            semana.textContent = 'SEG'
            break
        case 1:
            semana.textContent = 'TER'
            break
        case 2:
            semana.textContent = 'QUA'
            break
        case 3:
            semana.textContent = 'QUI'
            break
        case 4:
            semana.textContent = 'SEX'
            break
        case 5:
            semana.textContent = 'SAB'
            break
        case 6:
            semana.textContent = 'DOM'
            break
        default:
            console.log('erro')
            break
    } //fim do swich

    // data smart roxa
    let dataSmart = new Date()
    
    let anoSmart = dataSmart.getFullYear() //2025
    let diaSmart = dataSmart.getDate() // dia smart
    let mesSmart = dataSmart.getMonth()+1 // mes smar
    
    // converte em string para adionarmos o zero na frente
    let strDiaSmart = new String(diaSmart)
    let strMesString = new String(mesSmart)

    // se tiver quantidade de elemento for 1 eu quero que srtDiaSmart recebe '0' + o dia dele na frente
    if(strDiaSmart.length == 1) strDiaSmart = '0' + strDiaSmart
    if(strMesString.length == 1) strMesString = '0' + strMesString
    
    // junta tudo
    data.textContent = `${strDiaSmart}/${strMesString}/${anoSmart}`
}
pegarDia() //chama funcao

