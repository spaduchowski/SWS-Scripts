function directoryLightbox(directoryLightboxStyle) {

    var theStyle = directoryLightboxStyle;    

    function directoryDetails() {

        $(theStyle + ' .biobutton').on('click', function() {

            //set email address
            var getHref = $(this).closest('div').find('.email');
            var getHref = getHref.children('a');
            var newMailto = 'mailto:' + getHref.attr('data-username') + "@" + getHref.attr("data-domain");
            getHref.attr("href", newMailto);

            //setup and load lightbox
            var directoryDetails = $(this).parents("li").html();
            var directoryDetails = '<div class="directory-popup">' + directoryDetails + '</div>';

            SimpleLightbox.open({
                content: directoryDetails,
                elementClass: 'slbContentEl'
            });

        });

    }  directoryDetails();

}