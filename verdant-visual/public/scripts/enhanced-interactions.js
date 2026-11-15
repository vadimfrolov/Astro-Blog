// Enhanced scroll behaviors and loading states
document.addEventListener('DOMContentLoaded', () => {
	// Enhanced header scroll effects
	const header = document.querySelector('header');
	if (header) {
		let lastScrollY = window.scrollY;
		let ticking = false;

		const updateHeader = () => {
			const scrollY = window.scrollY;
			
			if (scrollY > 50) {
				header.classList.add('scrolled');
			} else {
				header.classList.remove('scrolled');
			}
			
			lastScrollY = scrollY;
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateHeader);
				ticking = true;
			}
		};

		window.addEventListener('scroll', onScroll, { passive: true });
	}

	// Smooth scroll with easing for anchor links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	});

	// Add loading state to post cards
	document.querySelectorAll('.post-card').forEach(card => {
		card.addEventListener('click', function() {
			this.style.opacity = '0.7';
			this.style.transform = 'scale(0.98)';
			
			// Reset after a short delay
			setTimeout(() => {
				this.style.opacity = '';
				this.style.transform = '';
			}, 150);
		});
	});

	// Parallax effect for hero section (throttled to one update per frame)
	const hero = document.querySelector('.hero');
	if (hero) {
		let heroTicking = false;
		window.addEventListener('scroll', () => {
			if (heroTicking) return;
			heroTicking = true;
			window.requestAnimationFrame(() => {
				const scrolled = window.pageYOffset;
				hero.style.transform = `translateY(${scrolled * 0.5}px)`;
				hero.style.opacity = 1 - scrolled / 600;
				heroTicking = false;
			});
		}, { passive: true });
	}

	// Intersection Observer for fade-in animations
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = '1';
				entry.target.style.transform = 'translateY(0)';
			}
		});
	}, observerOptions);

	// Observe elements for animation
	document.querySelectorAll('.post-card, .section-title').forEach(el => {
		el.style.opacity = '0';
		el.style.transform = 'translateY(20px)';
		el.style.transition = 'all 0.6s ease-out';
		observer.observe(el);
	});

	// Enhanced reading progress bar
	const progressBar = document.querySelector('[data-reading-progress]');
	if (progressBar) {
		let progressTicking = false;
		const updateProgress = () => {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight - windowHeight;
			const scrolled = documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0;
			progressBar.style.width = `${scrolled}%`;
			progressTicking = false;
		};

		window.addEventListener('scroll', () => {
			if (!progressTicking) {
				progressTicking = true;
				window.requestAnimationFrame(updateProgress);
			}
		}, { passive: true });
		updateProgress();
	}

	// Add hover effect to images
	document.querySelectorAll('img').forEach(img => {
		img.addEventListener('mouseenter', () => {
			img.style.transform = 'scale(1.02)';
		});
		
		img.addEventListener('mouseleave', () => {
			img.style.transform = 'scale(1)';
		});
	});
});