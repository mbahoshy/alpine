				$(window).on('resize', function () {
					var width = $(window).width();
					if (width < 800) {
						$('.one-third, .two-third, .callbox, .fb-button').addClass('full');
						$('.logo').addClass('logo-shrink');
						$('.about-pic').addClass('img-full');
						// $('.bottom-nav').addClass('list-item');
					}

					if (width >= 800) {
						$('.one-third, .two-third, .callbox, .fb-button').removeClass('full');
						$('.logo').removeClass('logo-shrink');
						$('.about-pic').removeClass('img-full');

						// $('.third').removeClass('full');
						// $('.bottom-nav').removeClass('list-item');
					}
				});

				$(document).on('ready', function () {
					$(window).trigger('resize');

				});
