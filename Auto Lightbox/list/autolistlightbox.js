function createAutoListLightbox(autoLightboxStyle, autoLightboxClass, autoLightboxDelay) {

    //concat style
    var theBlockStyle = '.style-' + autoLightboxStyle;

    //check to see if required elements exist on page before proceeding and exit this function if they don't
    var checkListsEl = document.querySelector(theBlockStyle + " .lists");
    if (checkListsEl === null) {
       return;
    }   

    /**
     * Create Dynamic "Cookie" Using
     * List Title & Character Count
     */
    //get list title
    var listTitle = document.querySelector(theBlockStyle + ' .lists .h4-style');

    //get character count
    checkListsEl = checkListsEl.innerHTML.length;

    //create cookie using list title and character count
    var autoCookie = listTitle.textContent + checkListsEl;

    
    /**
     * Create Lightbox Instance,
     * Attach Stop Showing Link
     * and Set Content
     */
    //create popup instance
    var autoLightbox = new SimpleLightbox({
        elementClass: autoLightboxClass,
        closeBtnClass: 'close'
    });

    //create div element for stop showing link and add to container
    var z = document.createElement('div'); // is a node
    z.innerHTML = '<a href="#" id="closeLink">Stop Showing This Popup</a></div>';
    z.classList.add('stop-showing');
    thePageBlock = document.querySelector(theBlockStyle);
    thePageBlock.appendChild(z);

    //set content for lightbox
    autoLightbox.setContent(thePageBlock);



    /**
     * Set Dynamic "Cookie" When
     * Stop Showing When Link is Clicked
     */

    //checking browser for our cookie
    const setCookieValue = localStorage.getItem(autoCookie);

    //dynamic click function to detect if clicked, set cookie and close lightbox
    document.addEventListener("click", function(e) {
        const target = e.target.closest("#closeLink"); // Or any other selector.

        if (target) {
            localStorage.setItem(autoCookie, true);
            autoLightbox.close();
        }
    });


    //load popup between start date&time and end date, if cookie has been set, don't load
    if (setCookieValue != 'true') {
        setTimeout(function() {
            autoLightbox.show();
        }, autoLightboxDelay)
        console.log("Auto List Lightbox is currently displaying.")
    } else {
        console.log("User clicked stop showing link.");
    }

} //end auto list lightbox function