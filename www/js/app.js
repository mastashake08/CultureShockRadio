// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform, $cordovaNativeAudio, $rootScope, $http) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    // select the right Ad Id according to platform
    var admobid = {};
    if( /(android)/i.test(navigator.userAgent) ) { // for android & amazon-fireos
        admobid = {
            banner: 'ca-app-pub-7023023584987784/3437106151', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-7023023584987784/3936633751'
        };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
        admobid = {
            banner: 'ca-app-pub-7023023584987784/6890100150', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-7023023584987784/8366833355'
        };
    }

    if(AdMob) AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    autoShow: true,
    isTesting: false} );

    $cordovaNativeAudio
   .preloadComplex('music', 'http://fathomu.net:8000/stream', 1, 1)
   .then(function (msg) {
     console.log(msg);
   }, function (error) {
     console.error(error);
   });
   $cordovaNativeAudio.loop('music');
   $rootScope.trackTitle = '';
   $rootScope.url = 'http://90kradio.com:8000/json.xsl';
   $rootScope.getJson = function(){
     $http.get($rootScope.url).success(function(data){
      console.log(data);
   })};

   setTimeout(function(){$rootScope.getJson()},1000);

  });
})
.controller('HomeCtrl', function($http, $rootScope, setTimeout, $scope){

});


function switchStation(playStation, pauseStation, showTitle, hideTitle, playIcon, pauseIcon){
  var play = document.getElementById(playStation);
  if(!play.paused){
    play.pause();
  }
  else{
  play.load();
  play.play();
  play.ondblClick
  var pause = document.getElementById(pauseStation);
  pause.pause();
  document.getElementById(playIcon).className = "icon ion-play";
  document.getElementById(pauseIcon).className = "icon ion-pause";
  $(showTitle).show();
  $(hideTitle).hide(); return false;
}}
