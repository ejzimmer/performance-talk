const elements = ['.header', '.footer', '.spinner', '.controller', '.cloak'];
const body = document.querySelector('body');

export default class StaticHtmlController {
  constructor() {
    let elementIndex = -1;

    function addListener() {
      body.addEventListener('click', (event) => {
        event.stopPropagation();
        elementIndex++;
        highlightElement();

        if (elementIndex < elements.length) {
          addListener();
        } 
      }, { once: true });
    }

    function highlightElement() {
      if (elementIndex > 0) {
        document.querySelectorAll(elements[elementIndex - 1]).forEach(element => element.classList.remove('embiggen'));
      }
      document.querySelectorAll(elements[elementIndex]).forEach(element => element.classList.add('embiggen'));
    }

    addListener();

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
  <div class="spinner">Put the spinner code in here</div>
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