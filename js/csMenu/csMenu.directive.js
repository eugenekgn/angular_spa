(()=> {
  "use strict";

  angular.module('cs.menu')
    .controller('csMenuController', csMenuController)
    .directive('csMenu', csMenu);

  function csMenuController($rootScope) {
    var vm = this;

    vm.setActiveItem = (element) => {
      vm.activeElement = element;
    };

    vm.getActiveItem = () => {
      return vm.activeElement;
    };

    vm.setRoute = (route) => {
      //$emit up
      //$broadcast down
      $rootScope.$broadcast('cs-menu-item-selected-event', {
        route: route
      });
    }
  }

  function csMenu() {

    return {
      transclude: true,
      scope: {},
      link: function (scope, element, attrs, ctrl) {
        scope.isActive = function () {
          return element === ctrl.getActiveItem();
        }
      },
      controller: 'csMenuController',
      controllerAs: 'csMenuController',
      templateUrl: 'js/csMenu/csMenu.template.html'
    }
  }
})();