<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js oldie lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js oldie lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js oldie lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html class="no-js oldie ie9"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js loading"> <!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<title>Lens</title>

		<!-- //// META \\\\ -->
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0">
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />

		<!-- //// FAVICON \\\\ -->
		<link rel="shortcut icon" href="/favicon.ico">

		<!-- Generated CSS file -->
		<link href="css/styles.css" rel="stylesheet">

		</head>

		<body>

			<main class="main">
				<div class="main__header">
					<a href="#" class="btn">done</a>
				</div>
				<div class="main__content has-img">
					<div class="main__content__img">
						<img src="img/img01.jpg" alt="" />

						<span class="dot" style="top: 80%; left: 20%;" data-dot="1" data-cat="flag"></span>
						<span class="dot" style="top: 40%; left: 90%;" data-dot="2" data-cat="flag"></span>

						<!-- <span class="dot dot-details" style="top: 67%; left: 47%;" data-dot="3"></span> -->
					</div>

					<div class="main__content__img">
						<img src="img/img02.jpg" alt="" />

						<span class="dot" style="top: 67%; left: 20%;" data-dot="3" data-cat="medication"></span>
					</div>

					<div class="main__content__img">
						<img src="img/img03.jpg" alt="" />

						<span class="dot" style="top: 30%; left: 55%;" data-dot="5" data-cat="problem"></span>
						<span class="dot" style="top: 44%; left: 60%;" data-dot="6" data-cat="problem"></span>
						<span class="dot" style="top: 53%; left: 81%;" data-dot="4" data-cat="allergy"></span>
					</div>

					<div class="main__content__onboarding" data-cat="flag">
						<h2>Flag</h2>
						<p>Lens reads the patients existing medical<br />records, and flags any mention of severe conditions.</p>
					</div>

					<div class="main__content__onboarding" data-cat="medication">
						<h2>Medications</h2>
						<p>Lens can recognize medications that have not<br />been added to existing medical records.</p>
					</div>

					<div class="main__content__onboarding" data-cat="problem">
						<h2>Problem</h2>
						<p>Lens can recognize problems that are not included<br />in the existing medical records.</p>
					</div>

				</div>
			</main>

			<aside class="sidebar">
				<div class="undo">
					<lottie-player src="https://assets1.lottiefiles.com/packages/lf20_UVTMOm.json" style="width: 28px; height: 28px;" hover></lottie-player>
				</div>
				<div class="redo">
					<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_lvKnSG.json" style="width: 28px; height: 28px;" hover></lottie-player>
				</div>
				<h3>Outline</h3>
				<div class="sidebar__tabs">
					<a href="#" class="sidebar__tabs__item active">Review</a>
					<a href="#" class="sidebar__tabs__item">Done</a>
				</div>
				<div>
					<div class="sidebar__tab review active">
						<div class="sidebar__group">
							<span class="sidebar__group__title">Flag</span>
							<div class="sidebar__group__item" data-dot="1" data-cat="flag">
								<span class="sidebar__group__item__title">
									<span class="delete">
										<lottie-player style="width: 15px; height: 15px;" loop>
										</lottie-player>
									</span>Heart failure
									<span class="drop drop-action">
										<span class="drop__title">Action</span>
										<span class="drop__menu">
											<span class="drop__menu__item">Call</span>
											<span class="drop__menu__item">Message</span>
											<span class="drop__menu__item">Calendar</span>
										</span>
									</span>
								</span>
								<div class="sidebar__group__item__subcontent">
									<div class="sidebar__group__item__subcontent__footer">
										<a href="#" class="sidebar__group__item__subcontent__footer__link">Confirm</a>
									</div>
								</div>
							</div>
							<div class="sidebar__group__item" data-dot="2" data-cat="flag">
								<span class="sidebar__group__item__title">
									<span class="delete">
										<lottie-player style="width: 15px; height: 15px;" loop>
										</lottie-player>
									</span>Follow up
									<span class="drop drop-action">
										<span class="drop__title">Action</span>
										<span class="drop__menu">
											<span class="drop__menu__item">Call</span>
											<span class="drop__menu__item">Message</span>
											<span class="drop__menu__item">Calendar</span>
										</span>
									</span>
								</span>
								<div class="sidebar__group__item__subcontent">
									<div class="sidebar__group__item__subcontent__footer">
										<a href="#" class="sidebar__group__item__subcontent__footer__link">Confirm</a>
									</div>
								</div>
							</div>
						</div>
						<div class="sidebar__group">
							<span class="sidebar__group__title">Problem</span>
							<div class="sidebar__group__item" data-dot="5" data-cat="problem">
								<span class="sidebar__group__item__title">
									<span class="delete">
										<lottie-player style="width: 15px; height: 15px;" loop>
										</lottie-player>
									</span>Acid reflux
								</span>
								<div class="sidebar__group__item__subcontent">
									<div class="sidebar__group__item__subcontent__footer">
										<a href="#" class="sidebar__group__item__subcontent__footer__link">Confirm</a>
									</div>
								</div>
							</div>
							<div class="sidebar__group__item" data-dot="6" data-cat="problem">
								<span class="sidebar__group__item__title">
									<span class="delete">
										<lottie-player style="width: 15px; height: 15px;" loop>
										</lottie-player>
									</span>Sleep apnea
								</span>
								<div class="sidebar__group__item__subcontent">
									<div class="sidebar__group__item__subcontent__footer">
										<a href="#" class="sidebar__group__item__subcontent__footer__link">Confirm</a>
									</div>
								</div>
							</div>
						</div>
						<div class="sidebar__group">
							<span class="sidebar__group__title">Allergy</span>
							<div class="sidebar__group__item" data-dot="4" data-cat="allergy">
								<span class="sidebar__group__item__title">
									<span class="delete">
										<lottie-player style="width: 15px; height: 15px;" loop>
										</lottie-player>
									</span>Pencillins
								</span>
								<div class="sidebar__group__item__subcontent">
									<div class="sidebar__group__item__subcontent__footer">
										<a href="#" class="sidebar__group__item__subcontent__footer__link">Confirm</a>
									</div>
								</div>
							</div>
						</div>
						<div class="sidebar__group">
							<span class="sidebar__group__title">Medication</span>
							<div class="sidebar__group__item" data-dot="3" data-cat="medication">
								<span class="sidebar__group__item__title">
									<span class="delete">
										<lottie-player style="width: 15px; height: 15px;" loop>
										</lottie-player>
									</span>Aspirin
									<span class="drop drop-info">
										<span class="drop__title">More info</span>
										<span class="drop__menu">
											<span class="drop__menu__item">Dose<span>80MG</span></span>
											<span class="drop__menu__item">Dispense<span>30</span></span>
											<span class="drop__menu__item">Refill<span>1</span></span>
										</span>
									</span>
								</span>
								<div class="sidebar__group__item__subcontent">
									<div class="sidebar__group__item__subcontent__footer">
										<a href="#" class="sidebar__group__item__subcontent__footer__link">Confirm</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="sidebar__tab sidebar__tab__done">
						<div class="sidebar__group">
							<span class="sidebar__group__title">Done</span>
						</div>
					</div>
				</div>
			</aside>


			<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
			<script src="vendor/jquery/jquery.min.js"></script>
			<script src="js/index.js"></script>

		</body>
</html>
