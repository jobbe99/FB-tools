function download(content, filename, contentType){
    if(!contentType) contentType = 'application/octet-stream';
        var a = document.createElement('a');
        var blob = new Blob([content], {'type':contentType});
        a.href = window.URL.createObjectURL(blob);
        a.download = filename;
        a.click();
}


var friends_li = $('ul[data-pnref=friends] > li');
var csv  = '';
friends_li.each(function(index){
	var fsl = $(this).find('.fsl.fwb.fcb');
	var url = fsl.find('a').attr('href');
	url = url.replace('&fref=pb&hc_location=friends_tab','');
	url = url.replace('?fref=pb&hc_location=friends_tab','');
	csv += fsl.find('a').text() + ',' + url + "\n"

});

var csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);

download(csv, "export.csv", "application/csv");

