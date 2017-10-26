
let imageList = [
    'img/header-bg-0.jpg',
    'img/header-bg-1.jpg',
    'img/header-bg-2.jpg'
];
var transitionState = 0

function cycleTransitionState(){
    switch(transitionState){
        case 0:
        transitionState = 1;
        break;
        case 1:
        transitionState = 2;
        break;
        case 2:
        transitionState = 0;
        break;
        default:
        transitionState = 0;
    }
}

function changeHeaderBG(){
    cycleTransitionState();

    //for only one dom traversal.
    var header = $('header.masthead');
    header.fadeTo('slow', 0.3, () => {
        header.css('background-image', 'url('+ imageList[transitionState] +')');
    }).delay(500).fadeTo('slow', 1);
}

//Bad javascript live with it.
$(document).ready( () => {
    console.log("Kevin was here.");
    setInterval(changeHeaderBG,15000);//15 secs
});
