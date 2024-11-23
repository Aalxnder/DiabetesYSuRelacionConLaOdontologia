document.addEventListener('DOMContentLoaded', () => {
    const downloadButtons = document.querySelectorAll('.download-btn');

    // Funcionalidad para descargar
    downloadButtons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();

            // Obtener el archivo desde el html
            const fileName = button.getAttribute('data-file');
            const filePath = `Archivos/U1/${fileName}`;

            // Crea un enlace temporal para iniciar la descarga
            const link = document.createElement('a');
            link.href = filePath;
            link.download = fileName;
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