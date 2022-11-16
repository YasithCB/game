
/*cursor change*/

let mouseCursor = $('.cursor');

$( document ).on( "mousemove", function( event ) {
    mouseCursor.css('top',event.pageY+'px');
    mouseCursor.css('left',event.pageX+'px');
});

/*cursor change*/

