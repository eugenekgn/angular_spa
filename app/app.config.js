/**
 * Created by Eugene on 1/3/16.
 */
(()=> {
  "use strict";

  var app = angular.module('app');

  app.config(($provide)=> {
    $provide.decorator('$exceptionHandler', ["$delegate", function ($delegate) {
      return (exception, cause) => {
        $delegate(exception, cause);
        console.log(exception.message);
      }
    }]);
  })
});