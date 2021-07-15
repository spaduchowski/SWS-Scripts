function affinityLightbox(affinityLightboxStyle) {

    var theStyle = affinityLightboxStyle;    

    function affinityDetails() {

        $(theStyle + ' .biobutton').on('click', function() {

            //set email address
            var getHref = $(this).closest('div').find('.email');
            var getHref = getHref.children('a');
            var newMailto = 'mailto:' + getHref.attr('data-username') + "@" + getHref.attr("data-domain");
            getHref.attr("href", newMailto);

            //setup and load lightbox
            var affinityDetails = $(this).parents("li").html();
            var affinityDetails = '<div class="affinity-popup"><ul>' + affinityDetails + '</ul></div>';

            SimpleLightbox.open({
                content: affinityDetails,
                elementClass: 'slbContentEl'
            });

        });

    }  affinityDetails();

}