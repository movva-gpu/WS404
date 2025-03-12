import './style.css';
import { Strip } from './strip';

/*const strip =*/ new Strip([
    { url: 'https://placehold.co/300', alt: 'Placeholder 1' },
    { url: 'https://placehold.co/150', alt: 'Placeholder 2' },
    false, false,
    { url: 'https://placehold.co/150', alt: 'Placeholder 5' },
    { url: 'https://placehold.co/150', alt: 'Placeholder 6' },
    { url: 'https://placehold.co/150', alt: 'Placeholder 7' },
    { url: 'https://placehold.co/150', alt: 'Placeholder 8' },
], [
    {
        height: 150,
        cols: [ 200/3, 100/3 ],
    },
    {
        height: 150,
        cols: [ 100/3, 100/3, 100/3 ],
    },
    {
        height: 150,
        cols: [ 100/3, 100/3, 100/3 ],
    },
]).createStrip();

// strip.createStrip();
