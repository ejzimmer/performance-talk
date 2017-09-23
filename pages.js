import PerformanceIsHardController from './controllers/performance-is-hard.js';
import PerformanceTabController from './controllers/performance-tab.js';
import InitialScoresController from './controllers/initial-scores.js';
import BestPracticesController from './controllers/best-practices.js';

export default [
  {
    content: '<img class="digital-id-logo" src="images/verify-with-digital-id.svg" />'
  },
  {
    hash: '#fine',
    content: `
      <div class="image-and-attribution">
        <img src="images/this-is-fine.png" />
        <div class="attribution">Source: gunshowcomic.com/648</div>
      </div>`,
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
      when most people think about accessibility, they think screen-readers and aria
      picture
      don't
      most people using accessibility aren't relying on screen readers
      they're using stuff like this
      pictures of assistive technologies
      accessibility pyramid
      instead of worrying about screen readers, you should concentrate your page making sense
      write logical, semantic html
      make it work with a keyboard
      sure, you're still going to need aria for the tricky  cases
      but semantic html is going to get you most of the way there
      and yes, our site doesn't just win the lighthouse accessibility, it's AA compliant
      some kind of funny picture`,
  },
  {
    hash: '#best-practices',
    controller: BestPracticesController,
  },
  {
    hash: '#performance',
  },
  {
    hash: '#pwa',
  }
]