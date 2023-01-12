# Example
[Auto List Lightbox Example](https://spaduchowski.github.io/SWS-Scripts/Auto%20Lightbox/list/example/index.html)

# Implementation Instructions
Place the following code in the Head Tracking Code box in Site Settings.

```html
<!-- SimpleLightbox JS-->
<script type="text/javascript" src="//whthemes.myschoolapp.com/ftpimages/492/download/download_8162735.js"></script>
<!-- SimpleLightbox CSS-->
<link rel="stylesheet" type="text/css" href="//whthemes.myschoolapp.com/ftpimages/492/download/download_8162736.css">

<!--auto event lightbox-->
<script src="//whthemes.myschoolapp.com/ftpimages/492/download/download_8160981.js" defer=""></script>
<script>
    document.addEventListener("DOMContentLoaded", function () {
        createAutoListLightbox(87448, 'autolightbox', 2);
    });
</script>
```

### Settings
- There are three required parameters for the createAutoEventLightbox function.
- The first is your style number.
- The second is the class name given to the outermost div of the lightbox. (autolightbox is used in below CSS, but this can be whatever you want)
- The third is the delay in seconds. (currently set to 2 seconds - half seconds or decimals will not work)

### General Notes
- If a user clicks the Stop Showing This Popup link, it will no longer display.
- If the school makes changes to List Title, Brief or Long Description, the popup will once again display for any user who clicked the Stop Showing This Popup link.

### CSS
- The majority of styling can be completed in the style you have created for the lightbox.
- There is no background color by default. Add the background color to your style container.
- Set the Header to display none in your style.
- The below CSS should be added to Custom CSS. See comments for explanation. 

```css
/* Begin Auto Lightbox Styles */ 

/* Adjust Width of Lightbox  */
.autolightbox .slbContent {
    width: clamp(40vw, 400px, 95vw);
}

/* Display Page Block Content in Styler, Not Page*/
.style-101677 {
    display: none;
}
.styler .style-101677 {
    display: block;
}

/* Display Page Block Content in Lightbox */
.slbWrapOuter .style-101677 {
    display: block;
}

/* Stop Showing Link Div, Style as needed*/
.stop-showing {
}
```
<br><br>

## Auto List Lightbox User Instructions
*Boilerplate instructions to send to school. You will likely need to edit category and style names in steps below. They are marked with an asterisk.*

### General Notes
- The popup is delayed until user is on page for 2 seconds. This can be adjusted. See steps below.
- If a user clicks the Stop Showing This Popup link, they will no longer see this popup.
- If you make changes to the title or text, the popup will once again display for any user who clicked the Stop Showing This Popup link.
 

### How to Add to a Page
 
1. Add list widget to page.
2. Select category #AutoLighbox.*
3. Click pencil icon to edit lightbox content.
4. Select date and times to display lightbox. (Start date and end date are required.)
5. Enter text into details box.
6. To Edit or create a call-to-action button, see steps below.
7. Click Style button in left-hand column of page.
8. Scroll to list widget and select.
9. Click dropdown menu in left-hand column of page, under Applied Style.
10. Select SPL: Auto Lightbox.*
11. Save page.
 
##### To adjust popup delay
1. Click the Site Settings tab.
2. Scroll to Head Tracking Code box under Website Analytics. 
3. Look for `createAutoListLightbox(101677, 'autolightbox', 2);`.
4. Adjust the last number before closing paranthesis to desired seconds.
5. Half seconds or decimals will not work.

##### To edit existing call-to-action button
1. Select text with mouse.
2. Click three dot icon to expand menu.
3. Click link icon.
4. Edit URL and Text to display fields.
5. Click Save.
 
##### To create call-to-action button
1. Type button text in details box.
2. Select this text with mouse.
3. Click three dot icon to expand menu.
4. Click link icon.
5. Edit URL and Text to display fields.
6. Click Save.
7. Click B bold icon.
 
