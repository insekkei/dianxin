function show_loading_block() {
	$('body').append($('<div></div>').addClass('loading-lock')
		.append($('<div></div>').addClass('loading-text').text('载入中...'))
		);
	$('.loading-lock').css('min-height', $('body').css('height'));
}

function hide_loading_block(){
	$('.loading-lock').remove();
}
