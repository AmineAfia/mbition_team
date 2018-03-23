var dot = ".";

$( document ).ready(function() {
    console.log( "ready!" );
    $.getJSON("example_data.json", function(result) {
        $("#main").append(block("AAA"));


        // var mainEl = $("#main");
        // mainEl.append(block("AAA"));

        // mainEl.append(createTitleElem('title'));    
        
        
        
        
        
        // mainEl.append(createRow("PHONE", result.app_usage.PHONE));

        // <div class="dots-visualization">
        // <div class="dots-visualization-row green">
        //   <span class="row-label">Screen</span>
        //   <ul class="row-dots">
        //     <li class="dot"></li>
        //     <li class="dot"></li>
        //     <li class="dot"></li>
        //     <li class="dot"></li>
        //   </ul>
        // </div>

        var submenu = $('<div class="dots-visualization"></div>')



        // var block1 = createBlock('app_usage', resizeBy['app_usage']);
        // console.log(block1);
        // mainEl.append(block1);
    });
});


function block(blockTitle) {
    var elem = 
    '<div class="dots-group">'+
          '<h2 class="dots-group-name">'+blockTitle+'</h2>'+
          '<div class="dots-visualization">'+
          createRow("title", 1)+
          createRow("title", 1)+
          createRow("title", 1)+
          '</div>'+
        '</div>'

        

        return elem;
}




function createTitleElem(title) {
    return $('<h2 class="dots-group-name">'+title+'</h2>');
}


// <div class="dots-visualization-row green">
// <span class="row-label">Screen</span>
// <ul class="row-dots">
//     <li class="dot"></li>
//     <li class="dot"></li>
//     <li class="dot"></li>
//     <li class="dot"></li>
// </ul>
// </div>
function createRow(title, count) {
    var elem = 
    '<div class="dots-visualization-row green">'+
        '<span class="row-label">'+title+'</span>'+
        '<ul class="row-dots">'+
        '<li class="dot"></li>'+
        '<li class="dot"></li>'+
        '<li class="dot"></li>'+
        '</ul>'+
    '</div>';

    return elem;
    // var element = $('<div class="dots-visualization-row green"></div>')

    // //add row title
    // var rowTitle = $('<span class="row-label">'+title+'</span>');
    // element.append(rowTitle);

    // //add dots
    // var dotsBody = $('<ul class="row-dots"></ul>');
    // var aDot = '<li class="dot"></li>';

    // for (let i = 0; i < count; i++) {
    //     dotsBody.append(aDot);
    // }
    // console.log(dotsBody.html())
    // element.append(dotsBody);
    // return element;
} 
