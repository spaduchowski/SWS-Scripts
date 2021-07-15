function calendarLightBox(calendarLightBoxStyle) {

    var theStyle = calendarLightBoxStyle;

    function loadCalendarDetails() {

        $(theStyle + ' .event').each(function() {
            $(this).wrap('<a href="#" />');
        });

        $(theStyle + ' .event-data a').on('click', function(e) {
            e.preventDefault();
            var calendarDetails = $(this).html();
            var calendarDetails = '<div class="calendar-popup">' + calendarDetails + '</div>';
            //alert("test");
            SimpleLightbox.open({
                content: calendarDetails,
                elementClass: 'slbContentEl'
            });
        });

    }  loadCalendarDetails();

}