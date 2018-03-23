var dot = ".";

$( document ).ready(function() {
    console.log( "ready!" );
    $.getJSON("example_data.json", function(result) {
        var mainEl = $("#main");
        mainEl.append(createTitleElem('title'));    
        
        
        
        
        
        mainEl.append(createRow("PHONE", result.app_usage.PHONE));
        mainEl.append(createRow("PHONE2", result.app_usage.PHONE));

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



function createTitleElem(title) {
    return $('<h2 class="dots-group-name">'+title+'</h2>');
}


        // <div class="dots-visualization-row green">
        //   <span class="row-label">Screen</span>
        //   <ul class="row-dots">
        //     <li class="dot"></li>
        //     <li class="dot"></li>
        //     <li class="dot"></li>
        //     <li class="dot"></li>
        //   </ul>
        // </div>
function createRow(title, count) {
    var element = $('<div class="dots-visualization-row green"></div>')

    //add row title
    var rowTitle = $('<span class="row-label">'+title+'</span>');
    element.append(rowTitle);

    //add dots
    var dotsBody = $('<ul class="row-dots"></ul>');
    var aDot = '<li class="dot"></li>';

    for (let i = 0; i < count; i++) {
        dotsBody.append(aDot);
    }
    console.log(dotsBody.html());
    element.append(dotsBody);
    return element;
} 
