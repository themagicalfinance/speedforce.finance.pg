jQuery(document).ready(function(){
	jQuery('#copy-input').click(function() {
		var contract_text = document.getElementById('contract-input');
		contract_text.select();
		contract_text.setSelectionRange(0, 99999);
		navigator.clipboard.writeText(contract_text.value);
	});
});