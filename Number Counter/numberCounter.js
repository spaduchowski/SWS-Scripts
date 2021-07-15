function numberCount(numberCountStyle, numberDuration, numberDelay) {
    
    var yourStyle = numberCountStyle;
    var yourDuration = numberDuration;
    var yourDelay = numberDelay;
    function letsCount() {
        "use strict";
        var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"
        var $counters = $(yourStyle + " li");
        $counters.each(function (ignore, counter) {
            var waypoint = new Waypoint( {
                element: yourStyle,
                handler: function() { 
                    counterUp(counter, {
                        duration: yourDuration,
                        delay: yourDelay
                    }); 
                    this.destroy();
                },
                offset: 'bottom-in-view',
            } );
        });
    } letsCount();

}
