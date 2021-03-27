  
/* istanbul ignore file */

/* eslint-disable */

var ifFIDSupproted =
    window.PerformanceObserver &&
    window.PerformanceObserver.supportedEntryTypes &&
    window.PerformanceObserver.supportedEntryTypes.includes('first-input');

if (!ifFIDSupproted) {
    var script = document.createElement('script');
    script.src =
        'https://micro-assets.foodora.com/js/first-input-delay-polyfill.js';
    document.head.appendChild(script);
}

/* eslint-enable */
