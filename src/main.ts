import '@fontsource/barlow/index.css';
import './style.scss';


let lockedAt = 1;
const MS_BEFORE_HINT = 5000;

document.addEventListener('DOMContentLoaded', () => {
    const hint = document.getElementById('hint');

    for (const blurred of document.querySelectorAll<HTMLImageElement|HTMLDivElement>(".blurred")) {
        const observer = new IntersectionObserver((entries, observer) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        if (!hint) return;
                        hint.setAttribute('aria-hidden', 'false');
                    }, MS_BEFORE_HINT);
                    observer.disconnect();
                }
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        });

        observer.observe(blurred);

        blurred.addEventListener('mousemove', () => {
            blurred.setAttribute('data-hovered', 'true');
        });
    }

    let i = 0;
    for (const strip of document.querySelectorAll<HTMLDivElement>('.strip')) {
        const index = i;

        strip.addEventListener('mousemove', () => {
            const blurreds = strip.querySelectorAll<HTMLImageElement|HTMLDivElement>('.blurred');
            let nextPage = true;
            for (const blurred of blurreds) {
                if (
                    !blurred.hasAttribute('data-hovered') ||
                    blurred.getAttribute('data-hovered') === 'false'
                ) {
                    nextPage = false;
                    break;
                }
            }

            if (nextPage && index === lockedAt) {
                console.log(strip, index, lockedAt, nextPage);
                lockedAt += 1;
            }
        });

        i++;
    }
});

window.addEventListener('scroll', () => {
    const strip = document.querySelector(`.strip-${lockedAt + 1}`);
    if (strip) {
        const stripRect = strip.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (stripRect.bottom <= windowHeight) {
            window.scrollTo(0, stripRect.bottom + window.scrollY - windowHeight);
        }
    }
});
