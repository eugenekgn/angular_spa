(()=> {
  "use strict";

  angular.module('cs.menu')
    .controller('csMenuItemController', csMenuItemController)
    .directive('csMenuItem', csMenuItem);

  function csMenuItemController() {
    var vm = this;
    vm.test = 'test';
  }

  function csMenuItem() {

    var link = function (scope, element, attrs, ctrl) {
      element.on('click', (event)=> {
        event.stopPropagation();
        event.preventDefault();

        scope.$apply(() => {
          ctrl.setActiveItem(element);
          ctrl.setRoute(scope.route);
        });

      });
    };

    return {
      require: '^csMenu', // needs csMenu element as a parent and it will have access to its parent
      scope: {
        label: '@',
        icon: '@',
        route: '@'
      },
      link: link,
      controller: 'csMenuItemController',
      controllerAs: 'csMenuItemController',
      templateUrl: 'js/csMenu/csMenuItem.template.html'
    }
  }
})();