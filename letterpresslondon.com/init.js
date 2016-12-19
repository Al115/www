$(document).ready(function(){
	$('#slider').slidertron({
		viewerSelector: '.viewer',
		reelSelector: '.viewer .reel',
		slidesSelector: '.viewer .reel .slide',
		speed: 'slow',
		navPreviousSelector: '.previous-button',
		navNextSelector: '.next-button',
		seamlessWrap: false,
		navWrap: false
	});

	$('.gallery').poptrox({
		overlayColor: '#222222',
		overlayOpacity: 0.75,
		usePopupDefaultStyling: false,
		popupCloserSelector: '.closer',
		popupLoaderText: ''
	});
});