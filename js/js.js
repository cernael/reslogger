var time, path, interval;
function startLogging () {
	time = $('#interval').val() * 1000;
	path = $('#path').val();
	interval = setInterval(connect, time);
};

function stopLogging () {
	clearInterval(interval);
};

function connect () {
	var oReq = new XMLHttpRequest();
	oReq.onload = reqListener;
	oReq.open("get", path, true);
	oReq.send();
};

function reqListener () {
	console.log(this);
}