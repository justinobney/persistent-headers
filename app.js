$('label.tree-toggler').click(function () {
    $(this).parent().children('ul.tree').toggle(300);
});

function UpdateTableHeaders() {
   $(".persist-area").each(function() {

       var el             = $(this),
           offset         = el.offset(),
           scrollTop      = $(window).scrollTop(),
           floatingHeader = $(".floatingHeader", this);

       if ((scrollTop > offset.top - 40) && (scrollTop < offset.top + el.height())) {
           floatingHeader.css({
            "visibility": "visible"
           });
       } else {
           floatingHeader.css({
            "visibility": "hidden"
           });
       }
   });
}

// DOM Ready
$(function() {

   var clonedHeaderRow;

   $(".persist-area").each(function() {
       clonedHeaderRow = $(".persist-header", this);
       clonedHeaderRow
         .before(clonedHeaderRow.clone())
         .css("width", clonedHeaderRow.width())
         .addClass("floatingHeader");

        var original = $(".persist-header", this).not(".floatingHeader");
        var copy = $(".persist-header.floatingHeader", this);

        original.find('th').each(function(i,e){
            copy.find('th').eq(i).width($(e).width());
        });

   });

   $(window)
    .scroll(UpdateTableHeaders)
    .trigger("scroll");

});
