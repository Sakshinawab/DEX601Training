({
    

    onStudentSelected : function(component, event, helper) {
		var contactId = event.getParam('contactId');
		component.set('v.contactId',contactId);
		component.find('recordLoader').reloadRecord();
		},

		onGoToRecord : function(component, event, helper){
			var evt = $A.get('event.force:navigateToSObject');
			evt.setParams({recordId : component.get('v.contactId'),
							slideDevName : 'detail'	
		});
		evt.fire();
		}
})
