`Best practices is a kind of catch-all that checks that you don’t do a bunch of stuff that you’re 
probably not doing anyway. To do well in this category, you need to not use deprecated stuff like AppCache, 
WebSQL DB, deprecated APIs or HTTP1. You also need to not do annoying stuff, 
like blocking page load while you wait for the user to give permission for something. 
And don’t do dumb stuff like stopping users from pasting in password fields, 
because it breaks password managers, and Troy Hunt will make fun of you on Twitter.
`

export default class BestPracticesController {

  static getTemplate() {
    return '';
  }
}