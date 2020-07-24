new hoverEffect({
    parent: document.querySelector('.distortion'), 
    intensity: 0.2, 
    image1: './assets/Img1.jpg',
    image2: './assets/Image2.jpg', 
    speedIn: 2, 
    speedOut: 2,
    angle: Math.PI / 4,
    displacementImage: './assets/heightMap.png'
})