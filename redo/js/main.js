	$.scrollify({
		section : "section",
		sectionName : "section-name",
		interstitialSection : "",
		easing: "easeOutExpo",
		scrollSpeed: 1100,
		offset : 0,
		scrollbars: true,
		standardScrollElements: "",
		setHeights: true,
		overflowScroll: true,
		before:function() {},
		after:function() {},
		afterResize:function() {},
		afterRender:function() {}
	});

				$(function() {
					$.scrollify({
						section : ".example-classname",
					});
				});
