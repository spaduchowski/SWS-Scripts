function listTabs(listTabsStyle) {

    var theStyle = listTabsStyle;    

    function createTabs() {
        var titleNumm = 1;
        var contNumm = 1;
        var firstTab;
        var firstHeight;
        var firstTotal;

        $(theStyle + ' .content-wrap > ul').wrap('<div id="tabs"></div>');
        $(theStyle + ' li.group > h4').each(function() {
            $(this).wrapInner('<a href="#tab-' + titleNumm++ +'"/></a>');
        });
    
        $(theStyle + ' li.group').first().addClass("active");
        $(theStyle + ' li.group .brief-description').first().addClass("active");
        $(theStyle + ' li.group .brief-description').each(function() {
            var newID = "tab-" + contNumm++;
            $(this).attr('id', newID);
            $(this).addClass("tab");
        });

        if ($(window).width() >= 769) {
            $("#tabs li h4 a").click(function(e){
                e.preventDefault();
            });
        }
    
        $("#tabs li").click(function(){
            // var topTabHeight = $(this).find("a").outerHeight();
            // alert($(this).offset().top - topTabHeight);
   
            var tabid = $(this).find("a").attr("href");
            
            $("#tabs li, .brief-description").removeClass("active");  
            $(".tab").hide();   
            $(tabid).show();    
            $(this).addClass("active"); 
        });

        var firstTab = $(theStyle + ' li.group').first().find('.brief-description');
        var firstHeight = firstTab.outerHeight();
        var firstTotal = firstHeight + $(theStyle + ' li.group').outerHeight();
        $(theStyle).css('height', firstTotal);  

    }  createTabs();


    //tab height
    function tabHeight() {

        if ($(window).width() >= 769) {
    
            //set container height for active
            var totalHeight = $(theStyle + ' li.group.active').outerHeight();
            var totalHeight = totalHeight + $(theStyle + ' li.group.active .brief-description').outerHeight();        
            $(theStyle).css('height', totalHeight);       
            
            $("#tabs li").click(function(){
                var clickHeight = $(theStyle + ' li.group').outerHeight();
                var clickHeight = clickHeight + $(this).find('.brief-description').outerHeight();
                $(theStyle).css('height', clickHeight);       
            });

        } 
    } 

    $(window).resize(tabHeight);

}

