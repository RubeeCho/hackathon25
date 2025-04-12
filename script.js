//get elements from the DOM
const counterElement = document.getElementById("counter");

let count = 0;//initialize the counter
count++; //increement
//update the counter to display the now incremented value
counterElement.textContent = count; 


//if scann failed, update result to "Try again!"




//configure QuaggaJS
const quaggaConf = {

    //specify the DOM element where the video stream will be displayed
    inputStream: {
        target: document.querySelector("#camera")
    
    },

    //process and display the live video as captured by the user’s camera.
    type: "LiveStream",
    constraints: {
        width: { min: 640 },
        height: { min: 480 },
        facingMode: "environment",
        aspectRatio: { min: 1, max: 2 }
    },

    //specify the barcode decoders we want to use (All of them)
    decoder: {
        readers: [
            // "ean_8_reader"
            "upc_e_reader"
        ]
    },
}

//initialize QuaggaJS
Quagga.init(quaggaConf, function (err) {
    //check for errors
    if (err) {
        return console.log(err);
    }

    //start the video stream of no errors
    Quagga.start();
});

// display the barcode result when detected and read
Quagga.onDetected(function (result) {
    alert("Detected barcode: " + result.codeResult.code);
});













