var canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.pointerEvents = 'none'; // Para que no afecte a la interacción del usuario
canvas.style.zIndex = '100000';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// Obtener el contexto 2D del canvas
var ctx = canvas.getContext('2d');

// Crear un array para almacenar las partículas
var particles = [];

// Función para crear una nueva partícula
function createParticle() {
  var particle = {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 3 + 1, // Tamaño aleatorio
    speedX: Math.random() * 3 - 1.5, // Velocidad horizontal aleatoria
    speedY: Math.random() * 3 - 1.5, // Velocidad vertical aleatoria
  };
  return particle;
}

// Función para dibujar las partículas en el canvas
function drawParticles() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; // Color de las partículas (blanco con opacidad)
  particles.forEach(function(particle) {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
    particle.x += particle.speedX;
    particle.y += particle.speedY;
    // Si la partícula sale de la pantalla, se reinicia su posición
    if (particle.x > window.innerWidth || particle.x < 0 || particle.y > window.innerHeight || particle.y < 0) {
      Object.assign(particle, createParticle());
    }
  });
  requestAnimationFrame(drawParticles);
}

// Crear 100 partículas al cargar la página
for (var i = 0; i < 100; i++) {
  particles.push(createParticle());
}

// Dibujar las partículas
drawParticles();