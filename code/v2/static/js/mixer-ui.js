var MixerUI = {

	createBox: function(id, pointables) {

		this.$contentBox = $('<div/>', {
		    id: id,
		    html: '<div class="content">'+id+'</div>',
		    'data-pointables' : pointables,
		    class: 'box'
		}).appendTo("#mixer");

		this.$contentBox.click(function(){
			Controller.control(id);
		});
		
		return (this.$contentBox);

	},
	
	playing: function(el){
		//console.log('playing id: ' + id);
		$(el).addClass('playing');
		
	},

	muted: function(el){
		
		$(el).removeClass('playing');
			
	}
};