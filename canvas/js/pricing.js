$(document).ready(function(){
  $.getJSON( $('#pricing-main-json').attr('href'), function( data ) {

  $('.pricing-box .pricing-desc .pricing-title h3').text(data['header-text']);
  $('.pricing-box .pricing-price').html('');
  $('.pricing-box .pricing-price').html('<div class="pricing-price"><span class="price-unit">₱</span>'+data['price']+'<span class="price-tenure">monthly for 47mos. + 10% DP</span></div>');

  $('.pricing-box .pricing-desc .pricing-features ul').html('');
  $.each( data['details'], function( index, item ) {
    $('<li/>', { html: "<i class='"+item['icon']+"'/> "+item['desc'] }).appendTo('.pricing-box .pricing-desc .pricing-features ul');
  });
 
});
	
});
