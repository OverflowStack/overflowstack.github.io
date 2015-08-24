(function () {
	var userLang = navigator.language || navigator.userLanguage;
	var lang = userLang.split('-')[0];
	var contentId;
	switch (lang) {
		case 'zh':
			contentId = 'zh';
			break;
		default:
			contentId = 'english';
			break;
	}
	console.log('#main-' + contentId);
	$('#main-' + contentId).show();
})();