(()=> {
  "use strict";

  angular.module('cs.framework')
    .controller('csFrameworkController', csFrameworkController)
    .directive('csFramework', csFramework);

  function csFrameworkController($scope) {
    var vm = this;

    $scope.$on('cs-menu-item-selected-event', (event, data) => {
      vm.routeString = data.route;
    });
  }

  function csFramework() {

    return {
      transclude: true,
      scope: {
        title: '@',
        subTitle: '@',
        iconFile: '@'
      },
      controller: 'csFrameworkController',
      controllerAs: 'csFrameworkController',
      templateUrl: 'js/csFramework/csFramework.template.html'
    }
  }
})();