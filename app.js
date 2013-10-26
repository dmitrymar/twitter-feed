

(function ($) {

    var jqxhr = $.getJSON( "feed.json", function(data) {
        $("#test").append( "<li>" + data.statuses[0].user.profile_image_url + data.statuses[0].user.screen_name + "<br>" + data.statuses[0].text + "</li>" );
    })

/*        .fail(function() { console.log( "error" ); })
        .always(function() { console.log( "complete" ); });*/

// perform other work here ...

// Set another completion function for the request above
    /*jqxhr.complete(function() { console.log( "second complete" ); });*/

})(jQuery);
