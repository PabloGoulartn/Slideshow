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

    if (currentSrc.includes("dielman"))
    {
        slideshowImage.src = "img/green-ray.jpg"
    }
    else if (currentSrc.includes("ray"))
    {
        slideshowImage.src = "img/twin-peaks.jpg"
    }
    else if (currentSrc.includes("peaks"))
    {
        slideshowImage.src = "img/mulholland-drive.jpg"
    }
    else{
        slideshowImage.src = "img/jeanne-dielman.jpg"
    }
}