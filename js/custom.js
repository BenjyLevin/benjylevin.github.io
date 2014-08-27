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

animationClick("#pabout","#pabout", "tada");
animationClick("#pabout","#about", "bounceInRight");

    d3.selectAll("#pabout").on("click", function(){
	d3.selectAll("#about").style("display","block");
	d3.selectAll("#pabout").style("cursor","default");
});


animationClick("#presume","#presume", "tada");
animationClick("#presume","#resume", "bounceInRight");

    d3.selectAll("#presume").on("click", function(){
	d3.selectAll("#resume").style("display","block");
	d3.selectAll("#presume").style("cursor","default");
});

animationClick("#pcourses","#pcourses", "tada");
animationClick("#pcourses","#courses", "bounceInRight");

    d3.selectAll("#pcourses").on("click", function(){
	d3.selectAll("#courses").style("display","block");
	d3.selectAll("#pcourses").style("cursor","default");
});

animationClick("#pgithub","#pgithub", "flipOutX");
animationClick("#pgithub","#github", "tada");

    d3.selectAll("#pgithub").on("click", function(){
	d3.selectAll("#github").style("display","block");
	d3.selectAll("#pgithub").style("cursor","default");
});