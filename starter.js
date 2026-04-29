// Philemon VanDussen 
// 4/29/2026
// JS Image Swap Project

const modelImages = ['girl-with-chopsticks.jpg', 'infinity-trail.jpg'];
const imgElement = document.getElementById('model-frame');

const preload = new Image();
preload.src = modelImages[1];

imgElement.addEventListener('mouseenter', () => {
    imgElement.src = modelImages[1];
})

imgElement.addEventListener('mouseleave', () => {
    imgElement.src = modelImages[0]
})



















