function firstWordClass(firstWordClassStyle) {
    
    var yourStyle = firstWordClassStyle;

    $(yourStyle).each(function() {
        // Some Vars
        var elText,
            openSpan = '<span class="first-word">',
            closeSpan = '</span>';
        
        elText = $(this).text().split(" ");
        elText.unshift(openSpan);
        elText.splice(2, 0, closeSpan);
        elText = elText.join(" ");
        $(this).html(elText);
      });
}   