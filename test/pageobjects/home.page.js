const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnHomeKiwi () { return $('#svg3400') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

module.exports = new HomePage();
