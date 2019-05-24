jQuery.fn.center = function () {
	this.css("position","absolute");
	this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 3) + $(window).scrollTop()) + "px");
return this;
}
