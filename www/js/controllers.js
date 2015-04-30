angular.module('starter.controllers', [])

.controller('CreateCtrl', function($scope, Stories) {

    $scope.storyIsActive = false;

    $scope.startStory = function(){
        Stories.createStory().then(function(data) {
            console.log('Story has started.')
            console.log('data', data);
            $scope.storyIsActive = true;
        });
    };

    $scope.endStory = function(){
        console.log('Story has ended.')
        $scope.storyIsActive = false;
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
