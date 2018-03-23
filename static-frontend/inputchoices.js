var dot = ".";

// "movements": {
//     "VEHICLE_NOT_MOVING": 1
// },


$( document ).ready(function() {
    console.log( "ready!" );
    $.getJSON("data.json", function(result) {
        $("#main").append(block("Movements", result.movements));
        $("#main").append(block("Input devices", result.input_devices));
        $("#main").append(block("App usage", result.app_usage));



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


function block(blockTitle, object) {
    var elem = 
        '<div class="dots-group">'+
          '<h2 class="dots-group-name">'+blockTitle+'</h2>'+
          '<div class="dots-visualization">'+
          createRows(object)+
          '</div>'+
        '</div>'

        return elem;
}

function createRows(object) {
    var x = "";
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
          x = x+createRow(key, object[key]);                        
        }
    }
    return x;

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
        createDots(count)+
        '</ul>'+
    '</div>';

    return elem;

} 


function createDots(n) {
    var x = "";
    if (n > 100 && n < 1000) { n = n/20}
    if (n > 1000) { n = n/200}
    for (let i = 0; i < n; i++) {
        x = x+ '<li class="dot"></li>';
    }
    return x;
}
