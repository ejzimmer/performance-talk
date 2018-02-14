export default class TwoBundlesController {
  static getTemplate() {
    return `
    <div class="build-container">
      <div class="source-files"></div>
      <div class="build-process">
        <div class="legacy">

        </div>
        <div class="current"></div>
      </div>
    </div>`
  }
}