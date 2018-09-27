/*
This script will create a useful series of widgets for the next 8 Enterpise releases and show the following information :
 - List each phase along with Start and End Dates
 - The Go Live Date
 - The list of Features associated to the Enterprise release and all releases within the release manifest via the 'Features' button
 
 Refer to the Plutora knowledge base on how to add a new widget. To implement this widget on your own site, following the instructions below 
*/

/* 
Copy this HTML text into the HTML section of the widget editor 

Replase the <<INSERT SUB DOMAIN HERE>> text with your own subdomain

*/

<div class="company-carousel" ng-controller="COMPANYWidgetCarousel">
  <div class="carousel slide media-carousel" id="media">
    <div class="carousel-inner">
      <div class="item" ng-repeat="oReleaseGrp in model.generalDatasource['e-releases'] track by $index" ng-class="{ active: $index == 0 }">
        <div class="row">
          <div class="col-md-3" ng-repeat="oRelease in oReleaseGrp track by $index">
            <div ng-if="oRelease['ID']" class="section">
              <a href="<<INSERT SUB DOMAIN HERE>>.plutora.com/?release={{oRelease['ID']}}" target="blank"><h5 class="btn btn-default learnmore company-osw">{{oRelease['Name']}}</h5></a>
              <br />
              <p>UAT Start<span class="pull-right">{{oRelease['sitStart']}}</span></p>
              <p>UAT End<span class="pull-right">{{oRelease['sitEnd']}}</span></p>
              
        <p><strong>Go Live</strong> <strong class="pull-right text-bold" ng-bind="UtcToLocalTime(oRelease['ImplementationDate'])"></strong></p>
        <button type="button" class="btn btn-default manifest-scope" ng-click="displayChanges(oRelease['Identifier'], oRelease['Name'])"> <!--<span style="font-size:15px;" class="glyphicon glyphicon-star"> </span>--> Features</button> 
        <!-- <button type="button" class="btn btn-default manifest-scope" ng-click="displayDefects()"> <span style="font-size:15px;" class="glyphicon glyphicon-wrench"> </span> Defects</button> -->
      </div>
      </div>
        </div>
      </div>
    </div>
    <a data-slide="prev" href="#media" class="left carousel-control">‹</a>
   <a data-slide="next" href="#media" class="right carousel-control">›</a>
  </div>
</div>



/* Copy this CSS text into the CSS section of the widget editor */

