$(function() {


	/* DELETE */
  let icon = document.querySelectorAll('.delete lottie-player');

  for (var i=0; i<icon.length; i++) {
  	var $this = icon[i];

  	$this.load("https://assets8.lottiefiles.com/packages/lf20_qRzFSu.json");
  }

  $('.delete').on('click', function(e) {

  	var $el = $(this).find('lottie-player')[0];
  	$(this).addClass('animate');
  	$el.play();

  	setTimeout(function() {
  		$(e.currentTarget).parents('.sidebar__group__item').removeClass('active').addClass('done');
  	}, 450);

  	setTimeout(function() {
  		$(e.currentTarget).parents('.sidebar__group__item').remove();

  		checkGroups();
  	}, 1000);
  });





  	// $this.addEventListener('click', function(e) {
	  // 	e.preventDefault();

	  // 	var $el = $(this)[0];
	  // 	$el.play();

	  // 	setTimeout(function() {
	  // 		console.log($(e.currentTarget));
	  // 		$(e.currentTarget).parents('.sidebar__group__item')[0].removeClass('active').addClass('done');
	  // 	}, 1000);
	  // });

  


	function handleClick(e) {
		$('.highlight').removeClass('active');
		$('.sidebar__group__item').removeClass('active');
		$('.dot').removeClass('active');

		var id = $(e.currentTarget).data('id');

		if(!id) {
			id = $(e.currentTarget).parent().data('id');
		}

		$('.highlight[data-id="' + id + '"]').addClass('active');
		$('.sidebar__group__item[data-id="' + id + '"]').addClass('active');

		if(!id) {
			id = $(e.currentTarget).data('dot');

			if(!id) {
				id = $(e.currentTarget).parent().data('dot');
				$('.main').animate({
	        scrollTop: $('.dot[data-dot="' + id + '"]').parent()[0].offsetTop
	    	}, 300);
			}

			$('.dot[data-dot="' + id + '"]').addClass('active');
			$('.sidebar__group__item[data-dot="' + id + '"]').addClass('active');
		}
	}

	$('.highlight').on('click', function(e) {
		handleClick(e);
	});

	$('.dot').on('click', function(e) {
		handleClick(e);
	});

	$('.sidebar__group__item__title').on('click', function(e) {
		handleClick(e);
	});

	function checkGroups() {
		$('.sidebar__group').each(function() {
			if($(this).find('.sidebar__group__item').length == 0) {
				$(this).find('.sidebar__group__title').fadeOut(200);
			} else {
				$(this).find('.sidebar__group__title').fadeIn(200);
			}
		});
	}

	$('body').on('click', '.sidebar__group__item__subcontent__footer__link', function(e) {
		e.preventDefault();

		$('.highlight').removeClass('active');
		$('.sidebar__group__item').removeClass('active');
		$('.dot').removeClass('active');

		var $el = $(this).parents('.sidebar__group__item');
		var $parent = $el.parents('.sidebar__tab');

		if($parent.hasClass('review')) {
			// var dot = $el.data('dot');
			// $('.dot[data-dot="' + dot + '"]').fadeOut(200);

			$el.addClass('done');

			setTimeout(function() {
				$(e.currentTarget).text('remove');
				$el.appendTo('.sidebar__tab__done .sidebar__group');

				$('.sidebar__tab__done .sidebar__group__item').removeClass('done');
				checkGroups();
			}, 300);
		} else {
			$el.addClass('done');

			setTimeout(function() {
				$(e.currentTarget).text('confirm');
				$el.appendTo($('.sidebar__tab.review .sidebar__group').last());

				$('.sidebar__tab.review .sidebar__group__item').removeClass('done');
		
				checkGroups();
			}, 300);
		}
	});



	// DROPDOWNS

	$('.drop').hover(function() {
		$(this).find('.drop__menu').addClass('active');
	}, function() {
		$(this).find('.drop__menu').removeClass('active');
	});

	$('.drop-info').hover(function() {
		var dotDetails = $(this).data('dotdetails');

		$('.dot[data-dot="' + dotDetails + '"]').addClass('active hover');
	}, function() {
		var dotDetails = $(this).data('dotdetails');

		$('.dot[data-dot="' + dotDetails + '"]').removeClass('active hover');
	});

	$('.sidebar__group__item').on('mouseleave', function() {
		if($(this).find('.drop__menu').length) {
			$(this).find('.drop__menu').removeClass('active');
		}
	});

	$('.drop-action .drop__menu__item').on('click', function() {
		$(this).parent().find('.drop__menu__item').removeClass('active');
		$(this).addClass('active');
	});


	// DOTS

	var dot;
	$('[data-dot]').hover(function() {
		dot = $(this).data('dot');
		$('[data-dot="' + dot + '"]').addClass('hover');
	}, function() {
		$('[data-dot="' + dot + '"]').removeClass('hover');
	});

	// ONBOARDING



	var dotFlagClicked = false,
			dotMedicationClicked = false,
			dotProblemClicked = false;

	$('[data-dot]').on('click', function() {

		var cat = $(this).data('cat');
		$('.main__content__onboarding').removeClass('active');
		$('.main__content__img').removeClass('onboarding');

		if(cat == 'flag' && !dotFlagClicked) {
			$('.main__content__img').addClass('onboarding');
			$('.main__content__onboarding[data-cat="' + cat + '"]').addClass('active');
			dotFlagClicked = true;
		}

		if(cat == 'medication' && !dotMedicationClicked) {
			$('.main__content__img').addClass('onboarding');
			$('.main__content__onboarding[data-cat="' + cat + '"]').addClass('active');
			dotMedicationClicked = true;
		}

		if(cat == 'problem' && !dotProblemClicked) {
			$('.main__content__img').addClass('onboarding');
			$('.main__content__onboarding[data-cat="' + cat + '"]').addClass('active');
			dotProblemClicked = true;
		}

		$('main').on('click', function() {
			$('.main__content__img').removeClass('onboarding');
			$('.main__content__onboarding').removeClass('active');
		});
	});

	$('.main__content__onboarding').on('click', function() {
		$('.main__content__img').removeClass('onboarding');
		$('.main__content__onboarding').removeClass('active');
	});



	// SIDEBAR TABS

	$('.sidebar__tabs__item').on('click', function(e) {
		e.preventDefault();

		$('.sidebar__tabs__item').removeClass('active');
		$(this).addClass('active');

		$('.sidebar__tab').removeClass('active');
		var i = $(this).index();

		$('.sidebar__tab').eq(i).addClass('active');
	});




});
