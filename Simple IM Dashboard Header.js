/*
This script will create a simple IM Dashboard header with a large image and the following Links:
 - Release Schedule
 - Create new Release
 - Create new TEBR
 - Create new Change
 
 Refer to the Plutora knowledge base on how to add a new widget. To implement this widget on your own site, following the instructions below 
*/

/* Copy this HTML text into the HTML section of the widget editor */

<link href="https://fonts.googleapis.com/css?family=Oswald:400" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet">
<div class="company-promo" ng-controller="companyWidgetPromo">
  <h3 class="company-osw">Plutora <span style="color:#3EB1DC">Release Portal</span></h3>
  <div class="strap-black company-osw">Let's get started</div>
<!-- list links to any url you'd like -->  
  <div class="strap-white company-osw"><a href="https://development-ruby.plutora.co/#releaseschedule" target='blank'>Release Schedule<i class="pull-right glyphicon glyphicon-menu-right"></i></a></div>
  <div class="clear"></div>
  <div class="strap-white company-osw"><a ng-click="displayNewReleaseModal()">Create a New Release<i class="pull-right glyphicon glyphicon-menu-right"></i></a></div>
  <div class="clear"></div>
  <div class="strap-white company-osw"><a ng-click="displayNewTebrModal()">Create a New TEBR<i class="pull-right glyphicon glyphicon-menu-right"></i></a></div>
  <div class="clear"></div>
<!-- this opens a new change window -->
  <div class="strap-white company-osw"><a ng-click="displayNewChangesModal()">Create a New Change<i class="pull-right glyphicon glyphicon-menu-right"></i></a></div>
  <div class="clear"></div>
</div>



/* Copy this CSS text into the CSS section of the widget editor */

/*de-gridster styles*/
@media (max-width: 100px) {
imdashboard .gridster-item {
height: auto !important;
position: relative !important;
float: none !important;
display: block !important;
top: inherit !important;
left: inherit !important;
margin: 0 auto !important;
}
}
imdashboard .company-osw, .company-osw {
font-family: 'Roboto' sans-serif;
}
imdashboard .company-promo-panel {
font-family: 'Roboto' sans-serif;
background-color: #888;
border-color: #888;
/*Customize your background image here*/
background: transparent url("https://help.plutora.com/wp-content/uploads/2018/03/internal_bg.jpg") no-repeat center;
background-size: cover;
}
imdashboard .company-promo-panel .panel-heading {
border-color: transparent;
}
imdashboard .company-promo-panel .panel-heading h2 {
color: #fff;
}
imdashboard .company-promo-panel .panel-heading h4 {
display: none;
}
imdashboard .company-promo {
padding: 5px 70px 10px 59px;
}
imdashboard .company-promo img {
width: 300px;
margin-left: -8px;
}
imdashboard .company-promo h3 {
font-size: 40px;
font-weight: 600;
letter-spacing:1px;
height: 130px;
line-height: 100px;
padding-right: 21px;
margin-top:-20px;
color: #fff;
width: fit-content;
}
imdashboard .company-promo .strap-black {
font-size: 10px;
text-transform: uppercase;
font-weight:bold;
height: 34px;
line-height: 35px;
padding-right: 20px;
padding-left: 12px;
color: #fff;
width: fit-content;
margin-top: -40px;
margin-bottom:-10px;
}
imdashboard .company-promo .strap-white {
font-family:'Roboto',sans-serif;
font-size: 13px;
font-weight:bold;
height: 35px;
line-height: 35px;
color: #343F47;
background-color: #F3F4F5;
margin-top:5px;
margin-left:10px;
display: inline-block;
vertical-align: middle;
cursor: pointer;
box-shadow:0 5px 10px rgba(0,0,0,0.2);
-moz-box-shadow:0 5px 10px rgba(0,0,0,0.2);
-webkit-box-shadow:0 5px 10px rgba(0,0,0,0.2);
}
imdashboard .company-promo .strap-white a {
color: inherit;
text-decoration: inherit;
display: block;
padding-left: 15px;
}
imdashboard .company-promo .strap-white a:hover {
color:#9DC23C;
-webkit-transition: color 0.15s ease-in-out;
-moz-transition: color 0.15s ease-in-out;
-o-transition: color 0.15s ease-in-out;
transition: color 0.15s ease-in-out;
}
imdashboard .company-promo .strap-white i {
vertical-align: middle;
line-height: 35px;
margin-left: 35px;
margin-right: 15px;
color: #9DC72D;
}



/* Copy this JS text into the JS section of the widget editor */

angular.module('plutora.core').controller('companyWidgetPromo',['$scope', '$rootScope', 'imdashboardService', function($scope, $rootScope, imdashboardService) {

$('.company-promo').closest('.panel').addClass('company-promo-panel');

$scope.displayNewReleaseModal = function() {
var controller = PlutoraApp.getApplication().getController("PlutoraApp.controller.releases.releasesController");
controller.addNewEnterpriseRelease();
};
$scope.displayNewTebrModal = function() {
var controller = PlutoraApp.getApplication().getController("PlutoraApp.controller.requests.bookingRequestController");
controller.newBookingRequest();
};
$scope.displayNewChangesModal = function() {
var controller = PlutoraApp.getApplication().getController("PlutoraApp.controller.changes.changesController");
controller.addChangeButtonClick();
};

}]);