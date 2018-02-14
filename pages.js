import PerformanceTabController from './controllers/performance-tab.js';

export default [
  {
    hash: '#title',
    content: `
    <div class="title-page">
    <h1>Improving your app with Lighthouse</h1>
    <div>or</div>
    <subtitle>How we justify working on stuff devs care about that business people don\'t</subtitle>
    </div>`,
  },
  {
    hash: '#digitalid',
    content: '<img class="digital-id-logo" src="images/verify-with-digital-id.svg" />'
  },
  {
    hash: '#works-on-my-machine',
    content: '<h1 class="code" style="margin: auto">Works on my machine&trade;</h1>'
  },
  {
    hash: '#screw-you',
    content: `
      <div class="screw-you">
        <img class="ie-logo" src="images/IE6.png" />
        <img src="images/phone.png" />
      </div>`,
  },
  {
    hash: '#this-is-fine',
    content: `
      <img src="images/this-is-fine.png" class="centred-image" />
      <div class="overlay-caption">Source: gunshowcomic.com/648</div>`
  },
  {
    hash: '#there-was-a-reason',
    content: '<img class="form" src="images/birth-cert-form.png" />'
  },
  {
    hash: '#load-of-crap',
    content: `
      <div class="usage">
        <svg class="pie60" viewBox="0 0 100 100" width="40vw" height="40vw">
          <circle r="25" cx="50" cy="50" />
        </svg>
      </div>`
  },
  {
    hash: '#fix',
    content: `
      <div class="fixed">
        <img src="images/IE6.png" />
        <img src="images/phone.png" />
      </div>`
  },
  {
    hash: '#convincing',
    content: 'some kind of segue into needing to measure performance'
  },
  {
    hash: '#measuring-performance',
    controller: PerformanceTabController
  },
  {
    hash: '#lighthouse',
    content: '<img class="whole-page" src="images/pwa-lighthouse.png" />',
  },
  {
    hash: '#audits',
    content: '<img class="audit-options" src="images/audit-options.png" />'
  },
  {
    hash: '#our-results',
    content: `
      <div class="initial-scores">
        <score-dial score="45" label="Progressive Web App"></score-dial>
        <score-dial score="64" label="Performance"></score-dial>
        <score-dial score="100" label="Accessibility"></score-dial> 
        <score-dial score="77" label="Best Practices"></score-dial>
      </div>
    `,
  },
  {
    hash: '#accessibility',
    content: '<score-dial class="single-score" score="100" label="Accessibility"></score-dial>'
  },
  {
    hash: '#grain-of-salt',
    content: `
      <div class="code code-examples">
        <pre class="left">
&lt;nav class="menu"&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#"&gt;&lt;img src="home.png" /&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;&lt;img src="about.png" /&gt;About&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;&lt;img src="cats.png" /&gt;Contact&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</pre>
        <pre class="right">
&lt;div class="navigation"&gt;
    &lt;div id="home-nav"&gt;&lt;img src="home.png" alt="home icon" /&gt;Home&lt;/div&gt;
    &lt;div id="about-nav"&gt;&lt;img src="about.png" alt="about icon" /&gt;About&lt;/div&gt;
    &lt;div id="cats-nav"&gt;&lt;img src="cats.png" alt="cats icon" /&gt;Cats&lt;/div&gt;
&lt;/div&gt;</pre>
      <div>
    `
  },
  {
    hash: '#guide-pony',
    content: '<img class="centred-image tall" src="images/Guide_horse.jpg" />'
  },
  {
    hash: '#angular-meetup',
    content: '<img class="centred-image" src="images/angular-meetup.jpeg" />'
  },
  {
    hash: '#accessibility-pyramid',
    content: `
    <img class="centred-image tall" src="images/aria-pyramid.png" />
    <div class="overlay-caption">From simplyaccessible.com/article/the-accessibility-stack/</div>`
  },
  {
    hash: '#aa',
    content: '<img class="certificate" src="images/aa-cert.png" />'
  },
  {
    hash: '#best-practices',
    content: '<score-dial class="single-score" score="77" label="Best Practices"></score-dial>'
  },
  {
    hash: '#deprecated',
    content: '<div class="deprecated"><img src="images/deprecated-small.png" /></div>'
  },
  {
    hash: '#permissions',
    content: '<div class="notification"><img src="images/notification.png" /></div>'
  },
  {
    hash: '#passwords',
    content: '<img src="images/troy-hunt.png" class="tweet" />'
  },
  {
    hash: '#http2',
    content: '<img src="images/http2-all-the-things.jpg" class="centred-image" />'
  },
  {
    hash: '#best-practices-after',
    content: `
    <score-dial class="single-score" score="77" label="Best Practices (Before)"></score-dial>
    <score-dial class="single-score" score="95" label="Best Practices (After)"></score-dial>`
  },
  {
    hash: '#performance',
    content: '<score-dial class="single-score" score="64" label="Performance"></score-dial>'
  },
  {
    hash: '#performance-measures',
    content: `
    <div class="measures">
      <div class="times">
        <div>First meaningful paint 5,330ms</div>
        <hr class="measure slow">
        <div>First interactive 5,330ms</div>
        <hr class="measure fast">
        <div>Consistently interactive 5,330ms</div>
        <hr class="measure fast">
      </div>
      <div class="perceptual-speed-index">
        <div>Perceptual speed index 5,471</div>
        <hr class="measure index medium">
      </div>
      <div class="input-latency">
        <div>Input latency 16ms</div>
        <hr class="measure latency fast">
      </div>
    </div>`,
  },
  {
    hash: '#page-loading',
    content: '<div class="shit-loading"></div>',
  },
  { 
    hash: '#post-improvement',
    content: `
    <div class="measures after">
      <div class="times">
        <div>First meaningful paint 1,380ms</div>
        <hr class="measure fast paint">
        <div>First interactive 3,490ms</div>
        <hr class="measure fast interactive">
        <div>Consistently interactive 3,490ms</div>
        <hr class="measure fast interactive">
      </div>
      <div class="perceptual-speed-index">
        <div>Perceptual speed index 4,029</div>
        <hr class="measure index medium">
      </div>
      <div class="input-latency">
        <div>Input latency 16ms</div>
        <hr class="measure latency fast">
      </div>
    </div>`
  },
  {
    hash: '#new-performance-score',
    content: `
    <score-dial class="single-score" score="64" label="Performance (Before)"></score-dial>
    <score-dial class="single-score" score="92" label="Performance (After)"></score-dial>`,
  },
  {
    hash: '#pwa',
    content: '<score-dial class="single-score" score="45" label="Progressive Web App"></score-dial>'
  },
  {
    hash: '#pwa-factors',
    content: `
      <div class="pwa-factors">
        <img src="images/downasaur.jpg" />
        <img src="images/3-cogs-black-hi.png" />
        <img src="images/phone.svg" />
        <img src="images/lock.png" />
      </div>`,
    content_: 'service worker logo'
  },
  {
    hash: '#dont-care',
    content: '<div class="shrug">¯\\_(ツ)_/¯</div>',
  },
  {
    hash: '#post-pwa',
    content: `
    <score-dial class="single-score" score="45" label="Progressive Web App (Before)"></score-dial>
    <score-dial class="single-score" score="55" label="Progressive Web App (After)"></score-dial>`
  },
  {
    hash: '#seo',
    content: '<div class="seo">Search Engine Optimisation</div>'
  },
  {
    hash: '#limitations',
    content: `
    <div class="limitations">
      <h2>Limitations</h2>
      <ul onclick="(function (event) { event.stopPropagation() })(event)">
        <li onclick=""><input type="checkbox" id="basic" /><label for="basic">Basic</label></li>
        <li><input type="checkbox" id="spa" /><label for="spa">Single page apps</label></li>
        <li><input type="checkbox" id="security" /><label for="security">False sense of security</label></li>
      </ul>
    </div>`,
  },
  {
    hash: '#summary',
    content: `
      <div class="summary">
        <img src="images/penis-coffee.jpg" />
        <div>
          <div>You can't improve if you don't measure!</div>
          <div>@erinjzimmer</div>
        </div>
      </div>`
  }
];

