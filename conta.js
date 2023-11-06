const frm= document.querySelector("form")
const resp1= document.querySelector("#outResp1")
const resp2= document.querySelector("#outResp2")

let numContas = 0 //declara e inicializa contador...
let ValTotal = 0 //... e acumulador (variaveis globais)
let respostas = "" //string com a resposta a ser exibida 

frm.addEventListener("submit", (e) => {   //"escuta" evento submit do form
    e.preventDefault()                    //evita envio do form

    const descricao = frm.inDescricao.value  //obtém dados da conta
    const valor = Number(frm.inValor.value)

    numContas++                         //adicionam valores ao contador e acumulador 
    ValTotal = ValTotal + valor

    resposta = resposta + descricao+ "-R$:" +valor.toFixed(2) + "/n"

    resp1.inneText = `${resposta}-------------------------`
    resp2.inneText = `${numContas} Contas(s)- Total R$: ${ValTotal.toFixed(2)}`

    frm.inDescricao.value = ""   //limpa campos de forq
    frm.inValor = ""
    frm.inDescricao.focus()      // posiciona no campo inDescricao de fora 
})
       