.manifest-scope {
  background-color:#3EB1DC!important;
  color:white;
  margin:5px 5px 5px -2px;
  font-size:12px!important;
  border:none;
  font-weight:bold;
  border-radius:2px!important;
  padding:6px 10px!important;
}
.manifest-scope:hover {
  background-color:#318db0!important;
  border:none;
  color:#fff;
  font-weight:bold;
}
.row-id {
  width:5%!important;
}
.row-name {
  width:55%!important;
}
.row-org {
  width:17%!important;
}
.row-status {
  width:10%!important;
}
.row-priority {
  width:13%!important;
}
imdashboard .panel.panel-default.company-carousel-panel {
  font-family: 'Roboto', sans-serif;
  border-radius: 0;
  background-color: transparent;
  border-width: 0;
  box-shadow: none;
  overflow: visible;
}
imdashboard .company-carousel-panel .panel-heading {
  border-color: #064C7B;
  background-color: #064C7B;
  font-size: 16px;
  color: #fff;
  border-width: 0;
  margin-bottom: 10px;
  border-radius: none;
  height: 40px;
  line-height: 40px;
}
imdashboard .company-carousel-panel .panel-body {
  padding: 0;
}
imdashboard .company-carousel-panel .panel-heading h4 {
  font-size: 17px;
  line-height: 32px;
  font-family: 'Roboto',sans-serif;
  font-weight: normal;
}
imdashboard .company-carousel .carousel .item .section {
  box-shadow: 1px 1px 5px rgba(0,0,0,.5);
  -webkit-box-shadow: 1px 1px 5px rgba(0,0,0,.5);
  -moz-box-shadow: 1px 1px 5px rgba(0,0,0,.5);
  background-color: #fff;
  padding: 10px 25px;
}
imdashboard .company-carousel .section h5 {
  font-size: 17px;
  margin-top: 0px;
  margin-bottom: 15px;
  font-weight: bold;
}
imdashboard .company-carousel .section p {
  margin: 0 0 8px 0;
  font-size: 13px;
}
imdashboard .company-carousel .section p a {
  color:#064C7B;
  text-decoration:underline;
}
imdashboard .company-carousel .section p a:hover {
  text-decoration:none;
}
imdashboard .company-carousel .section p img {
  width: 20px;
  display: inline-block;
  margin-right: 12px;
  vertical-align: bottom;
}
imdashboard .company-carousel .media-carousel {
  padding: 0 19px;
}
imdashboard .company-carousel .media-carousel .carousel-inner {
  overflow: visible;
}
imdashboard .company-carousel .media-carousel .carousel-control.left {
  left: -5px;
  background-image: none;
  background: none repeat scroll 0 0 #000;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  margin-top: 80px;
  opacity: 0.7;
  text-decoration: none;
  line-height: 20px;
  font-size: 30px;
}
imdashboard .company-carousel .media-carousel .carousel-control.right {
  right: -5px;
  background-image: none;
  background: none repeat scroll 0 0 #000;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  margin-top: 80px;
  opacity: 0.7;
  text-decoration: none;
  line-height: 20px;
  font-size: 30px;
}
imdashboard .company-carousel .carousel .item .col-md-3 {
  padding-left: 5px;
  padding-right: 5px;
}
imdashboard .company-carousel .learnmore {
  color:#064C7B;
  border:none;
  font-size: 12px;
  margin-bottom:5px;
  margin-left:-12px;
  text-decoration:underline;
}
imdashboard .company-carousel .learnmore:hover {
  background-color:white;
  color:#03263d;
  border:none;
  text-decoration:underline;
}
}
p a.defects{
  color:#064C7B;
  border:none;
  font-size: 22px!important;
  text-decoration:none;
  margin-bottom:0px;
  padding-right:0;
}
p a.defects:hover {
  color:#064C7B;
  background-color:white;
  border:none;
  text-decoration:underline;
}
imdashboard .company-carousel .registernow {
  border-radius: 2px;
  border:none;
  font-weight:500;
  background-color: #9DC82D;
  color: #fff;
  font-size: 13px;
}
imdashboard .company-carousel .registernow:hover {
  font-weight:500;
  background-color: #84AB1F;
  color: #fff;
}
imdashboard .company-carousel .phases-list .truncate{
	width: 115px;
}
.company-release-info {
  width: 80%;
}
.company-release-info .modal-content {
  border-radius: 0;
}
.company-release-info .modal-header {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #000;
  font-size: 21px;
}
.company-release-info .row {
  float: none;
}
.company-release-info .features th {
  font-size:13px;
  background-color:#3EB1DC;
  color: #fff;
  border-top-width: 0;
}
.company-release-info .features td {
  font-size:12px;
}
.company-release-info tr td .glyphicon {
  margin-left: 2px;
  margin-right: 5px;
}
.company-release-info .modal-footer .btn-sm {
  float: right !important;
}
.num-features {
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight:normal;
  padding-top:5px;
}
.num-features a{
  color:#064C7B;
  text-decoration:none;
}
.num-features a:hover{
  text-decoration:underline;
}
.phases-list {
    font-size: 12px;
    width: 100%;
}
.phases-list tr td:first-child div {
    display: block;
    width: 200px;
    margin-right: 15px;
}
.phases-list tr td:nth-child(2) div {
    margin-right: 10px;
}



/* Copy this JS text into the JS section of the widget editor */

