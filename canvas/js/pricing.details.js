$(document).ready(function(){
  $.getJSON( $('#pricing-details-json').attr('href'), function( data ) {

	  $.each(data, function(i,pd){
	     	var item = $('<div/>', {'class':'col-md-3'});
			var pb = $('<div/>', {'class':'pricing-box'});

			var pt = $('<div/>', {'class':'pricing-title'});
			if(pd['isPrefered']){
				$(pb).addClass('best-price');
				$('<span>Most Popular</span>').appendTo(pt);
			}
			$('<h3/>',{ "html" : pd['title']}).appendTo(pt);

			var pp = $('<div/>', {'class':'pricing-price'})
			.html('<span class="price-unit">₱</span>'+pd['unit'].unit+'<span class="price-tenure">'+pd['unit'].tenure+'</span>');

			if(pd['spot']){
				pp.find('.price-unit').html('');
			}
			
			var pf = $('<div/>', {'class':'pricing-features'});
			this.ul = $('<ul/>');
			var _self = this.ul;
			$(pd['features']).each(function(x,f){
				var li = $('<li/>')
				.html('<strong>'+f.strong+'</strong> '+f.desc);
				li.appendTo(_self);
			});

			if(pd['isPrefered']){
				var li = $('<li/>');
				for( x =0;x<5;x++ ){
					$('<i/>',{"class":"icon-star3"}).appendTo(li);
				}
				li.appendTo(this.ul);
			}
			
			this.ul.appendTo(pf);

			var pa = $('<div/>', {'class':'pricing-action'});
			var btn_color = pd['isPrefered'] ? 'btn btn-info btn-block btn-lg' : 'btn btn-danger btn-block btn-lg bgcolor border-color';
			$('<a/>', {"href":"/l/mandani/", "class": btn_color, "html": "Sign Up"}).appendTo(pa);

			pt.appendTo(pb);
			pp.appendTo(pb);
			
			pf.appendTo(pb);
			pa.appendTo(pb);

			pb.appendTo(item);

			item.appendTo('.pricing-details');

	  });
	 
	});
	
});

