//var p_headers = ["pabout","presume","pcourses","pgithub"];
var p_div = ["about","resume","courses","github","photography"];




function animationClick(trigger, element, animation){
element = $(element);
trigger = $(trigger);
trigger.click(
    function() {
        element.addClass('animated ' + animation);          
        //wait for animation to finish before removing classes
/*        window.setTimeout( function(){
            element.removeClass('animated ' + animation);
        }, 2000);       */    

    })};

function animationHover(trigger, element, animation){
element = $(element);
trigger = $(trigger);
trigger.mouseover(
    function() {
        element.addClass('animated ' + animation);          
        //wait for animation to finish before removing classes
/*        window.setTimeout( function(){
            element.removeClass('animated ' + animation);
        }, 2000);       */    

    })

trigger.mouseleave(
    function() {
        element.removeClass('animated ' + animation);          
        //wait for animation to finish before removing classes
/*        window.setTimeout( function(){
            element.removeClass('animated ' + animation);
        }, 2000);       */    

    })

};

p_div.forEach(function(d){

	var header = "#p" + d;
	var block = "#" + d;
	var header_effect = "tada";
	var block_effect = "bounceInRight";

	if (header == "#pgithub"){
		header_effect = "tada";
		block_effect = "zoomIn";	
	} 

	animationHover(header,header, header_effect);
	animationClick(header,block, block_effect);

	d3.selectAll(header).on("click", function(){
		d3.selectAll(block).style("display","block");
		//d3.selectAll(header).style("cursor","default");
	});

	 var hiddenContent = $( "div" + block );
 
        // Bind to the Read More link to toggle the
        $( header ).click(
            function( event ){
 
                // Cancel the default event (this isn't a real link).
               // event.preventDefault();
 
                // Check to see if the content is visible.
                if (hiddenContent.is( ":visible" )){
 
                    // Hide it slowly.
                    hiddenContent.slideToggle( 700 );
					window.setTimeout( function(){
						hiddenContent.removeClass('animated ' + block_effect);
						$(header).removeClass("animated " + header_effect);
					}, 720);
                } else {
 					// showing it as a block instead - looks cooler in one sharp motion
                    // Show it slowly.
                    //hiddenContent.slideDown( 500 );
 					//hiddenContent.slideToggle();
                }
 
            }
        );

});


// animate social media circles
var icons = ["facebook", "googleplus", "linkedin","githublogo"];
icons.forEach(function(d){
	var icon = d3.select("img#" + d);
	icon.on("mouseover",function(){$("img#" +d).addClass("animated tada")});
	icon.on("mouseleave",function(){$("img#" +d).removeClass("animated tada")});
});