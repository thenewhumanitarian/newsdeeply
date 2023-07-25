document.body.style.display = 'none'

// Checking if .banner exists
if (document.querySelector('.banner') === null) {
	// Your code here
	var css = `
	body {
		min-height: 100vh;
		display: none;
	}

	header.sitenav.full .learn-more-container p {
		color: black;
	}
	
	header.sitenav.full .learn-more-container p a {
		display: none;
	}
	
	header.sitenav.mini { position: relative !important; }
	
	body.page h1 { margin: 2rem auto; }

	.banner {
   	position: relative;
		width: 100%;
		background-color: #9f3e52;
		height: 80px;
		padding: 23px 28px;
		text-align: center;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		justify-content: space-between;
	}

	.bottom-banner-container.open-banner { display: none ! important; }
	
	@media only screen and (max-width: 61.25em) {
		.banner {
			height: 60px;
			padding: 23px 15px;
		}
	}
	
	.footer-nav {
		padding: 0 !important;
		margin-top: 5rem;
	}
	
	.landing-page .footer-nav {
		margin-top: 0 !important';
	}

	.banner-logo {
		position: absolute;
		top: 8px;
		right: 0;
		bottom: 0;
		left: 0;
		display: inline-block;
		width: 160px;
		height: 43.3px;
		text-indent: -999rem;
		text-decoration: none;
		overflow: hidden;
		margin: auto;
	}
	
	@media only screen and (max-width: 61.25em) {
		.banner-logo {
			width: 135px;
			height: 40px;
			padding-top: 3px;
		}
	} 

	svg {
		display: block;
	}

	.banner-tagline {
    font-family: gt sectra bold, serif;
    font-weight: 800;
    font-size: 16px;
		color: #FFF;
	}

	.banner-button {
		display: inline-block;
		padding: 10px 15px;
		color: #fff;
		background-color: #9f3e52;
		font-weight: 600;
		font-size: 16px;
		text-align: center;
		line-height: 1.2;
		text-decoration: none;
		outline: 0;
		border: 0;
		cursor: pointer;
	}

	.banner-button__subscribe {
		padding: .6rem 1rem;
		background-color: #b66c7b;
		font-size: 14px;
		color: #FFF !important;
		font-family: roboto,sans-serif;
	}

	.banner-button__readmore {
		display: none;
	}

	.content-wrap {
		border-left: 6px solid #9f3e52;
	}

	.banner-notice {
		display: none;
		color: #FFF;
		font-size: 1.5rem;
		background-color: #282828;
		border-left: 6px solid #9f3e52;
		padding: 5px;
		text-align: center;
		font-family: 'Roboto', sans-serif;
	}

	.banner-notice a {
		color: #FFF;
		font-weight: 800;
	}
	
	h1.headline {
		clear: both;
	}
	
	.our-platforms {
		background: rgba(230,230,230,.5);
		padding-top: 60px;
		padding-bottom: 40px;
	}
	
	@media only screen and (max-width: 61.25em) {
		.our-platforms {
			padding-top: 30px !important;
			padding-bottom: 20px;
		}
	}
	
	.intro-text {
		font-family: 'Roboto', sans-serif;
	}
	
	.intro-text h1 { 
		font-size: 3.6rem;
		font-family: 'gt sectra bold', serif;
    	font-weight: bold; 
	}
	.intro-text p { 
		font-size: 1.6rem;
	}
	
	@media screen and (max-width: 1065px) {
		ul.primary {
			width: 100%;
			background: white;
		}
		header.sitenav ul {
			margin: 0 1rem;
		}
	}
	
	.articles-outer-container { margin-bottom: 0; }
	
	.article-detail main .fin:after, .fin:after { content: ""; display: none; }
	
	header.sitenav ul li a { color: #282828; }
	
	.landing-header,
	.previous-platforms,
	.clients-and-partners,
  .partners,
	.wng-sunset-panel,
	.soc,
	ul.secondary,
	ul.user-data-section,
	.contribute,
	.sunset-popup-container.opened-modal,
	.intents, 
	.categories,
	.widget newsletter,
	.next-article,
	.widget.newsletter,
	.sunset-popup-container,
	.sunset-popup-container.opened-modal,
	.opened-modal,
	.upcoming-events-list,
	a[href*="search"],
	.widget.popular,
	.interstice,
	a[href*="sign-up"],
	.subscribe mobile-mode-link,
	.soc-links,
	.subscribe,
	.republish-button,
	header.sitenav.mini .primary-menu-container .mobile-mode-link,
	.sunset-popup-container.opened-modal,
	.create-account-adv-banner,
	.about-contribute,
	.rss-link,
	section.stream header .rss-link,
	header.sitenav.mini .mobile-link,
	.mobile-link,
	.rd-quarterly.banner
	.team-social-links-container { 
		display: none !important; 
	}
	
	.platform-block.p-ebola { display: none; pointer-events: none; }
	@media only screen and (min-width: 768px) {
		.platform-block.p-syria, .platform-block.p-arctic {
			width: 50%;
		}
	}
	
	@media only screen and (max-width: 800px) {
		.article-detail main {
			margin: 0;
		}
	}

	@media only screen and (max-width: 61.25em) {
		.banner-tagline {
			display: none;
		}

		.banner-button__readmore {
			display: block;
		}

		.banner-notice {
			font-size: 13px;
		}
	}

	@media only screen and (max-width: 550px) {
		.banner-button {
			display: none;
		}
	}
`,
		head = document.head || document.getElementsByTagName('head')[0],
		style = document.createElement('style')

	head.appendChild(style)

	changeFavicon('https://www.thenewhumanitarian.org/sites/all/themes/thenewhumanitarian/favicon.ico')

	var siteTitle = document.title
	if (siteTitle) {
		var newTitle = siteTitle.replace('News Deeply', 'Deeply Humanitarian')
		document.title = newTitle
	}

	style.type = 'text/css'
	if (style.styleSheet) {
		// This is required for IE8 and below.
		style.styleSheet.cssText = css
	} else {
		style.appendChild(document.createTextNode(css))
	}

	function changeFavicon(src) {
		var link = document.createElement('link'),
			oldLink = document.getElementById('dynamic-favicon')
		link.id = 'dynamic-favicon'
		link.rel = 'shortcut icon'
		link.href = src
		if (oldLink) {
			document.head.removeChild(oldLink)
		}
		document.head.appendChild(link)
	}

	;(function () {
		var i = 0
		var cursor = document.getElementById('cursor')
		if (cursor) {
			setInterval(function () {
				if (i % 2 && i < 20) {
					cursor.style.display = 'none'
				} else {
					cursor.style.display = 'block'
				}
				if (i >= 40) {
					i = 0
				} else {
					i++
				}
			}, 500)
		}
	})()

	var callback = function () {
		// Handler when the DOM is fully loaded
		head.appendChild(style)

		// Set window to be scrolled to top before unloading
		window.onbeforeunload = function () {
			window.scrollTo(0, 0)
		}

		style.type = 'text/css'
		if (style.styleSheet) {
			// This is required for IE8 and below.
			style.styleSheet.cssText = css
		} else {
			style.appendChild(document.createTextNode(css))
		}

		/* Append necessary styles from external url css file using timestamp for no-cache version */
		var link = document.createElement('link')
		var date = new Date()
		var timestamp = date.getTime()

		link.rel = 'stylesheet'
		link.type = 'text/css'
		link.href = 'https://deeply.thenewhumanitarian.org/000_overrides/tnh-deeply-minimal.css?c=' + timestamp

		document.getElementsByTagName('HEAD')[0].appendChild(link)
		/* End appending styles from URL */

		/* Create and append footer sign up element */
		const footerElement = document.querySelector('.footer-nav')
		footerElement.style.padding = 0
		footerElement.style.margin = 0

		let footer_section_signup__container = document.createElement('section')
		footer_section_signup__container.classList.add('signup-cta')

		let footer_section_signup__content = document.createElement('div')
		footer_section_signup__content.classList.add('signup-cta__content')

		let footer_section_signup__title = document.createElement('h2')
		footer_section_signup__title.classList.add('signup-cta__title')
		footer_section_signup__title.innerHTML = 'Get the latest humanitarian news, direct to your inbox'

		let footer_section_signup__description = document.createElement('p')
		footer_section_signup__description.classList.add('signup-cta__description')
		footer_section_signup__description.innerHTML =
			'Sign up to receive our original, on-the-ground coverage that informs policymakers, practitioners, donors, and others who want to make the world more humane.'

		let footer_section_signup__button = document.createElement('p')
		footer_section_signup__button.classList.add('signup-cta__button')

		let footer_section_signup__link = document.createElement('a')
		footer_section_signup__link.href = 'https://www.thenewhumanitarian.org/subscribe'
		footer_section_signup__link.title = 'Sign up'
		footer_section_signup__link.classList.add('button', 'button--large', 'button--secondary')
		footer_section_signup__link.innerHTML = 'Sign up'

		/* Appending footer signup section elements into each other */
		footer_section_signup__button.append(footer_section_signup__link)

		footer_section_signup__content.append(footer_section_signup__title)
		footer_section_signup__content.append(footer_section_signup__description)
		footer_section_signup__content.append(footer_section_signup__button)

		footer_section_signup__container.append(footer_section_signup__content)

		/* Flush footer */
		footerElement.innerHTML = ''

		/* Append sign up section to footer on page */
		footerElement.append(footer_section_signup__container)

		/* End create and append footer sign up element */

		/* Create and append footer join us element */
		let footer_section_support__container = document.createElement('section')
		footer_section_support__container.classList.add('support-cta')

		let footer_section_support__content = document.createElement('div')
		footer_section_support__content.classList.add('support-cta__content')

		let footer_section_support__text = document.createElement('div')
		footer_section_support__text.classList.add('support-cta__content--text')

		let footer_section_support__title = document.createElement('h2')
		footer_section_support__title.classList.add('support-cta__title')
		footer_section_support__title.innerHTML = 'Become a member of The New Humanitarian'

		let footer_section_support__description = document.createElement('p')
		footer_section_support__description.classList.add('support-cta__description')
		footer_section_support__description.innerHTML =
			'Support our journalism and become more involved in our community. Help us deliver informative, accessible, independent journalism that you can trust and provides accountability to the millions of people affected by crises worldwide.'

		let footer_section_support__button = document.createElement('p')
		footer_section_support__button.classList.add('support-cta__button')

		let footer_section_support__link = document.createElement('a')
		footer_section_support__link.href = 'https://www.thenewhumanitarian.org/membership'
		footer_section_support__link.title = 'Join'
		footer_section_support__link.classList.add('button', 'button--primary', 'button--large')
		footer_section_support__link.innerHTML = 'Join'

		/* Appending footer support section elements into each other */
		footer_section_support__button.append(footer_section_support__link)
		footer_section_support__text.append(footer_section_support__title)
		footer_section_support__text.append(footer_section_support__description)

		footer_section_support__content.append(footer_section_support__text)
		footer_section_support__content.append(footer_section_support__button)

		footer_section_support__container.append(footer_section_support__content)

		/* Append sign up section to footer on page */
		footerElement.append(footer_section_support__container)
		/* End create and append footer sign up element */

		var banner = document.createElement('div')
		banner.classList.add('banner')

		var logo = document.createElement('a')
		logo.classList.add('banner-logo')
		logo.href = 'https://deeply.thenewhumanitarian.org/'
		logo.innerHTML =
			'<svg xmlns="http://www.w3.org/2000/svg" id="ANIMATED-LOGO" viewBox="0 0 405.32 109.7"><defs><style>.cls-1{fill:#FFF;}.cls-2{fill:#FFF;}</style></defs><title>TNH_LOGO_Primary_K_Burgundy_RGB</title><path class="cls-1" d="M176.13,87.43l-6.74.13-.12-2,2.41-.61V66.47c0-2.6-1.11-3.71-3.09-3.71-1.67,0-3.22.93-5.07,2.1l-1.55.93V84.9l2.48.61-.13,2-6.8-.13-7.36.13-.12-2,3.28-.61V46.25l-2.11.37L141,46.56V84.9l5.81.61-.12,2-10.51-.13-10.51.13-.19-2,5.94-.61V46.56l-6.87.06-4.2,10.14h-2V44.15l18.11.12L152,44.21l7.79-.74,2.22-.06v20l10.14-6.31c3.28,0,5.26.62,6.56,2s2,3.46,2,7.23V84.9l3.58.61-.12,2Z" transform="translate(-43.9 -43.41)"></path><path class="cls-1" d="M193.63,71.48c.44,6.55,4.27,10.45,9.71,10.45a13.87,13.87,0,0,0,7.42-2.35l1.05,1.79a34.46,34.46,0,0,1-11.68,7c-8.29,0-14.9-5.56-14.9-14.53,0-8.53,5.19-14.47,15-16.82,7.42,0,11.56,4.58,11.56,11.5v2.91Zm9.28-2.29V68c0-5-.93-8-4.39-8-3.15,0-4.89,3.21-5,8.78,0,.25.06.49.06.74Z" transform="translate(-43.9 -43.41)"></path><path class="cls-1" d="M233.55,52.87l-1.06-3.34V84.9l4.46.61-.07,2L231,87.43l-5.75.13-.19-2,4.39-.61v-38l-4.32-.74.18-2,5.07.12,8.29-.12,19.47,27.27,1.12,3V46.75l-4.45-.62.06-2,5.81.12,5.75-.12.19,2-4.33.62v41h-4.64Z" transform="translate(-43.9 -43.41)"></path><path class="cls-1" d="M275.29,71.48c.43,6.55,4.26,10.45,9.7,10.45a13.87,13.87,0,0,0,7.42-2.35l1,1.79a34.46,34.46,0,0,1-11.68,7c-8.29,0-14.9-5.56-14.9-14.53,0-8.53,5.19-14.47,15-16.82,7.42,0,11.56,4.58,11.56,11.5v2.91Zm9.27-2.29V68c0-5-.93-8-4.39-8-3.15,0-4.88,3.21-5,8.78,0,.25.06.49.06.74Z" transform="translate(-43.9 -43.41)"></path><path class="cls-1" d="M320.36,70.43l-.31-2.6L313.81,86.5l-7.48,2-10-28-2.72-.61.19-1.92,7.66.06,7.05-.06.19,1.92-3.09.61,6.24,19.3.43,3,6-17.93-1.48-4.33-2.54-.61.19-1.92,7.48.06,7-.06.19,1.92-3.1.61,6.25,19.36.37,2.9,7.11-22.26-3.21-.61.18-1.92,4.82.06,4.21-.06.18,1.92-3.15.61-8.66,26-7.48,2Z" transform="translate(-43.9 -43.41)"></path><path class="cls-1" d="M43.9,136.15l4.39-.62V97.38l-4.39-.62.19-2,8.9.12,8.66-.12.18,2-4,.62v17H74v-17l-4.09-.62.13-2,8.72.12,8.84-.12.18,2-4.26.62v38.15l4.26.62-.18,2-8.84-.13-8.72.13-.13-2,4.09-.62V117H57.81v18.55l4,.62-.18,2L53,138.06l-8.9.13Z" transform="translate(-43.9 -43.41)"></path><path class="cls-1" d="M119.28,129.78a13.38,13.38,0,0,0,.74,5.07l2.66-.13.19,2-10.52,2L110.93,133l-9.58,6.06c-3.34,0-5.57-.68-6.86-2-1.49-1.48-1.92-3.58-1.92-7.29V112l-3.34.31-.19-2,9.71-1.92,2.72-.12v21c0,2.78,1,4,3.4,4,1.43,0,2.72-.74,4.33-1.79l1.42-.87V112l-3.21.31-.19-2,9.34-1.92,2.72-.12Z" transform="translate(-43.9 -43.41)"></path><path class="cls-1" d="M170.05,138.06l-7.05.13-.19-2,2.35-.62V117.1c0-2.6-1-3.71-2.91-3.71-1.6,0-3.33,1-4.94,2l-1.3,1v19.11l2.29.62-.19,2-6.68-.13-6.49.13-.18-2,2.28-.62V117.1c0-2.6-1-3.71-2.9-3.71-1.61,0-3.34,1-4.89,2l-1.36,1v19.11l2.35.62-.12,2-6.93-.13-7.23.13-.19-2,3.47-.62V112l-3.53.31-.25-1.92,9.84-2.1,2.35-.06.18,5.75,9.52-6.31c2.91,0,4.76.5,6.12,1.55s2.11,2.41,2.35,4.82l9.71-6.37c3.4,0,5.32.68,6.68,2s1.85,3.4,1.85,7.18v18.61l3.65.62-.12,2Z" transform="translate(-43.9 -43.41)"></path><path class="cls-1" d="M194.47,107.7c8.6,0,11.81,2,11.81,9.34v12.74a12.44,12.44,0,0,0,.81,4.94l2.9-.18.25,2-10.82,2.22-1.73-5-7.79,5.32c-5.32,0-9.34-2.9-9.34-8a8.17,8.17,0,0,1,3-6.56l13.73-4.2v-4.58c0-3.46-.62-5-3.47-5a7.72,7.72,0,0,0-3.27.74l-1.05,7.12h-7.92V112.9Zm2.85,14.47-5.94,2.35a6.51,6.51,0,0,0-1.92,4.89c0,3.09,1.55,4.69,3.28,4.69a5.85,5.85,0,0,0,3.28-1.23l1.3-.87Z" transform="translate(-43.9 -43.41)"></path><path class="cls-1" d="M220.38,138.06l-7.48.13-.18-2,3.46-.62V112l-3.53.43-.24-2,10-2.1,2.35-.06.06,5.75,10.14-6.31c3.34,0,5.32.62,6.62,1.92s1.92,3.4,1.92,7.17v18.74l3.64.62-.12,2-7.73-.13-7,.13-.18-2,2.41-.62V117.1c0-2.6-1-3.71-3-3.71-1.79,0-3.34.93-5.13,2.1l-1.49,1v19l2.48.62-.13,2Z" transform="translate(-43.9 -43.41)"></path><path class="cls-1" d="M258,138.06l-7.67.13-.12-2,3.4-.62V112l-3.4.43-.25-2,9.89-2,2.42-.06v27.27l3.52.62-.12,2Zm-3.46-43,5.62-.37,2,.37.44,4.08-.81,3.65-5.62.37-2-.37-.5-4.27Z" transform="translate(-43.9 -43.41)"></path><path class="cls-1" d="M266.76,111.78v-1.11l1.24-1.24h3.64v-4.2l7.18-4.64h1.42v9h8.1v2.22h-8.1V130c0,2.41,1.3,3.84,3.28,3.84a10.5,10.5,0,0,0,4.94-1.43l.87,1.8L280,139.05c-5.19,0-8.41-2.6-8.41-8.28v-19Z" transform="translate(-43.9 -43.41)"></path><path class="cls-1" d="M305.41,107.7c8.59,0,11.81,2,11.81,9.34v12.74a12.45,12.45,0,0,0,.8,4.94l2.91-.18.24,2-10.82,2.22-1.73-5-7.79,5.32c-5.32,0-9.34-2.9-9.34-8a8.17,8.17,0,0,1,3-6.56l13.73-4.2v-4.58c0-3.46-.62-5-3.46-5a7.73,7.73,0,0,0-3.28.74l-1.05,7.12h-7.92V112.9Zm2.84,14.47-5.94,2.35a6.54,6.54,0,0,0-1.91,4.89c0,3.09,1.54,4.69,3.27,4.69a5.85,5.85,0,0,0,3.28-1.23l1.3-.87Z" transform="translate(-43.9 -43.41)"></path><path class="cls-1" d="M335.4,118.21l5.93-10.2h5.32v8.6h-7.17c-.81.37-2.35,2.35-3.16,3.21l-.68.81v14.9l5.94.62-.19,2-9.89-.13-7.79.13-.12-2,3.46-.62V112l-3.46.31-.25-1.92,9.34-2.1,2.16-.12Z" transform="translate(-43.9 -43.41)"></path><path class="cls-1" d="M357.41,138.06l-7.67.13-.12-2,3.4-.62V112l-3.4.43-.25-2,9.89-2,2.42-.06v27.27l3.52.62-.12,2ZM354,95l5.62-.37,2,.37.44,4.08-.81,3.65-5.62.37-2-.37-.5-4.27Z" transform="translate(-43.9 -43.41)"></path><path class="cls-1" d="M382.14,107.7c8.6,0,11.81,2,11.81,9.34v12.74a12.44,12.44,0,0,0,.81,4.94l2.9-.18.25,2-10.82,2.22-1.73-5-7.79,5.32c-5.32,0-9.34-2.9-9.34-8a8.17,8.17,0,0,1,3-6.56l13.73-4.2v-4.58c0-3.46-.62-5-3.46-5a7.73,7.73,0,0,0-3.28.74l-1.05,7.12h-7.92V112.9ZM385,122.17l-5.94,2.35a6.54,6.54,0,0,0-1.91,4.89c0,3.09,1.54,4.69,3.27,4.69a5.85,5.85,0,0,0,3.28-1.23L385,132Z" transform="translate(-43.9 -43.41)"></path><path class="cls-1" d="M408.05,138.06l-7.48.13-.18-2,3.46-.62V112l-3.53.43-.24-2,9.95-2.1,2.35-.06.06,5.75,10.14-6.31c3.34,0,5.32.62,6.62,1.92s1.92,3.4,1.92,7.17v18.74l3.64.62-.12,2-7.73-.13-7,.13-.18-2,2.41-.62V117.1c0-2.6-1-3.71-3-3.71-1.79,0-3.34.93-5.13,2.1l-1.49,1v19l2.48.62-.13,2Z" transform="translate(-43.9 -43.41)"></path><rect id="cursor" style="fill: rgb(255, 255, 255);display: none;" class="cls-2" x="399.54" y="52" width="5.79" height="50"></rect></svg>'

		var landingIntro = document.querySelector('.our-platforms')
		var newIntro =
			'<div class="container"><div class="row"><div class="col-md-12 intro-text"><h1>Introducing Deeply Humanitarian</h1><p><a href="https://www.thenewhumanitarian.org" target="_blank">The New Humanitarian</a> is the new home of News Deeply’s archive of some 5,000 issue-driven, award-winning articles on topics ranging from refugees to Ebola to peacebuilding. Founded in 2012, News Deeply is an online journalism and technology company that specialised in single-issue news verticals until it stopped publishing in 2019. Its content will now live on with the launch of Deeply Humanitarian. <a href="https://www.thenewhumanitarian.org/about-us/news-deeply-archives" target="_blank">Find out more about why we’ve taken on the News Deeply archives.</a></p></div></div></div>'
		if (landingIntro) {
			landingIntro.innerHTML = newIntro
		}

		var tagline = document.createElement('div')
		tagline.classList.add('banner-tagline')
		tagline.innerHTML = '<span>25 years of journalism from the heart of crises</span>'

		var subscribeButton = document.createElement('a')
		subscribeButton.classList.add('banner-button')
		subscribeButton.classList.add('banner-button__subscribe')
		subscribeButton.href = 'https://www.thenewhumanitarian.org/subscribe'
		subscribeButton.innerHTML = 'Free Newsletter'

		var readMoreButton = document.createElement('a')
		readMoreButton.classList.add('banner-button')
		readMoreButton.classList.add('banner-button__readmore')
		readMoreButton.classList.add('banner-button__subscribe')
		readMoreButton.innerHTML = 'Read more'

		banner.append(readMoreButton)
		banner.append(subscribeButton)
		banner.append(logo)
		banner.append(tagline)

		org_html = document.body.innerHTML
		new_html =
			"<div class='banner-notice'>Brought to you by The New Humanitarian. <a href='https://www.thenewhumanitarian.org/'>Read our current humanitarian coverage</a>.</div><div class='content-wrap'>" +
			org_html +
			'</div>'
		document.body.innerHTML = new_html
		document.body.prepend(banner)

		/* Text replace method based on content in elements */
		var moreInDepthHeading = document.evaluate("//h2[contains(., 'More in-depth coverage')]", document, null, XPathResult.ANY_TYPE, null)
		var newInDepthHeading = moreInDepthHeading.iterateNext()
		if (newInDepthHeading) {
			newInDepthHeading.innerHTML = 'In-depth coverage'
		}

		/* Replaces based on location.pathname */

		/* Path: https://deeply.thenewhumanitarian.org/peacebuilding/about */
		console.log(window.location.pathname)
		if (window.location.pathname == '/peacebuilding/about') {
			let aboutContentContainer = document.querySelector('.inner.smaller.detail')
			const newAboutContent = aboutContentContainer.innerHTML
			const newAboutContentOne = newAboutContent.replace('is the Managing Editor', 'was the Managing Editor')
			const newAboutContentTwo = newAboutContentOne.replace('is the Deputy Managing', 'was the Deputy Managing')
			const newAboutContentThree = newAboutContentTwo.replace('is the Community Editor', 'was the Community Editor')
			const newAboutContentFour = newAboutContentThree.replace(
				'<p><span class="start">Peacebuilding Deeply is </span> an independent news and information platform covering global peace and security. Our reporters and editors provide a mix of investigative and data-driven journalism, on-the-ground reporting, clear and compelling visuals and high-level events. We want to answer the question: how do you put a country back&nbsp;together?</p>',
				'<p style="margin-bottom: 2rem;">Peacebuilding Deeply provides a mix of investigative and data-driven journalism, on-the-ground reporting, clear and compelling visuals and high-level events. We want to answer the question: how do you put a country back together?</p>'
			)
			const newAboutContentFive = newAboutContentFour.replace(
				'<p>The platform will engage local and international actors to connect expert voices and coordinate peacebuilding efforts and insights in one centralized hub. By building a passionate community and connecting a variety of disciplines, Peacebuilding Deeply provides a forum for learning, knowledge-sharing and&nbsp;problem-solving.</p>',
				'<p>The platform engages local and international actors to connect expert voices and coordinate peacebuilding efforts and insights in one centralized hub. By building a passionate community and connecting a variety of disciplines, Peacebuilding Deeply provides a forum for learning, knowledge-sharing and problem-solving.</p>'
			)
			const newAboutContentSix = newAboutContentFive.replace(
				'<p>News Deeply is a network of theme-driven information and community platforms, led by an award-winning team of domain-expert journalists. In an increasingly complicated information environment, we surface the vital insights and stakeholder connections that help to advance conversations and inform decision-making on the issues that matter, deeply, to the state of our world today. For more information on News Deeply and its other platforms, please visit <a href="../index" target="_blank" rel="noopener">www.newsdeeply.com</a>.</p>',
				''
			)
			const newAboutContentSeven = newAboutContentSix.replace(
				'<p>Peacebuilding Deeply is the latest platform launched by the team behind Syria Deeply – News Deeply’s flagship&nbsp;platform.</p>',
				''
			)
			const newAboutContentEight = newAboutContentSeven.replace('<p>', '<p style="margin-bottom: 2rem;">')

			aboutContentContainer.innerHTML = newAboutContentEight
		}
		/* End path: https://deeply.thenewhumanitarian.org/peacebuilding/about */

		/* Path: https://deeply.thenewhumanitarian.org/womenandgirls/contributor/kirsten-bickford */
		if (window.location.pathname == '/womenandgirls/contributor/kirsten-bickford') {
			document.querySelector('.inner.standard.header-bio h2').innerHTML = 'Kirsten Smith'
			document.querySelectorAll('.inner.standard.header-bio p').forEach((e) => e.remove())
		}
		/* End path: https://deeply.thenewhumanitarian.org/womenandgirls/contributor/kirsten-bickford */

		/* Path: https://deeply.thenewhumanitarian.org/womenandgirls/community/2017/04/26/achieving-gender-equality-means-getting-more-women-online */
		if (window.location.pathname == '/womenandgirls/community/2017/04/26/achieving-gender-equality-means-getting-more-women-online') {
			document.querySelector('table.meta td:first-child span:nth-child(2)').innerHTML = 'Kirsten Smith'
			document.querySelector('.author figure').style.display = 'none'
			document.querySelector('.author h3 a').innerHTML = 'Kirsten Smith'
			document.querySelector('.author h4').style.display = 'none'
			document.querySelectorAll('.author p').forEach((e) => e.remove())
		}
		/* End path: https://deeply.thenewhumanitarian.org/womenandgirls/community/2017/04/26/achieving-gender-equality-means-getting-more-women-online */

		/* Path: https://deeply.thenewhumanitarian.org/refugees/contributor/mat-nashed */
		if (window.location.pathname == '/refugees/contributor/mat-nashed') {
			document.querySelector('.header-bio').style.display = 'none'
		}
		/* End path: https://deeply.thenewhumanitarian.org/refugees/contributor/mat-nashed */

		/* Path: https://deeply.thenewhumanitarian.org/refugees/articles/2018/08/27/refugees-in-cairo-live-in-fear-of-sudans-wanted-list */
		if (window.location.pathname == '/refugees/articles/2018/08/27/refugees-in-cairo-live-in-fear-of-sudans-wanted-list') {
			document.querySelector('.authorbio').style.display = 'none'
			document.querySelector('table.meta > tbody > tr > td:first-child').style.display = 'none'
		}
		/* End path: https://deeply.thenewhumanitarian.org/refugees/articles/2018/08/27/refugees-in-cairo-live-in-fear-of-sudans-wanted-list */

		/* End replace based on location.pathnames */

		document.querySelector('body').style.display = 'block'

		// Scroll to top of window when page loaded
		setTimeout(window.scrollTo(0, 0), 0)

		// Changes favicon
		changeFavicon('https://www.thenewhumanitarian.org/sites/all/themes/thenewhumanitarian/favicon.ico')

		document.body.style.display = 'block'

		// Scroll to top of window
		window.scrollTo(0, 0)
	}

	document.querySelector('body').style.display = 'block'

	if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
		callback()
	} else {
		document.addEventListener('DOMContentLoaded', callback)
	}
}
