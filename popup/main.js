var regex = "[D][a-km-zA-HJ-NP-Z1-9]{33,34}";

var validexample = "D96q8EnJreuSW7SkbodwByKzh8MbbFv1GK";
var invalidexample = "D96q8EnJreuSW7SkbodwByKzh8MbbFv1Gr";

if (browser.tabs && browser.tabs.query) {
	function getActiveTab() {
		return browser.tabs.query({currentWindow: true, active: true});
	}
	getActiveTab().then(function (data) {
		data = data[0]; /* only tab in set */
		var el = kjua({
			render: 'convas',
			text: data.url,
			size:250,
		});
		el.className = "qrcode"
		el.style = "width:100%; height: 100%";
		document.querySelector('body').appendChild(el);
	});
}