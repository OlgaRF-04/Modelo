// Constants
const URL = "https://teachablemachine.withgoogle.com/models/99iY99Psf/"; 

let model, webcam, labelContainer, maxPredictions;

// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // Load the model and metadata
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Setup the webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(300, 300, flip); // Agrandamos la webcam
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // Append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
        const div = document.createElement("div");
        div.classList.add(`label-${model.getClassLabel(i).replace(/\s+/g, '_').toLowerCase()}`);
        labelContainer.appendChild(div);
    }
}

// Main loop to update predictions
async function loop() {
    webcam.update(); // Update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
}

// Run the webcam image through the image model
async function predict() {
    const prediction = await model.predict(webcam.canvas);
    labelContainer.innerHTML = ""; // Limpia el contenido anterior

    for (let i = 0; i < maxPredictions; i++) {
        const prob = (prediction[i].probability * 100).toFixed(0);
        const className = prediction[i].className;

        // Crear elementos
        const labelDiv = document.createElement("div");
        labelDiv.className = "label-bar";
        labelDiv.innerText = `${className}: ${prob}%`;

        const progressContainer = document.createElement("div");
        progressContainer.className = "progress-container";

        const progressBar = document.createElement("div");
        progressBar.className = "progress-bar";
        progressBar.style.width = `${prob}%`;

        // Armar elementos
        progressContainer.appendChild(progressBar);
        labelDiv.appendChild(progressContainer);
        labelContainer.appendChild(labelDiv);
    }
}


// Event listener for the start button
document.getElementById("start-button").addEventListener("click", async () => {
    await init();
});