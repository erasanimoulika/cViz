'use strict';


var schedulerApp = angular.module('scheduler',['jqwidgets']);

console.log('am in controller2');

schedulerApp.controller('schedulerController', ['$scope',
  function($scope) {


  	$scope.tagline = 'To the moon and back!';


var appointments = new Array();
            var appointment1 = {
                id: "id1",
                description: "George brings projector for presentations.",
                location: "",
                subject: "Quarterly Project Review Meeting",
                calendar: "Room 1",
                start: new Date(2016, 2, 2, 9, 0, 0),
                end: new Date(2016, 2, 2, 16, 0, 0)
            }
          var appointment2 = {
                id: "id2",
                description: "George brings projector for presentations.",
                location: "",
                subject: "Quarterly Project Review Meeting",
                calendar: "Room 2",
                start: new Date(2016, 2, 3, 9, 0, 0),
                end: new Date(2016, 2, 3, 16, 0, 0)
            }
            appointments.push(appointment1);
               appointments.push(appointment2);
                     // prepare the data
            var source =
            {
                dataType: "array",
                dataFields: [
                    { name: 'id', type: 'string' },
                    { name: 'description', type: 'string' },
                    { name: 'location', type: 'string' },
                    { name: 'subject', type: 'string' },
                    { name: 'calendar', type: 'string' },
                    { name: 'start', type: 'date' },
                    { name: 'end', type: 'date' }
                ],
                id: 'id',
                localData: appointments
            };
            
            $scope.settings = {
                date: new $.jqx.date(2016, 2, 1),
                width: 850,
                height: 600,
                source: source,
                view: 'weekView',
                showLegend: true,
                created: function (args) {
                   args.instance.ensureAppointmentVisible('id1');
                },
             
                appointmentDataFields:
                {
                    from: "start",
                    to: "end",
                    id: "id",
                    description: "description",
                    location: "place",
                    subject: "subject",
                    resourceId: "calendar"
                },
                views:
                [
                    'dayView',
                    'weekView',
                    'monthView'
                ]
            };
      



    }]);

/*angular.module('scheduler', [])
.controller('schedulerController', ['$scope', function ($scope) {
  $scope.tagline = 'To the moon and back!'
}])
*/
/*

var schedulerApp = angular.module('scheduler');

schedulerApp.controller('schedulerController', ['$scope',
  function($scope) {
console.log('am in controller1');

  	$scope.tagline = 'To the moon and back!'
}]);*/
