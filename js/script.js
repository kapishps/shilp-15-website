$(document).ready(function () {
	
	
	
	
	home_start();
	function home_start(){
		
		var tl = new TimelineMax({delay:0});
		
		tl.from('#prepare',1 ,  {force3D:true,transformOrigin:"center 0px", rotationX:90, z:10,ease:Bounce.easeOut});
		tl.from('#toget', 1.5,  {transformOrigin:"center 100%", rotationX:90, x:0.1,ease:Bounce.easeOut},.2);
		tl.from('#technexed', 1.5,  { transformOrigin:"center center", rotationY:90,ease:Bounce.easeOut},.4);
		tl.from('#ribbon1', 1.5,  {x:40, rotationY:-90,ease:Bounce.easeOut},.7);
		tl.from('#ribbon2', 1.5,  {x:-30, rotationY:-90,ease:Bounce.easeOut},.7);
		tl.from('#aswe', 2,  { x:-50,rotationX:90,opacity:0,ease:Elastic.easeOut},1);
		tl.from('#gearup', 1,  {scaleY:0, rotationY:90, x:0.1,ease:Bounce.easeOut},1.4);
		tl.from('#edition', 1,  {transformOrigin:"center 100%", rotationX:90,ease:Bounce.easeOut},1.8);
		tl.from('#btn1', .6,  { y:70,rotationX:90,opacity:0,ease:Power1.easeOut},5.1);
		tl.from('#iit-dept', .6, { x:-30,rotationX:0,opacity:0,ease:Power1.easeOut},5.5);
		tl.from('#ces-logo', .6,  { x:30,rotationX:0,opacity:0,ease:Power1.easeOut},5.5);
		tl.from('#pnglogoshilp', 2,  { x:0,rotationX:0,opacity:0,ease:Power0.easenone},5);
		tl.to('#svg-logo', 2,  { x:0,rotationX:0,opacity:0,ease:Power0.easenone},5);
		//tl.from('#city_whole',1,{opacity:0,transformOrigin:"center center", ease:Elastic.easeOut.config(1,.6)},2);
		//tl.set('#city_whole', {opacity:0});
		//tl.from('#city_whole', 1,  {opacity:0,ease:Power2.easeout},2);
		
	}
	
	
	
	
	
	$('a').click(function (e) {
		e.preventDefault();                   // prevent default anchor behavior
		var goTo = this.getAttribute("href"); // store anchor href
		
		// do something while timeOut ticks ... 
		
		setTimeout(function(){
			window.location = goTo;
		},1000);       
	}); 
	
	
	var s = Snap("#svg");
	s.attr({
	viewBox: [0, 0, 1200, 600]
	});
	
	Snap.load("shilp7.svg", function (f) {
	// SVG animation
	s.append(f);
	var city_w = Snap('#city_whole');
	city_w.attr({opacity:0});
	setTimeout(function () {city_w.animate({opacity: 1}, 2000, mina.easeinout);}, 5000);
	
	
	//setTimeout(svg_appear, 3000);
	//svg_appear();
	//function svg_appear() {
	//city_w.animate({opacity: 1},3000,mina.backout);
	//}
	
	var londoneye_rotate = Snap("#rotating");
	rotateAnimation();
	// Infinite animation for london eye
	function rotateAnimation() {
	londoneye_rotate.animate({
	transform: 'r360,357.24,202.43'
	}, // Basic rotation around a point. No frills.
	50000, // Nice slow turning 
	function () {
	londoneye_rotate.attr({
	transform: 'rotate(0 357.24 202.43)'
	}); // Reset the position.
	rotateAnimation(); // Repeat this animation so it appears infinite.
	}
	);
	
	}
	
	
	var sunrays_rotate=Snap("#sunrays");// Sun events
	rotateAnimation1();
	function rotateAnimation1() {
	sunrays_rotate.animate({
	transform: 'r-360,202.169,118.958'
	}, // Basic rotation around a point. No frills.
	20000, // Nice slow turning 
	function () {
	sunrays_rotate.attr({
	transform: 'rotate(0 202.169 118.958)'
	}); // Reset the position.
	rotateAnimation1(); // Repeat this animation so it appears infinite.
	}
	);
	
	}
	
	var cars_up = ['car1', 'car3', 'ambulance'];
	var cars_down = ['car2', 'car32', 'ambulance2', 'pickup'];
	snow1();
	function snow1() {
	for (var i = 0; i < cars_up.length; i++) {
	var carId = cars_up[i];
	var car_up = Snap('#' + carId);
	var cx_up = car_up.getBBox().cx; // Get its initial coordinates
	var cy_up = car_up.getBBox().cy;
	
	animatecar_up(car_up, cx_up, cy_up);
	}
	for (var i = 0; i < cars_down.length; i++) {
	var carId = cars_down[i];
	var car_down = Snap('#' + carId);
	var cx_down = car_down.getBBox().cx; // Get its initial coordinates
	var cy_down = car_down.getBBox().cy;
	
	animatecar_down(car_down, cx_down, cy_down);
	}
	}
	function animatecar_up(car_up, cx_up, cy_up) {
	car_up.attr({
	transform: 't-800 0 '
	}); // Reset the car's position to behind the
	var timing = getRandomArbitrary(15000, 35000); // Random transition time between times we specify
	var deg = getRandomArbitrary(0, 0);
	car_up.animate({
	transform: 't800 0 r' + deg + ' ' + cx_up + ' ' + cy_up
	}, timing, function () {
	animatecar_up(car_up, cx_up, cy_up);
	});
	}
	function animatecar_down(car_down, cx_down, cy_down) {
	car_down.attr({
	transform: 't800 0 '
	}); // Reset the car's position to behind the 
	var timing = getRandomArbitrary(15000, 35000); // Random transition time between times we specify
	var deg = getRandomArbitrary(0, 0);
	car_down.animate({
	transform: 't-800 0 r' + deg + ' ' + cx_down + ' ' + cy_down
	}, timing, function () {
	animatecar_down(car_down, cx_down, cy_down);
	});
	}
	
	
	var swinghook = Snap('#swinghook');
	rightswing();
	function rightswing() {
	swinghook.animate({
	transform: 'r15,648,150.72'
	}, 2000, mina.easeinout, leftswing);
	
	};
	function leftswing() {
	swinghook.animate({
	transform: 'r-15,648,150.72'
	}, 2000, mina.easeinout, rightswing);
	
	};
	
	// Lets us get random numbers from within a range we specify. From MDN docs.
	function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
	}
	//s.append(f.select("#city_whole"));
	});
	});				