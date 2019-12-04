({
    onInit : function(component,Event,helper) {
		var students = [];
		/* var studentNames = ['Rad', 'Stuart', 'Andres', 'Rahul', "Amit", "Simon"];
		studentNames.forEach((studentName, index) => {
			students.push(
				{
					'sobjectType' : 'Contact',
					'Name' : studentName,
					'PhotoUrl': '/services/images/photo/0031g00000ef1MOAAY',
					'Id' : index
				}
			);
		})
		*/
		// TODO: Set component attribute here
		//component.set("v.studentList",students);
		helper.queryStudents(component,helper,'','');
	},
	queryStudents : function(component,helper,instructorId,courseDeliveryId){
		helper.callServer(component,"c.getStudents",(response)=>{
			component.set('v.studentList',response);
		},
		{instructorId:instructorId,
			courseDeliveryId:courseDeliveryId});
	},
	broadcastStudentSelected: function(component) {
		var appEvent =$A.get("e.c:AwInstructorsStudentSelected");
		appEvent.setParams({
		contactId: component.get('v.selectedContactId')
		});
		appEvent.fire();
		}
})
