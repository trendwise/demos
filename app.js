
var model = undefined;


async function initialize() {
    
    model = await tf.loadLayersModel('model.json');
    

}

function displaySelectedImage() {
    const imageInput = document.getElementById('imageInput');
    const selectedImage = document.getElementById('selectedImage');
    const outputDiv = document.getElementById('output');

    if (imageInput.files.length === 0) {
        alert('Please select an image.');
        return;
    }

    outputDiv.innerHTML = '';

    const reader = new FileReader();
    reader.onload = function (e) {
        selectedImage.src = e.target.result;
        selectedImage.style.width = '25%';
        selectedImage.style.display = 'block';
    };

    reader.readAsDataURL(imageInput.files[0]);
}


 

    
    async function classifyImage () {
    
       
       const imageElement=document.getElementById('selectedImage')
        let tensorImg = tf.browser.fromPixels(imageElement).resizeNearestNeighbor([64, 64]).toFloat().expandDims();
        prediction = await model.predict(tensorImg).data();
        
        if (prediction[0] == 0) {
    
            alert("You uploaded a cat!");
    
        } else if (prediction[0] == 1) {
    
            alert("You uploaded a dog!");
    
        } 
    
    }
    
    
    
    initialize();
