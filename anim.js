/* <script src="anim.js"> </script> */
function move(object, target){
    var step = (target - object.offsetLeft)/10;
    if(step>0){
        step = Math.ceil(step);
    }else{
        step = Math.floor(step);
    }
    object.style.left = object.offsetLeft + step + "px";
    if (object.offsetLeft == target){
        clearInterval(object.time);
    }

}

function anim(obj, target){
    if (obj.time){
        clearInterval(obj.time);
    }
    obj.time = setInterval(function(){
        move(obj, target)
    }, 100)
}