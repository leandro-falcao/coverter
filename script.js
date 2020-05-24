function converter() {
  let polegada = document.querySelector('#pol')
  .value;
  let cm = document.querySelector('#cm');
  cm.innerHTML = `${polegada * 2.54} cm`;  
}
