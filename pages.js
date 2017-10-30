import PerformanceIsHardController from './controllers/performance-is-hard.js';
import PerformanceTabController from './controllers/performance-tab.js';
import InitialScoresController from './controllers/initial-scores.js';
import TimeToPaintController from './controllers/time-to-paint.js';
import StaticHtmlController from './controllers/static-html.js';
import RewardGoodBehaviourController from './controllers/good-behaviour.js';

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
    hash: '#static-html',
    controller: StaticHtmlController,
  },
  {
    hash: '#reward-good-behaviour',
    controller: RewardGoodBehaviourController,
  },
  {
    hash: '#performance-scores-after',
    content: '<score-dial score=""></score-dial>'
  },
  {
    hash: '#pwa',
    content: '<score-dial score="45"></score-dial>'
  },
  {
    hash: '#pwa-after',
    content: '<score-dial score=""><score-dial>'
  },
  {
    hash: '#conclusion',
    content: 'nfi',
  },
]