var getUrlParams = function (url) {
  var params = {};
  (url + '?').split('?')[1].split('&').forEach(function (pair) {
    pair = (pair + '=').split('=').map(decodeURIComponent);
    if (pair[0].length) {
      params[pair[0]] = pair[1];
    }
  });
  return params;
};

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
	$('#main-' + contentId).show();
	
	var ps = getUrlParams(window.location.href);
	if (ps && ps['url'])
		window.location.href = ps['url'];
})();
