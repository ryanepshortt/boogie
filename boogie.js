var slideIndex = 1;

/*code added*/
var postCount = document.getElementsByClassName("post");
var count = postCount.length;
if (postCount.length >= 1) {
    var slideArr = [1];
    for (i=1;i<postCount.length;i++) {
        slideArr.push(1);
    }
}
showAllSlides()
/*end of code added*/



function plusSlides(n,p) {
    slideArr[p] += n;
    showSlides(slideArr[p],p);
}
function currentSlide(n,p) {
    slideArr[p] = n;
    showSlides(slideArr[p],p);
}

function showSlides(n,p) {
    var i;
    var div = document.getElementById("post"+p);
    var slides = div.getElementsByClassName("mySlides");
    var dots = div.getElementsByClassName("dot");

    if (n > slides.length) {slideArr[p]=1}
    if (n < 1) {slideArr[p] = slides.length}
    console.log(slideArr.toString())
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideArr[p]-1].style.display = "block";
    dots[slideArr[p]-1].className += " active";
}

function showAllSlides () {
    for (j=0;j<postCount.length;j++) {
        var div = document.getElementById("post"+j);
        var slides = div.getElementsByClassName("mySlides");
        var dots = div.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[0].style.display = "block";
        dots[0].className += " active";
    }
}
