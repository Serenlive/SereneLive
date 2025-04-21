const contactForm = document.getElementById('nuevo-comentario');
const messageDiv = document.getElementById('message');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
// Validaciones básicas
 const nombre = document.getElementById('nombre').value.trim();
 const mensaje = document.getElementById('comentario').value.trim();

 const successMessageDiv = document.getElementById('message');


 // Verifica si todos los campos tienen contenido
 if (nombre && mensaje) {
     // Mostrar el mensaje de éxito
     messageDiv.classList.remove('hidden');
     messageDiv.classList.add('show');

     // Limpia el formulario y oculta el mensaje después de 2 segundos
     setTimeout(() => {
         messageDiv.classList.remove('show');
         messageDiv.classList.add('hidden');
         contactForm.reset();
     }, 2000);
 } else {
     alert('Por favor, completa los campos antes de enviar.');
 }
});
