document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los botones de descarga
    const downloadButtons = document.querySelectorAll('.download-btn');

    // Añade un evento click a cada botón
    downloadButtons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault(); // Evita que se recargue la página

            // Obtén el archivo desde el atributo data-file
            const fileName = button.getAttribute('data-file');
            const filePath = `Archivos/U1/${fileName}`; // Ruta relativa al archivo

            // Crea un enlace temporal para iniciar la descarga
            const link = document.createElement('a');
            link.href = filePath;
            link.download = fileName; // Sugerencia de nombre para la descarga
            document.body.appendChild(link); // Añade el enlace al DOM
            link.click(); // Simula el clic
            document.body.removeChild(link); // Elimina el enlace
        });
    });

    // Funcionalidad para ver
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            const fileName = button.getAttribute('data-file');
            const filePath = `Archivos/U1/${fileName}`;

            // Abre el archivo en una nueva pestaña
            window.open(filePath, '_blank');
        });
    });
});