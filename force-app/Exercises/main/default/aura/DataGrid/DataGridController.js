({
	setSelection: function(component, event, helper) {
		debugger;
		var id = event.getParam('arguments').Id;
		component.find('datagridtable').setSelection(id);
		}
})
