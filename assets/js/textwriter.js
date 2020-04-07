// function typewriter(elemento){
//     const textArray = elemento.innerHTML.split('');
//     elemento.innerHTML = '';
//     textArray.forEach((letra,i) => {
//        setTimeout(() => {
//         textArray.innerHTML += letra;
//        }, 75 * i); 
//     });
// }
// const h1Element = document.querySelector('h1');
// console.log(h1Element);
// typewriter(h1Element);
// function typeWriter(elemento){
//     let textoArray = elemento.innerHTML.split('');
//     elemento.innerHTML = '';
//     textoArray.forEach((letra,i)=>{
//         setTimeout(()=>{
//             elemento.innerHTML += + letra;
//         }, 75 * i);
//     })
// }
// const titulo = document.querySelector('h1');
// console.log(titulo);
// typeWriter(titulo);

function typewriter(element) {
  
    let letters = element.innerHTML.split('');
    element.innerHTML = ''; 
    
    letters.forEach(( letter, index, letters ) => {
      setTimeout(() => element.innerHTML += letter, 75 * index);
    });
  }
  
  const text = document.querySelector('.typewriter');
  typewriter(text);