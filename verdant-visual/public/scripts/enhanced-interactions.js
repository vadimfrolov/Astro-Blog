// Enhanced scroll behaviors and loading states
document.addEventListener('DOMContentLoaded', () => {
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

	// Parallax effect for hero section
	const hero = document.querySelector('.hero');
	if (hero) {
		window.addEventListener('scroll', () => {
			const scrolled = window.pageYOffset;
			const parallax = hero.style;
			parallax.transform = `translateY(${scrolled * 0.5}px)`;
			parallax.opacity = 1 - scrolled / 600;
		});
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
		const updateProgress = () => {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight - windowHeight;
			const scrolled = (window.scrollY / documentHeight) * 100;
			progressBar.style.width = `${scrolled}%`;
		};

		window.addEventListener('scroll', updateProgress);
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