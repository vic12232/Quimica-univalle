const grid = document.getElementById('grid');
const rows = 10;
const columns = 10;

// Crear la malla
for (let i = 0; i < rows * columns; i++) {
  const cell = document.createElement('div');
  cell.classList.add('grid-item');
  
  // Evento: Cambiar color al hacer clic
  cell.addEventListener('click', () => {
    cell.classList.toggle('active');
  });
  
  grid.appendChild(cell);
}
