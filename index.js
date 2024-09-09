const getcolor =() =>{
    const random = Math.floor(Math.random()*16777215);
    const hexa = "#" + random.toString(16);
    document.body.style.backgroundColor = hexa;
}


document.getElementById("color").addEventListener("click",getcolor);
// for alternate color 
// setInterval(
//     ()=>{
//         getcolor()
//     },1000
// )


// get random image from array
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

const randomIndex = Math.floor(Math.random() * images.length);

document.getElementById('image').src = images[randomIndex];