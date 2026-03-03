let sIndex = 0;
        
function showImage(n) {
    sIndex = n;
    displaySlide();
}

function nextSlide(n){
   sIndex=sIndex+n;
    displaySlide();
}

function previousSlide(n){
    sIndex=sIndex+n;
    displaySlide();
}

function displaySlide() {
    let i;
    let slides = document.getElementsByClassName("slides");

    if (sIndex >= slides.length) {
        sIndex = 0;
    }

    if (sIndex < 0) {
        sIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[sIndex].style.display = "block";
}
