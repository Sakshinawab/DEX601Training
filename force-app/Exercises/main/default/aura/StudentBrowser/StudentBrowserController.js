({
    doInit : function(component, event, helper) {
helper.onInit(component,event,helper);
	},
	onStudentFilterChange: function(component,event,helper) {
		var instructorId = event.getParam('instructorId');
		var courseDeliveryId = event.getParam('courseDeliveryId');
		console.log('in handler');
		component.set('v.selectedCourseDeliveryId', courseDeliveryId);
		helper.queryStudents(component, helper, instructorId,
		courseDeliveryId);
		},
		onStudentSelected: function(component,event,helper) {
			var contactId = event.getParam('contactId');
			component.set('v.selectedContactId',contactId);
			helper.broadcastStudentSelected(component);
			component.find('datagrid').setSelection(contactId);
		},
		onDataGridRowClick: function(component,event,helper) {
			debugger;
				component.set('v.selectedContactId', event.getParam('pk'));
				helper.broadcastStudentSelected(component);
				}
		
})
