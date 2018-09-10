var scrollEventIntervalID = 0;
var directionOfScroller = "down";

function onLoadEventInitalizer(){
    setInterval(scrollEventHandler,5000)
}

//Choose which way to scroll the news window
function scrollEventHandler(){
    if (directionOfScroller = "down"){
        setTimeout (scrollEvent, 2000, "down");
    }
    else if (directionOfScroller = "up"){
        setTimeout (scrollEvent, 2000, "up");
    }
 
}

//just input up or down and it will scroll the news window in that direction
function scrollEvent(direction){
    var directionDecision = direction;
    var scrollNews = document.getElementById("dynamicNewsContainer");
    if (directionDecision === "down") {
        scrollNews.scrollBy({
            top: 19.5, 
            left: 0, 
            behavior: 'smooth'      
            });
            intervalIDControler();
    } else if (directionDecision === "up"){
        scrollNews.scrollTo({
            top: 0, 
            left: 0, 
            behavior: 'smooth'      
            });
            intervalIDControler();
    }
}

//direct the flow of scrollEventIntervalID and directionOfScroller
function intervalIDControler(){
    
    if(directionOfScroller === "down" ){
        if(scrollEventIntervalID < 3){
        scrollEventIntervalID++;
        } else {
                scrollEventIntervalID--;
                directionOfScroller = "up";
                var scrollNewsInner = document.getElementById("dynamicNewsContainer");
                scrollNewsInner.scrollTo({
                    top: 0, 
                    left: 0, 
                    behavior: 'smooth'      
                    });

            }
    }
    
    else if (directionOfScroller === "up") {
        if(scrollEventIntervalID >= 0){
            
        scrollEventIntervalID--;
        } else {
            scrollEventIntervalID++;
            directionOfScroller = "down";
        }
            
    }
}



