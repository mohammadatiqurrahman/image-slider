const images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/img5.jpg',
    'images/img6.jpg',
    'images/img7.jpg',
    'images/img8.jpg',
    'images/img9.jpg',
    'images/img10.jpg',
    'images/img11.jpg',
    'images/img12.jpg'
];
let imageIndex = 0;
 const interval = setInterval(()=>{
    if(imageIndex>=images.length){
        imageIndex = 0;
    }
    // console.log(images[imageIndex])
    // imageIndex++;
    const imgurl = document.getElementById('img-slider')
    imgurl.setAttribute('src',images[imageIndex])
    imageIndex++;

    // if(imageIndex>=images.length){
    //     clearInterval(interval);
    // }


},1000)


