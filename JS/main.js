function newsScroller(){
    var counter = 0;
    var scrollNews = document.getElementById("dynamicNewsContainer");
    //while(counter != 2){
        window.setInterval(function(){            
        scrollNews.scrollBy({
        top: 19, 
        left: 0, 
        behavior: 'smooth'       
        });
        } ,2000);
        counter === (counter + 1);
        
    //}
    //clearInterval() 
}