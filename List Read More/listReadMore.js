function listReadMoreLightbox(listReadMoreStyle) {

    var theStyle = listReadMoreStyle;

    function loadListReadMore() {

        $(theStyle + ' .readmore').on('click', function(e) {
            e.preventDefault();
            var cardDetails = $(this).closest("div").find(".long-description").html();
            var cardDetails = '<div class="card-popup">' + cardDetails + '</div>';

            SimpleLightbox.open({
                content: cardDetails,
                elementClass: 'slbContentEl'
            });
        });
    }  loadListReadMore();

}