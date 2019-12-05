({
    onNavSelect: function(component, event, helper) {
		var selectionName = event.getParam('name');
		if (selectionName == 'students') {
		component.set('v.viewMode', 'students');
		} else {
		component.set('v.viewMode', 'certifications');
			var key = selectionName.split(',');
			component.set('v.certificationId', key[0]);
			console.log('I want to learn'+key[0] + key[1]);
			component.set('v.certificationLabel', key[1]);
			}
		}
})
