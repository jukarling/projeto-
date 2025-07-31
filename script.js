function calcula(){

    let capital = parseFloat(document.getElementById('capital_inicial').value);

    let porcentagem = parseFloat(document.getElementById('porcentagem_juros').value);
    
    let tempo = parseFloat(document.getElementById('tempo').value);
 
 let taxa = porcentagem / 100;

 let juros = capital*taxa*tempo;

 let montante = capital + juros;

 document.getElementById('resultado').textContent= 'O juros tem o valor de ' + juros + ' e o montante de ' + montante;
}