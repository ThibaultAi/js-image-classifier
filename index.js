let net;

// function for prediction
async function app() {
  console.log('Loading mobilenet..');
  document.getElementById('console2').innerText = `Note that this may take a little bit of time to make the prediction, be patient!`;
  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');

  // Make a prediction through the model on our image.

const imgEl = document.getElementById('output');
  const result = await net.classify(imgEl);
  console.log(result);

  document.getElementById('console').innerText = `
    Prediction  : ${result[0].className}`;
    
}

// Choose the file and load app function
var loadFile = function(event) {
  var img = document.getElementById('output');

  img.src = URL.createObjectURL(event.target.files[0]);
  app();
};
