$('document').ready(function(){
	var myDialog =  document.getElementById('dialog');
	$('#showModal').on('click', function(){
		myDialog.showModal();
		console.log('event fired');
	});
	$('#cancel').on('click', function(){
		myDialog.close();
	});
	$('#okay').on('click', function(){
		myDialog.close();
	});
});
