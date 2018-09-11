var scrollEventIntervalID = 0;
var directionOfScroller = "down";

function onLoadEventInitalizer(){
    setInterval(scrollEventHandler,5000)
}

//Choose which way to scroll the news window
function scrollEventHandler(){
    if (directionOfScroller === "down"){
        scrollEvent ("down");
    }
    else if (directionOfScroller === "up"){
        scrollEvent("up");
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
            scrollEventIntervalID = 0;
            directionOfScroller = "up";
            var scrollNewsInner = document.getElementById("dynamicNewsContainer");
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

// this needs to be redone

