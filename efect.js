// Efecto bonito al pasar el ratón sobre la imagen
const imagen = document.querySelector('img');

imagen.addEventListener('mouseover', function() {
  this.style.transform = 'scale(1.1)';
  this.style.transition = 'transform 0.5s';
});

imagen.addEventListener('mouseout', function() {
  this.style.transform = 'scale(1)';
  this.style.transition = 'transform 0.5s';
});