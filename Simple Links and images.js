/*
This script will create a simple IM Dashboard Widget with images and links to the following areas in Plutora:
 - Release Schedule
 - Environment Schedule
 - Impacted Systems Matrix
 
 Refer to the Plutora knowledge base on how to add a new widget. To implement this widget on your own site, following the instructions below 
*/

/* Copy this HTML text into the HTML section of the widget editor */

<div class="company-widget5 row" ng-controller="COMPANYWidget5">

  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="section">
      <img class="tool1" src="/Content/images/1px.png" />
      <div class="wrap">
        <div class="caption company-osw">Release Schedule</div>
        <div class="company-body">Veiw the full schedule of all releases</div>
        <button type="button" class="btn btn-danger pull-right registernow company-osw" ng-click="gotoRSheduler()">Go to Release Schedule</button>
      </div>
    </div>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="section">
      <img class="tool2" src="/Content/images/1px.png" />
      <div class="wrap">
        <div class="caption company-osw">Environment Schedule</div>
        <div class="company-body">View which environments are booked and when</div>
        <button type="button" class="btn btn-danger pull-right registernow company-osw" ng-click="gotoESheduler()">Go to Environment Schedule</button>
      </div>
    </div>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="section">
      <img class="tool3" src="/Content/images/1px.png" />
      <div class="wrap">
        <div class="caption company-osw">System Impact Matrix</div>
        <div class="company-body">View the impact of releases against systems</div>
        <button type="button" class="btn btn-danger pull-right registernow company-osw" ng-click="gotoImpactMatrix()">Go to System Impact Matrix</button>
      </div>
    </div>
  </div>
</div>



/* Copy this CSS text into the CSS section of the widget editor */

imdashboard .panel.panel-default.company-widget5-panel {
 font-family: 'Roboto', sans-serif;
 border-radius: 0;
 background-color: transparent;
 border-width: 0;
 box-shadow: none;
 overflow:visible;
}
imdashboard .company-widget5-panel .panel-heading {
 border-color: #064C7B;
 background-color: #064C7B;
 font-size: 16px;
 color: #fff;
 border-width: 0;
 margin-bottom: 0px;
 border-radius: none;
 height: 40px;
 line-height: 40px;
}
imdashboard .company-widget5-panel .panel-heading h4 {
 font-size: 18px;
 line-height: 32px;
 font-weight: normal;
}
imdashboard .company-widget5 .section {
 background-color: rgba(0,0,0,0.2);
 position: relative;
 height: 180px;
 overflow: hidden;
}
imdashboard .company-widget5 .section .wrap {
 position: absolute;
 width: 100%;
 height: 100%;
 left: 0;
 top: 0;
 overflow: hidden;
 color: #fff;
 padding: 10px 15px;
}
imdashboard .company-widget5 .caption {
 font-size: 18px;
 margin-top: 10px;
 margin-bottom: 15px;
 font-weight:bold;
}
imdashboard .company-widget5 .company-body {
 margin-bottom: 48px;
 font-weight:400;
}
imdashboard .company-widget5 .learnmore {
 border-radius: 2px;
 font-size: 12px;
 color: #fff;
 background-color: transparent;
}
imdashboard .company-widget5 .registernow {
 border-radius: 2px;
 border:none;
 font-weight:500;
 background-color: #9DC82D;
 color: #fff;
 font-size: 13px;
 position: absolute;
 right: 10px;
 bottom: 10px;
}
 
imdashboard .company-widget5 .registernow:hover {
 font-weight:500;
 background-color: #84AB1F;
 color: #fff;
}
imdashboard .company-widget5 img {
 width: 100%;
 opacity: .9;
 height: 100%;
 background: url("https://www.plutora.com/mailing/nab/1a.png") no-repeat center center;
 background-size: cover;
}
imdashboard .company-widget5 img.tool2 {
 background-image: url("https://www.plutora.com/mailing/nab/2a.png");
}
imdashboard .company-widget5 img.tool3 {
 background-image: url("https://www.plutora.com/mailing/nab/3a.png");
}



/* Copy this JS text into the JS section of the widget editor */

angular.module('plutora.core').controller('COMPANYWidget5',['$scope', '$rootScope', 'imdashboardService', function($scope, $rootScope, imdashboardService) {
 
 $('.company-widget5').closest('.panel').addClass('company-widget5-panel');
 
 
 $scope.gotoRSheduler = function() {
 navMenuItemClick('rSheduler');
 };
 $scope.gotoESheduler = function() {
 navMenuItemClick('eSheduler');
 };
 $scope.gotoImpactMatrix = function() {
 navMenuItemClick('impactMatrix');
 };
}]);