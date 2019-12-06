({
	setSelectedRow: function(component,target) {
		var oldRow = component.get('v.selectedRow');
		if (oldRow) {
			try {
			$A.util.removeClass(oldRow, 'slds-is-selected');
			$A.util.addClass(target, 'slds-is-selected');
			} catch(e) {

			}
		}
				component.set('v.selectedRow', target);
			
			
	}
})
