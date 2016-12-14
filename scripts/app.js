'use strict';

/**
 * @ngdoc overview
 * @name angularJsBandsApp
 * @description
 * # angularJsBandsApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsBandsApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        title: 'Angular Rocks',
        description: 'Esto es la descripción por defecto',
        keywords: 'angular, rocks, default'
      })
      .when('/foo', {
        templateUrl: 'views/foo.html',
      })
      .when('/bar', {
        templateUrl: 'views/bar.html',
      })
      .when('/the-rolling-stones', {
        templateUrl: 'views/rollingstones.html',
        controller: 'RollingStonesCtrl',
        title: 'The Rolling Stones',
        description: 'The Rolling Stones es una banda británica de rock originaria de Londres. La banda se fundó en abril de 1962 por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Ian Stewart y Charlie Watts.2 Brian Jones fue despedido en junio de 1969, falleciendo tres semanas después, siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975 y sería a su vez reemplazado por Ron Wood. Con el retiro de Bill Wyman en 1993 se incluyó al bajista Darryl Jones que, aunque toca con la banda desde la grabación del álbum Voodoo Lounge en 1994, no es un miembro oficial.',
        keywords: 'The Rolling Stones, rock, 1962'
      })
      .when('/the-beatles', {
        templateUrl: 'views/beatles.html',
        controller: 'BeatlesCtrl',
        title: 'The Beatles',
        description: 'The Beatles fue una banda de pop/rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y críticamente aclamada en la historia de la música popular.1 2 3 4 5 Formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista). Enraizada en el skiffle y el rock and roll de los años cincuenta, la banda trabajó más tarde con distintos géneros musicales, que iban desde las baladas pop hasta el rock psicodélico, incorporando a menudo elementos clásicos, entre otros, de forma innovadora en sus canciones. La naturaleza de su enorme popularidad, que había emergido primeramente con la moda de la «Beatlemanía», se transformó al tiempo que sus composiciones se volvieron más sofisticadas. Llegaron a ser percibidos como la encarnación de los ideales progresistas, extendiendo su influencia en las revoluciones sociales y culturales de la década de 1960.',
        keywords: 'The Beatles, rock, 1962'
      })
      .when('/queen', {
        templateUrl: 'views/queen.html',
        controller: 'QueenCtrl',
        title: 'Queen',
        description: 'Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Freddie Mercury, fallecido en 1991, y John Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa.',
        keywords: 'Queen, rock, 1970, God save the Queen'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
    .run(function($rootScope, $route) {
        $rootScope.$on('$routeChangeSuccess', function(event, current, previous){
            $rootScope.pageTitle = $route.current.title;
            $rootScope.pageDescription = $route.current.description;
            $rootScope.pageKeywords = $route.current.keywords;
        });       
    });
