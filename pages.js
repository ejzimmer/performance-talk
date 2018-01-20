import PerformanceIsHardController from './controllers/performance-is-hard.js';
import PerformanceTabController from './controllers/performance-tab.js';
import InitialScoresController from './controllers/initial-scores.js';
import TimeToPaintController from './controllers/time-to-paint.js';
import RewardGoodBehaviourController from './controllers/good-behaviour.js';
import SlowLoadController from './controllers/slow-load.js';
import StaticHtmlController from './controllers/static-html.js';
import BetterLoadController from './controllers/better-load.js';
import TwoBundlesController from './controllers/two-bundles.js';
import LoadTimeAfterController from './controllers/load-time-after.js';

export default [
  {
    content: '<img class="digital-id-logo" src="images/verify-with-digital-id.svg" />'
  },
  {
    hash: '#fine',
    content: `
      <img src="images/this-is-fine.png" class="centred-image" />
      <div class="overlay-caption">Source: gunshowcomic.com/648</div>`,
  },
  {
    hash: '#performance-is-hard',
    controller: PerformanceIsHardController,
  },
  {
    hash: '#chrome-performance-tab',
    controller: PerformanceTabController,
  },
  {
    hash: '#lighthouse',
    content: '<img class="whole-page" src="images/pwa-lighthouse.png" />',
  },
  {
    hash: '#initial-scores',
    controller: InitialScoresController,
  },
  {
    hash: '#accessibility',
    content: `
        <img class="centred-image tall" src="images/aria-pyramid.png" />
        <div class="overlay-caption">From simplyaccessible.com/article/the-accessibility-stack/</div>`,
  },
  {
    hash: '#guide-pony',
    content: '<img class="centred-image tall" src="images/Guide_horse.jpg" />',
  },
  {
    hash: '#us',
    content: '<img class="centred-image" src="images/angular-meetup.jpeg" />',
  },
  {
    hash: '#best-practices-score',
    content: '<score-dial score="77" label="Best Practices" class="alone"></score-dial>',
  },
  {
    hash: '#non-standard',
    content: '<div class="deprecated"><img src="images/deprecated-small.png" /></div>',
  },
  {
    hash: '#blocking',
    content: '<div class="notification"><img src="images/notification.png" /></div>',
  },
  {
    hash: '#password',
    content: '<img src="images/troy-hunt.png" class="tweet" />',
  },
  {
    hash: '#http2',
    content: '<img src="images/http2-all-the-things.jpg" class="centred-image" />',
  },
  {
    hash: '#best-practices-after',
    content: '<score-dial score="95" label="Best Practices" class="alone"></score>'
  },
  {
    hash: '#performance-score',
    content: '<score-dial score="64" label="Performance" class="alone"></score-dial>',
  },
  {
    hash: '#performance-score-breakdown',
    controller: TimeToPaintController,
  },
  {
    hash: '#slow-load',
    controller: SlowLoadController,
  },
  {
    hash: '#no-static-html',
    content: `<pre class="big-text">
&lt;html&gt;
  &lt;body&gt;
    <span class="highlight-on-hover">&lt;div ui-view&gt;&lt;/div&gt;</span>
    <span class="highlight-on-hover">&lt;script src="app.js"&gt;&lt;/script&gt;</span>
  &lt;/body&gt;
&lt;/html&gt;</pre>`,
  },
  {
    hash: '#static-elements',
    content: 'there\'s a bunch of stuff we could render without the javascript',
  },
  {
    hash: '#static-html',
    controller: StaticHtmlController,
  },
  {
    hash: '#reward-good-behaviour',
    content: '<div style="font-size: 7em; margin: auto">🍭</div>',
  },
  {
    hash: '#browser-compatibility',
    content: '<img class="centred-image" src="images/caniuse.png" />'
  },
  {
    hash: '#feature-detection',
    content: `
<pre class="big-text">
var modernBrowser = function () {
  try {
    <span class="highlight-on-hover">new Function('async => {}')();</span>
  } catch (error) {
    <span class="highlight-on-hover">return false;</span>
  }
  <span class="highlight-on-hover">return true;</span>
})();
</pre>`
  },
  {
    hash: '#load-script',
    content: `
      <pre class="big-text">
        the thing that loads the script
      </pre>
    `
  },
  {
    hash: '#time-to-load',
    controller: LoadTimeAfterController,
  },
  {
    hash: '#performance-scores-after',
    content: '<score-dial score="92" label="Performance" class="alone"></score-dial>'
  },
  {
    hash: '#pwa',
    content: '<score-dial score="45" label="Progressive Web App" class="alone"></score-dial>'
  },
  {
    hash: '#progressive-bits',
    content: 'Image of digital id on phone<img src="images/downasaur.jpg" />',
  },
  {
    hash: '#pwa-after',
    content: '<score-dial score="55" label="Progressive Web App" class="alone"><score-dial>'
  },
  {
    hash: '#result',
    content: 'back to business, happy we can show something, 30%',
  },
  {
    hash: '#conclusion',
    content: 'measuring things is important, tools like lighthouse can help, make sure you only use the things that are relevant to you',
  },
]