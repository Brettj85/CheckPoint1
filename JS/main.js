function scrollToSection(whereToScroll){
    var coordinates = whereToScroll
    var elementScroll = document.getElementById(coordinates);
    elementScroll.scrollIntoView({behavior: 'smooth'});

}