function photoLightbox(photoBlockStyle) {
    
    var theStyle = photoBlockStyle;
    
    function isEmpty(value) {
        return (value == null || value.length === 0);
    }

    function loadPhotoLightBox() {
 
        //wrap in anchor tag
        $(theStyle + ' li.group img').each(function() {
            $(this).wrap('<a href="#" />');
        });
        
        // find the image wrapped in this anchor tag, extract its src attribute
        $(theStyle + ' li.group a').each(function() {
            var url = $("img", this).attr("src");
            $(this).attr("href", url);
        });
        
        // find the image wrapped in this anchor tag, extract its title and attribute
        $(theStyle + ' li.group').each(function() {
            var imgTitle = $("img", this).attr("title");
            var imgCaption = $("p", this).html();

            if (isEmpty(imgTitle) && isEmpty(imgCaption)) {
                var titleCaption = "&nbsp;";
                $("a", this).attr("title", titleCaption);

            } else if (isEmpty(imgTitle) && imgCaption !== null && imgCaption !== '') {
                var titleCaption = imgCaption;
                $("a", this).attr("title", titleCaption);
            } else if (isEmpty(imgCaption) && imgTitle !== null && imgTitle !== '') {
                var titleCaption = imgTitle;
                $("a", this).attr("title", titleCaption);
            } else {
                var titleCaption = imgTitle + "\n" + imgCaption;
                $("a", this).attr("title", titleCaption);
            }
            
        });

        $(theStyle + ' a').simpleLightbox();

    }   loadPhotoLightBox();

}  
    