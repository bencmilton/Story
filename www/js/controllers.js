angular.module('starter.controllers', [])

.controller('CreateCtrl', function($scope, Stories, Camera) {

    $scope.storyIsActive = false;

    //$scope.schedule = function () {
    //    console.log('scheduled!')
    //
    //};

    //$scope.startStory = function(){
    //    Stories.createStory().then(function(data) {
    //        console.log('Story has started.')
    //        console.log('data', data);
    //        $scope.storyIsActive = true;
    //    });
    //};

    $scope.endStory = function(){
        Stories.endStory().then(function(data) {
            console.log('Story has ended.')
            console.log('data', data);
            $scope.storyIsActive = false;
        });
    };

    $scope.takePhoto = function() {
        Camera.getPicture().then(function(imageURI) {
            console.log(imageURI);
        }, function(err) {
            console.err(err);
        });
    };

})

.controller('StoriesCtrl', function($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

//.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//  $scope.chat = Chats.get($stateParams.chatId);
//})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
