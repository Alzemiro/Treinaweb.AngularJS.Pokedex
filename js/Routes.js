angular.module('pokedexApp')
.config(['$routerProvider', function($routerProvider) {
    $routerProvider
        .when('/pokedex', {
            templateUrl: 'templates/PokeDexView.html',        
            controller: 'PokeDexController as vm'       
        })
        .otherwise({
            redirectTo: '/pokedex'
         
     })
}])