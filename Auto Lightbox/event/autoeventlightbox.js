function createAutoEventLightbox(autoLightboxStyle, autoLightboxClass, autoLightboxDelay) {

    //concat style
    var theBlockStyle = '.style-' + autoLightboxStyle;

    //check to see if required elements exist on page before proceeding and exit this function if they don't
    var checkReqEl = document.querySelector(theBlockStyle + " .events");
    if (checkReqEl === null) {
       return;
    }   

    //convert seconds to milliseconds
    var autoLightboxDelay = autoLightboxDelay * 1000;

    /**
     * 12h to 2h4 Time Conversion Function
     */
    const convertTime12to24 = (time12h) => {
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':');
        if (hours === '12') {
            hours = '00';
        }
        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }
        return `${hours}:${minutes}`;
    }

    //get current date & time
    var curDateTime = Date.now();
    console.log("curDateTime = " + curDateTime)



    /**
     * Start Date & Time Math
     */

    //get start date
    var startDate = document.querySelector(theBlockStyle + " .start-date");
    startDate = startDate.innerHTML;

    //get start time
    var startTime = document.querySelector(theBlockStyle + " .start-time");
    startTime = startTime.innerHTML;

    //if start time was not entered, set to 12:01 AM
    if (startTime.length === 0) {
        var startTime = "12:01 AM";
    }

    //remove date slashes
    startDate = startDate.replace(/\//g, ",");
    //convert start time
    startTime = convertTime12to24(startTime);
    console.log("startTime = " + startTime)
    //combine start date & time
    var combineStarts = startDate + ' ' + startTime;
    //convert to date format then seconds
    combineStarts = new Date(combineStarts);
    combineStarts = combineStarts.getTime();
    console.log("comebineStarts = " + combineStarts)


    /**
     * End Date & Time Math
     */

    //get end date
    var endDate = document.querySelector(theBlockStyle + " .end-date");
    endDate = endDate.innerHTML;

    //get end time
    var endTime = document.querySelector(theBlockStyle + " .end-time");
    endTime = endTime.innerHTML;

    //if end time was not entered, set to 11:59 PM
    if (endTime.length === 0) {
        var endTime = "11:59 PM";
    }

    //remove date slashes
    endDate = endDate.replace(/\//g, ",");
    //convert end time
    endTime = convertTime12to24(endTime);
    console.log(endTime)

    //combine end date and time
    var combineEnds = endDate + ' ' + endTime;
    //convert to date format then seconds
    combineEnds = new Date(combineEnds);
    combineEnds = combineEnds.getTime();
    console.log(combineEnds)


    /**
     * Create Dynamic "Cookie" Using
     * Event Title, Dates & Character Count
     */
    //get event title
    var eventTitle = document.querySelector(theBlockStyle + ' .event-title a');

    //get event title if Title Link is turned off in style
    if (eventTitle === null) {
        eventTitle = document.querySelector(theBlockStyle + ' .event-title');
     }   

    //create cookie using event title
    var autoCookie = eventTitle.textContent;


    //add event date and time and attach to cookie
    var dateTimeCombi = combineStarts + combineEnds;
    autoCookie += dateTimeCombi;
    //get character count
    checkReqEl = checkReqEl.innerHTML.length;
    //create cookie using list title and character count
    autoCookie += checkReqEl;


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
     * Stop Showing Link is Clicked
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
    if (setCookieValue != 'true' && curDateTime >= combineStarts && curDateTime <= combineEnds) {
        setTimeout(function() {
            autoLightbox.show();
        }, autoLightboxDelay)
        console.log("Auto Event Lightbox is currently displaying.")
    } else if ((curDateTime <= combineStarts) || (curDateTime >= combineEnds)) {
        console.log("Auto Event Lightbox does not display during this time window.")
    } else {
        console.log("User clicked stop showing link.");
    }

} //end auto event lightbox function