angular.module('plutora.core').controller('COMPANYWidgetCarousel', ['$scope', '$rootScope', 'imdashboardService', function($scope, $rootScope, imdashboardService) {
  $('.company-carousel').closest('.panel').addClass('company-carousel-panel');
  $('#media').carousel({
    pause: true,
    interval: false,
  });
  $scope.UtcToLocalTime = function(time) {
    return moment.utc(time) /*.local()*/ .format('D MMM YYYY');
  };
  $scope.isBeforeNowTime = function(time) {
    return moment.utc(time).isBefore();
  };
  $scope.isAfterNowTime = function(time) {
    return moment.utc(time).isAfter();
  };
  $scope.displayReleaseManifest = function() {
    var controller = PlutoraApp.getApplication().getController("PlutoraApp.controller.changes.changesController");
    controller.addChangeButtonClick();
  };

  //changes start

  $scope.displayChanges = function(releaseIdentifier, releaseTitle) {
    loadingIndicator(1);

    function sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
          break;
        }
      }
    }
    var urlChanges = '/Changes/GetChangesBy?' + 'page=1' + '&start=0' + '&limit=70' + '&sort=ChangeID&dir=ASC' + '&filter=%5B%7B%22property%22%3A%22ChangeMainGridFilter%22%2C%22value%22%3A%22All%22%7D%5D' + '&_dc=' + Date.now();
    var urlChangeFilter = '/QuerysBuilder/ApplyFilter';
    var urlQueryFilter = '/QuerysBuilder/ClearActiveFilter';

    $.post(urlQueryFilter, "parameters=Change"),
      function() {};
    $.post(urlChangeFilter, "parameters%5B0%5D%5BconfigurationName%5D=Change&parameters%5B0%5D%5BqbOperand%5D=&parameters%5B0%5D%5BgridOperand%5D%5BColumnName%5D=Release.Parent.Identifier&parameters%5B0%5D%5BgridOperand%5D%5BConcreteType%5D=String&parameters%5B0%5D%5BgridOperand%5D%5BOperator%5D=6&parameters%5B0%5D%5BgridOperand%5D%5BType%5D=System.String&parameters%5B0%5D%5BgridOperand%5D%5BValue%5D=" + releaseIdentifier),
      function() {};

    sleep(500);
    $.get(urlChanges, function(changeData, changesSuccess) {
      if (changesSuccess) {

        var changes = '';
        changeData.data.Data.forEach(function(change) {
          changes += '<tr><td><a href="/?change=' + change.ID + '">' + change.ChangeID + '</a></td>' + '<td>' + change.ChangeName + '</td>' + '<td>' + change.Organization + '</td>' + '<td>' + change.Status + '</td>' + '<td>' + change.Priority + '</td></tr>';
        });

        var changesTable = '<div><table class="features table table-responsive table-condensed"><tr><th class="row-id">ID</th><th class="row-name">NAME</th><th class="row-org">ORGANIZATION</th><th class="row-status">STATUS</th><th class="row-priority">PRIORITY</th></tr> <tr></tr>' + changes + '</table></div>';
        displayModalWindow("Features in scope of " + releaseTitle, '<div>' + changesTable + '</div>', '', 'company-release-info');
        loadingIndicator(0);
      } else {
        highlight('Server error - can not retrieve changes');
        loadingIndicator(0);
      }
    });

    sleep(500);

    $.post(urlChangeFilter, "parameters%5B0%5D%5BconfigurationName%5D=Change&parameters%5B0%5D%5BqbOperand%5D=&parameters%5B0%5D%5BgridOperand%5D="),
      function() {};
  }


  //changes end

  $scope.displayReleaseDetails = function(id, releaseTitle) {
    loadingIndicator(1);
    var urlPhases = '/Releases/GetReleaseWorkItemsForActivity?releaseID=' + id + '&workItemType=1';
    var urlGates = '/Releases/GetReleaseWorkItemsForActivity?releaseID=' + id + '&workItemType=2';
    $.get(urlPhases, function(phasesData, phasesSuccess) {
      if (phasesSuccess) {
        var phases = '';
        phasesData.data.forEach(function(phase) {
          phases += '<tr><td>' + phase.Name + '</td><td>' + $scope.UtcToLocalTime(phase.StartDate) + '</td><td>' + $scope.UtcToLocalTime(phase.EndDate) + '</td></tr>';

        });
        var phasesTable = '<div class="col-md-6 col-sm-12 col-xs-12"><table class="table table-responsive table-condensed"><tr><th>NAME</th><th>START</th><th>END</th></tr><tr class="phases"><td colspan="3"><span class="glyphicon glyphicon-align-left"></span> PHASES</td></tr>' + phases + '</table></div>';
        $.get(urlGates, function(gatesData, gatesSuccess) {
          if (gatesSuccess) {
            var gates = '';
            gatesData.data.forEach(function(phase) {
              gates += '<tr><td>' + phase.Name + '</td><td>' + $scope.UtcToLocalTime(phase.StartDate) + '</td><td>' + $scope.UtcToLocalTime(phase.EndDate) + '</td></tr>';
            });
            var gatesTable = '<div class="col-md-6 col-sm-12 col-xs-12"><table class="table table-responsive table-condensed"><tr><th>NAME</th><th>START</th><th>END</th></tr><tr class="gates"><td colspan="3"><span class="glyphicon glyphicon-bell"></span> GATES</td></tr>' + gates + '</table></div>';
            displayModalWindow(releaseTitle, '<div class="row company-osw">' + phasesTable + gatesTable + '</div>', '', 'company-release-info');
            loadingIndicator(0);
          } else {
            highlight('Server error - can not retrieve release gates');
            loadingIndicator(0);
          }
        });
      } else {
        highlight('Server error - can not retrieve release phases');
        loadingIndicator(0);
      }
    });
  };


  $scope.updateDatasourceValue = function(data, type) {
    // only future releases
    data = data.filter(item => $scope.isAfterNowTime(item['ImplementationDate']));
    // sort by date
    data.sort(function(a, b) {
      //return new Date(b['ImplementationDate']) - new Date(a['ImplementationDate']); // ASC
      return new Date(a['ImplementationDate']) - new Date(b['ImplementationDate']); // DESC
    });
    // limit to 8
    data = data.slice(0, 8);
    // combine three
    var newArray = [];
    while (data.length) {
      newArray.push([data.shift(), data.shift(), data.shift(), data.shift()]);
    }
    $scope.model.generalDatasource[type] = newArray;
  };
  $scope.getEnterpriseReleases = function(widgetId, type, loadingTo) {
    var bLoading = (typeof loadingTo !== 'undefined');
    if (bLoading) {
      loadingIndicator(1);
    }
    var url = '/Releases/GetCompanyReleases';
    $.post(url, {
      isEnterprise: true,
      releaseName: '',
      IsFirstLoad: false,
      filterGrid: 'All'
    }, function(data, success) {
      if (success) {
        $scope.updateDatasourceValue(data.data.Root.children, type);

        $scope.model.generalDatasource['c-releases'].forEach(function(releaseGrp) {
          if (releaseGrp) {
            releaseGrp.forEach(function(release) {
              if (release) {
                var urlPhases = '/Releases/GetReleaseWorkItemsForActivity?releaseID=' + release.ID + '&workItemType=1';
                var urlGates = '/Releases/GetReleaseWorkItemsForActivity?releaseID=' + id + '&workItemType=2';
                $.get(urlPhases, function(phasesData, phasesSuccess) {
                  if (phasesSuccess) {
                    release._phases = phasesData.data;
                    $scope.$apply();
                  }
                });
              }
            });
          }
        });
        if (bLoading) {
          loadingIndicator(0);
          $(loadingTo).children().fadeIn(1000);
        }
      } else {
        highlight('Server error');
      }
    });


  };
  var widgetId = $('.company-carousel').parent().attr('widget-id');
  $scope.getEnterpriseReleases(widgetId, 'c-releases', '.company-carousel');
}]);