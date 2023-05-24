// TODO: Create a service worker that caches static assets:
import { workbox } from workbox-window;

export const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./src-sw.js');
        } catch (e) {
            console.log(`SW registration failed`);
        }
    }
}