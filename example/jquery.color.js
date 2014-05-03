;(function($) {
	$.fn.extend({
		// color 获取或设置颜色
		color: function(elem) {
			if(elem == null) {
				return $(this).css('color');
			}else {
				return $(this).css('color', elem)
			}
		},
		// backcolor 获取或设置背景颜色
		backcolor: function(elem) {
			if(elem == null) {
				return $(this).css('background-color');
			}else {
				return $(this).css('background-color', elem);
			}
		}
	});
})(jQuery);
