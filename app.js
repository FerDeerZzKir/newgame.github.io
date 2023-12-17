function captureAndSave() {
    const video = document.createElement('video');
    
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;

            video.onloadedmetadata = () => {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;

                const context = canvas.getContext('2d');
                context.drawImage(video, 0, 0, canvas.width, canvas.height);

                // Создание ссылки для скачивания
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/jpeg'); // Меняйте 'image/jpeg' на 'image/png', если нужно сохранять в PNG
                link.download = 'snapshot.jpg'; // Меняйте 'snapshot.jpg' на нужное имя файла

                // Эмуляция клика по ссылке для скачивания
                link.click();

                // Очистка за собой
                document.body.removeChild(video);
                document.body.removeChild(canvas);
            };
        })
        .catch((error) => {
            console.error('Error accessing webcam:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    // Можете также добавить другую инициализацию здесь, если необходимо
});
