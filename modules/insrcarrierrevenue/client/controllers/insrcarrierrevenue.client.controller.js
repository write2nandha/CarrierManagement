'use strict';

angular.module('insrcarrierrevenue').controller('InsrcarrierrevenueController', ['$scope', '$stateParams','$location', 'Authentication','InsrCarrierRevenue',
    function($scope, $stateParams, $location, Authentication, InsrCarrierRevenue) {

    	$scope.authentication = Authentication;

        $scope.months = [{name: 'January', value: 'Jan' },
                         {name: 'February', value: 'Feb' },
                         {name: 'March', value: 'Mar' }];

        $scope.selectedItem = $scope.months[0].value;

        $scope.onMonthChange = function(){
          getMonthwiseData();
            // var month = $scope.selectedItem;                     

            // InsrCarrierRevenue.query({monthId: month}).$promise.then(function (res) {                               
            //      $scope.RevenueDataForPieChart = res;                         
            // }, function(errorResponse){
            //     $scope.error = errorResponse.data.message;                
            // });      
        };

        $scope.quarters = [{name: 'Quarter 4', value: 'Jan,Feb,Mar' },
                         {name: 'Quarter 3', value: 'Oct,Nov,Dec' },
                         {name: 'Quarter 2', value: 'Jul,Aug,Sep' },
                         {name: 'Quarter 1', value: 'Apr,May,Jun' }];

        $scope.myQuarter = $scope.quarters[0].value;
               	
              

        // Find a list of Categories
        $scope.findMonthlyData = function() {        
            var carrierrevenue = InsrCarrierRevenue.query();
            $scope.insrcarrierrevenue = carrierrevenue;
        };

        function getMonthwiseData()
        {
            var month = $scope.selectedItem;    
            var total = 0;                

            InsrCarrierRevenue.query({monthId: month}).$promise.then(function (res) {                               
                 $scope.RevenueDataForPieChart = res;  
                 
                 for (var i = 0; i < res.length; i++) {
                          total = total + res[i].revenue;
                       }                  

                  $scope.monthlyData =  total + 'K USD';            
                       
            }, function(errorResponse){
                $scope.error = errorResponse.data.message;                
            });      
        }

        $scope.xFunction = function(){
            return function(d) {
            return d.program;
            };
        };

        var format = d3.format('.0f'); //remove decimal points
        $scope.yFunction = function(){
            return function(d) {
                return format(d.revenue);
            };
        };     

        $scope.toolTipContentFunction = function() {            
            return function(key, x, y, e, graph) {              
                return        '<h3>' + key + '</h3>' + 
                     '<p>' + format(x) + 'K USD' + '</p>';
            };
        };  

        $scope.toolTipContentFunctionforBar = function() {            
            return function(key, x, y, e, graph) {              
                return        '<h3>' + key + '</h3>' + 
                     '<p>' + format(y) + 'K USD' + '</p>';
            };
        };  

        function getInitialData()
        {
            InsrCarrierRevenue.query().$promise.then(
            function(res){               
              $scope.revenueDataHidden = res;
              getQuarterlyData();
              //alert('Inside getInitialData' + JSON.stringify($scope.revenueDataHidden));
            },
            function(err){
                alert(err);
            });

            getMonthwiseData();
        }
        
        function getQuarterlyData()
        {         
          $scope.revenueDataHidden.$promise.then(
            function(res){               
           
            var uniqueProgramNames = [];
              for(var i = 0; i< res.length; i++){
                  if(uniqueProgramNames.indexOf(res[i].program) === -1){
                      uniqueProgramNames.push(res[i].program);
                  }
            }
            var revenueDataforBarChartData = [];

              for(var index=0;index<uniqueProgramNames.length; index++){
                  revenueDataforBarChartData.push({key:uniqueProgramNames[index],
                                    values:[]});
              }
             
              var monthArray = $scope.myQuarter.split(',');              
              var quarterlydata = res.filter((row) => row.month === monthArray[0] || row.month === monthArray[1] || row.month === monthArray[2]);
             
              var totalRevenuebyQtr = 0;
              for(var i=0;i<uniqueProgramNames.length; i++){                

                 var programData = quarterlydata.filter((row) => row.program === uniqueProgramNames[i]);
                 
                 for (var j=0;j<programData.length;j++){                   
                   revenueDataforBarChartData[i].values.push([programData[j].month,programData[j].revenue]);
                   totalRevenuebyQtr = totalRevenuebyQtr + programData[j].revenue;
                 }
                }

                  $scope.quarterlyData =  totalRevenuebyQtr + 'K USD';                 
                $scope.revenueDataforBarChart = revenueDataforBarChartData;         
            },   
            function(err){
                alert(err);
        });

        }

        // Find a list of Categories
        $scope.find = function() {
            getInitialData();
            //alert('Inside find' + JSON.stringify($scope.revenueDataHidden));            
        };   

        
        $scope.onQuarterChange = function(){
            var quarter = $scope.myQuarter;       
            //alert(quarter);
          

            if(quarter === 'Jan,Feb,Mar'){
            $scope.months = [{name: 'January', value: 'Jan' },
                         {name: 'February', value: 'Feb' },
                         {name: 'March', value: 'Mar' }];
            }
            else if(quarter === 'Oct,Nov,Dec'){
            $scope.months = [{name: 'October', value: 'Oct' },
                         {name: 'November', value: 'Nov' },
                         {name: 'December', value: 'Dec' }];
            }
            if(quarter === 'Jul,Aug,Sep'){
            $scope.months = [{name: 'July', value: 'Jul' },
                         {name: 'August', value: 'Aug' },
                         {name: 'September', value: 'Sep' }];
            }
            if(quarter === 'Apr,May,Jun'){
            $scope.months = [{name: 'April', value: 'Apr' },
                         {name: 'May', value: 'May' },
                         {name: 'June', value: 'Jun' }];
            }
            
            getQuarterlyData();

            //To get the month-wise data on quarter change
            $scope.selectedItem = $scope.months[0].value;
            getMonthwiseData();
        };     

        // Create new carrier revenue data
        $scope.create = function() {
            // Create new carrier revenue object
            
            var insrCarrierRevenue = new InsrCarrierRevenue ({
                program: 'name',
                revenue: 55,
                currency: 'INR',
                displayRevenue: '55 INR',
                year:'2020',
                month:'ZFeb'
            });

            // Redirect after save
            insrCarrierRevenue.$save(function(response) {
                //$location.path('insrcarrier/' + response._id);

                // Clear form fields
                $scope.name = '';
                $scope.description = '';
                $scope.commission = '';
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

/*
        
         $scope.yAxisFormatFunction = function(){
               return function(d){
                       return d3.format('.0f')(d);
                    };
                  };*/

    }
]);
