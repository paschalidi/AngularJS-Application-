(function() {
    'use strict';
    angular
        .module('myApp')
        .controller('appController', function($scope, classifiersFactory, $mdSidenav, $mdDialog,
                                              toastr
        ) {
            classifiersFactory.get().then(function(classifieds) {
                $scope.classifieds = classifieds.data;
                $scope.categories = _.uniq(getCategories($scope.classifieds));
                console.log($scope.categories)
            });
            var contact = {
                name: "Christos Paschalidis", phone: "697566465", email: "paschalidi@factor-e.eu"
            };

            $scope.openSidebar = function() {
                $mdSidenav('left').open();
            };

            $scope.closeSidenav = function() {
                $mdSidenav('left').close();
            };

            $scope.saveClassified = function(classified) {
                classified.contact = contact;
                $scope.classifieds.push(classified);
                $scope.classified = {};
                $scope.closeSidenav();
                $scope.showToast(success, 'Added Succesfully');

            };

            $scope.deleteClassified = function(classified, event) {
                var index = $scope.classifieds.indexOf(classified);
                var confirm = $mdDialog.confirm()
                                       .title('Are you sure to delete ' + classified.title + "?")
                                       .textContent('Record will be deleted permanently.')
                                       .targetEvent(event)
                                       .ok('Yes')
                                       .cancel('No');

                $mdDialog.show(confirm).then(function() {
                    $scope.showToast('Deleted Succesfully')
                    $scope.classifieds.splice(index, 1)
                })
            };

            $scope.saveEdit = function(classified) {
                $scope.editting = false;
                $scope.classified = {};
                $scope.closeSidenav();
                $scope.showToast('Edited Succesfully')
            };

            $scope.editClassified = function(classified) {
                $scope.editting = true;
                $scope.openSidebar();
                $scope.classified = classified;
            };

            $scope.clearFilter = function(classified) {
                $scope.editting = true;
                $scope.openSidebar();
                $scope.classified = classified;
            };

            function getCategories(classifieds) {
                return classifieds.reduce(function(array, classified) {
                    return array.concat(classified.categories)
                }, []);
            };

            function showToast(msg) {
                toastr.success(msg, {
                    timeOut: 3000, progressBar: true
                });
            }

        })
})();
