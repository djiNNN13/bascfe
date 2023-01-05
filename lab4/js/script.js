//task1
function getRandomHexColor() {
  var hexColor = '#' + Math.floor(Math.random() * 16777216).toString(16);
  while (hexColor.length < 7) {
    hexColor = '0' + hexColor;
  }
  return hexColor;
}

const changeColorById = () =>{
    document.getElementById('changeColor1').style.background = getRandomHexColor();
    document.getElementById('changeColor1').style.color = getRandomHexColor();
}

const changeColorByQuerySelector = () =>{
    document.querySelector('.changeColor2').style.background = getRandomHexColor();
    document.querySelector('.changeColor2').style.color = getRandomHexColor();
}

//task2
 // Add image function
 function addImage() {
    // Create an image element
    var img = document.createElement("img");
    // Set the image's source
    img.src = "img/kyiv.jpg";
    // Set the image's width and height
    img.width = 300;
    img.height = 200;
    // Append the image to the body element
    document.body.appendChild(img);
  }

  // Increase image size function
  function increaseImageSize() {
    // Get the image element
    var img = document.querySelector("img");
    // Increase the image's width and height by 10%
    img.width += img.width * 0.1;
    img.height += img.height * 0.1;
  }

   // Decrease image size function
   function decreaseImageSize() {
    // Get the image element
    var img = document.querySelector("img");
    // Decrease the image's width and height by 10%
    img.width -= img.width * 0.1;
    img.height -= img.height * 0.1;
  }

  function deleteImage() {
    // Get the image element
    var img = document.querySelector("img");
    // Remove the image from the DOM
    img.parentNode.removeChild(img);
  }