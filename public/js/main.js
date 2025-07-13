// スターフィールドの生成
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const numberOfStars = 100;
            
            for (let i = 0; i < numberOfStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 5 + 's';
                star.style.animationDuration = (Math.random() * 3 + 2) + 's';
                starsContainer.appendChild(star);
            }
        }

        // スクロールに応じたナビゲーションの変化
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(10, 10, 15, 0.95)';
                nav.style.padding = '15px 0';
            } else {
                nav.style.background = 'rgba(10, 10, 15, 0.9)';
                nav.style.padding = '20px 0';
            }
        });

        // スムーズスクロール
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

        // ハンバーガーメニューのトグル
        const hamburger = document.getElementById('hamburger-menu');
        const mobileMenu = document.getElementById('mobile-menu');

        if (hamburger && mobileMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('open');
                mobileMenu.classList.toggle('open');
            });

            // モバイルメニューのリンクをクリックしたらメニューを閉じる
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('open');
                    mobileMenu.classList.remove('open');
                });
            });
        }

        // ページロード時の初期化
        createStars();