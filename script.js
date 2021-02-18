function converter() {
  
  // valor da polegada digitada
  let polegada = document.querySelector('#pol').value;
  
  // pegar o valor de cm e depois escrever o tamanho de polegada vezes 2,54 que dar valor em centimetros. 
  let cm = document.querySelector('#cm');
  
    cm.innerHTML = `${polegada * 2.54} cm`;  
}
