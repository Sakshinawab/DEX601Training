public with sharing class StudentBrowser {
    @AuraEnabled
	public static List<Contact> getStudents(string instructorId,string courseDeliveryId){
		
		String query = '';
		String scheckStatus = 'Status__c IN (\'Enrolled\', \'Completed\') ';

		query += 'SELECT Id, Name, Email, Phone, Title, Account.Name, PhotoUrl FROM Contact ';
		if (courseDeliveryId != '') {
			query += 'WHERE Id IN (SELECT Student__c FROM course_attendee__c WHERE course_delivery__c = :courseDeliveryId AND ' + scheckStatus + ') ';
		} else if (instructorId != '') {
			query += 'WHERE Id IN (SELECT Student__c FROM course_attendee__c WHERE course_delivery__r.Instructor__c = :instructorId AND ' + scheckStatus + ') ';
		}
		query += 'ORDER BY Name';

		return Database.query(query);
		
	}

}
