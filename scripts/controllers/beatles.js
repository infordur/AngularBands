'use strict';

/**
 * @ngdoc function
 * @name angularJsBandsApp.controller:BeatlesCtrl
 * @description
 * # BeatlesCtrl
 * Controller of the angularJsBandsApp
 */
angular.module('angularJsBandsApp')
	.controller('BeatlesCtrl', function ($scope) {

		$scope.data = {
			name: "The Beatles",
			img: "images/theBeatlesimg.jpg",
			imgalt: "The Beatles",
			description: "The Beatles fue una banda de pop/rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y críticamente aclamada en la historia de la música popular. Formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista). Enraizada en el skiffle y el rock and roll de los años cincuenta, la banda trabajó más tarde con distintos géneros musicales, que iban desde las baladas pop hasta el rock psicodélico, incorporando a menudo elementos clásicos, entre otros, de forma innovadora en sus canciones. La naturaleza de su enorme popularidad, que había emergido primeramente con la moda de la «Beatlemanía», se transformó al tiempo que sus composiciones se volvieron más sofisticadas. Llegaron a ser percibidos como la encarnación de los ideales progresistas, extendiendo su influencia en las revoluciones sociales y culturales de la década de 1960." 
		};

	});
