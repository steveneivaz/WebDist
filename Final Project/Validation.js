$(document).ready(function() {
$('#enter').blur(function(data){
		var pack = $(this).val();
		if(pack <1){
			$('#error').html('Summons must be greater than 0');
		}else{
			$('#error').html(' ');
		}
	});
});
	