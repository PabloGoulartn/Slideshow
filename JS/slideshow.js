function getSlideshowImage()
{
    return document.querySelector('.slideshow-image');
}

document.querySelector('.next-btn').addEventListener('click', function(){
    handleSlideshowButtonClick();
});

document.querySelector('.prev-btn').addEventListener('click', function(){
    handleSlideshowButtonClick();
});

function handleSlideshowButtonClick()
{
    const slideshowImage = getSlideshowImage();
    const currentSrc = slideshowImage.src;

    if (currentSrc.includes("Dielman"))
    {
        slideshowImage.src = "img/green-ray.png"
    }
    else if (currentSrc.includes("ray"))
    {
        slideshowImage.src = "img/Jeanne-Dielman.jpg"
    }
}