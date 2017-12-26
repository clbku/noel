$(document).ready(function(e) {
	
    var l = document.getElementById("onggianoel");
    var size = (Math.floor(Math.random() * 10));
    l.style.width = "200px";
    l.style.height = "auto";
    l.style.position = "absolute";
    l.style.top = "10px";
    l.style.right = "0";
    l.style.zIndex = "100";
    $(l).fadeIn(100);
    var flyTo = "left";
    var stop = false;
    var flying = function() {
        if (!stop) {
            setTimeout(function() {
                window.requestAnimationFrame(flying);
            }, 100);
            if (flyTo == "left") {
                l.style.right = (parseInt($(l).css('right'), 10) + 5) + "px";
                if (parseInt($(l).css('left'), 10) < 0) {
                    flyTo = "right";
                } 
            }
            else {
                l.style.right = "0";
                flyTo = "left";
            }
            
            
        }
    }
    window.requestAnimationFrame(flying);

});