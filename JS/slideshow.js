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

function handleSlideshowButtonClick() {
    const slideshowImage = getSlideshowImage();

    const imageMap = {
        "dielman": "img/green-ray.jpg",
        "ray": "img/twin-peaks.jpg",
        "peaks": "img/mulholland-drive.jpg",
        "drive": "img/jeanne-dielman.jpg"
    };

    for (const keyword in imageMap)
    {
        if(slideshowImage.src.includes(keyword))
        {
            slideshowImage.src = imageMap[keyword];

            return;
        }
    }
}
