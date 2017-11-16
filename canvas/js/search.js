$('#searchFormSubmit').on('submit',function(){
		var searchUrl = "//www.google.com/search?q=site:cebuhomepages.com"
		var query = $('#searchFormSubmit .search').val();
		var concatUrl = searchUrl + "+" + query;
		window.open(concatUrl,"_blank");
	});