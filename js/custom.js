// Custom styles.

//在段落前添加 ooNoIndent00 强制不缩进
/*
$('p:contains("ooNoIndent00")').each(function() {
	var str = $(this).text();
	if (str.match("^ooNoIndent00")) {
		var text = $(this).html();
		$(this).css('text-indent', '0em');
		$(this).html(text.replace('ooNoIndent00', ''));
	}
});
*/