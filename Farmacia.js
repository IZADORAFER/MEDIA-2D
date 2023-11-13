//ouvinte 

frameElement.addEventListener("submit", (e) =>{
    e.preventDefault()
    R$ ${valor.tofixed(2)}
    const valor = Number(frm.inValue)
    resp1.innerText = `valor da compra: R$ ${valor.tofixed(2)}`
    
    let valParcelas //valor das parcelas
    let numParcelas= Math.floor(valor / 20) //número de parcelas
    

//parcelamento maximo em 6x.
    if(numParcelas >6){
        valParcelas = valor/6
        resp2.innerText = `Pode pagar em: 6 x de: R$ ${valParcelas.toFixed(2)}`
//quando o valor for de no minimo uma parcela 
    } else if(numParcelas <= 1){

//para valores entre 2 e 6 parcelas 
    } else {
        valParcelas =valor/numParcelas
        resp2.innerText = `pode pagar em: ${numParcelas} x de R$ ${valParcelas.toFixed(2)}`

    }

   







