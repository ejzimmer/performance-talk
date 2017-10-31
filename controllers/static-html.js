export default class StaticHtmlController {
  constructor() {
    const body = document.querySelector('body');

    body.addEventListener('click', (event) => {
      event.stopPropagation();
      document.querySelector('.header').classList.add('embiggen');

      body.addEventListener('click', (event) => {
        event.stopPropagation();
        document.querySelector('.header').classList.remove('embiggen');
        document.querySelector('.footer').classList.add('embiggen');

        body.addEventListener('click', (event) => {
          event.stopPropagation();
          document.querySelector('.footer').classList.remove('embiggen');
          document.querySelectorAll('.controller').forEach(div => div.classList.add('embiggen'));

          body.addEventListener('click', (event) => {
            event.stopPropagation();
            document.querySelectorAll('.controller').forEach(div => div.classList.remove('embiggen'));
            document.querySelectorAll('.cloak').forEach(div => div.classList.add('embiggen'));
          }, { once: true });
        }, { once: true });
      }, { once: true });
    }, { once: true });
  }

  static getTemplate() {
    return `<pre class="medium-text">
&lt;body&gt;
  <div class="header">
  &lt;header <span class="controller">ng-controller="AppHeaderController as $ctrl"</span>&gt;
    &lt;img src="assets/digitalid-logo.svg" alt="digital ID" /&gt;
    &lt;div <span class="cloak">ng-cloak</span>&gt;
      &lt;div&gt;Verifying for&lt;/div&gt;
      &lt;div&gt;{{counterParty.display_name}}&lt;/div&gt;
      &lt;img ng-src="{{counterParty.logo}}" /&gt;
    &lt;/div&gt;
  &lt;header&gt;</div>
  &lt;div ui-view&gt;&lt;/div&gt;
  <div class="footer">
  &lt;footer <span class="controller">ng-controller="AppFooterController as $ctrl"</span>&gt;
    &lt;button <span class="cloak">ng-cloak</span> ng-click="$ctrl.cancel()"&gt;
      Cancel and return to {{counterParty.display_name}}
    &lt;/button&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a target="_blank" href="help.html"&gt;Help&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a target="_blank" href="web.html"&gt;Terms&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a target="_blank" href="privace.html"&gt;Privacy&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/footer&gt;</div>
&lt;/body&gt;
</pre>`;
  }
}