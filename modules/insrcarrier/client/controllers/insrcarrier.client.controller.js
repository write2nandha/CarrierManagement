'use strict';

angular.module('insrcarrier').controller('InsrcarrierController', ['$scope', '$stateParams','$location', 'Authentication','Insrcarrier',
    function($scope, $stateParams, $location, Authentication, Insrcarrier) {

    	$scope.authentication = Authentication;
    	//$scope.company = $scope.company[0];

        // Create new Category
        $scope.create = function() {
            // Create new Category object
            var carrier = new Insrcarrier ({
                name: this.name,
                description: this.description,
                company: this.company,
                commission: this.commission
            });

            // Redirect after save
            carrier.$save(function(response) {
                $location.path('insrcarrier/' + response._id);

                // Clear form fields
                $scope.name = '';
                $scope.description = '';
                $scope.commission = '';
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };


        //Update an existing category
        $scope.update = function(){
            var carrier = $scope.carrier;
            
            carrier.$update(function(){
                $location.path('insrcarrier/' + carrier._id);
            }, function(errorResponse){
                $scope.error = errorResponse.data.message;
                //console.log($scope.error);
            });
        };
        

        //Remove an existing category
        $scope.remove = function(carrier){
            if( carrier ){
                carrier.$remove();

                for (var i in $scope.insrcarrier) {
                    if($scope.insrcarrier[i] === carrier){
                        $scope.insrcarrier.splice(i, 1); //removing the item
                    }
                }
            }
            else{
                $scope.carrier.$remove(function(){
                    $location.path('insrcarrier');
                });
            }            
        };


        //Find an existing category
        $scope.findOne = function(){
			$scope.carrier = Insrcarrier.get({
                insrcarrierId: $stateParams.insrcarrierId
            });    	
        };
        

        // Find a list of Categories
        $scope.find = function() {
            $scope.insrcarrier = Insrcarrier.query();
        };

        //D3 chart sample
        $scope.exampleData = [
            { key: 'One', y: 5 },
            { key: 'Two', y: 2 },
            { key: 'Three', y: 9 },
            { key: 'Four', y: 7 },
            { key: 'Five', y: 4 },
            { key: 'Six', y: 3 },
            { key: 'Seven', y: 9 }
        ];
        

        var colorArray = ['#000000', '#660000', '#CC0000', '#FF6666', '#FF3333', '#FF6666', '#FFE6E6'];
        $scope.colorFunction = function() {
            return function(d, i) {
                return colorArray[i];
            };
        };
        
    }
]);