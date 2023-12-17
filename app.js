function captureAndSave() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // In this part, you can add the code for sending the image to the server and then to Telegram
    // For example, using the Fetch API to send it to the server

    // fetch('/upload', {
    //     method: 'POST',
    //     body: canvas.toDataURL('image/png'),
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error uploading image:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((error) => {
            console.error('Error accessing webcam:', error);
        });
});
