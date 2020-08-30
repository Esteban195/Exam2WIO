const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BuscarPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get inpsearch1 () { return $('[data-test=SearchField-input]') }
    get inpval1 () { return $('[data-test=SearchField-input]') }
    get btncheck () { return $('[data-test="PlacePickerRow-station"]') } 

    get inpsearch2 () { return $('[data-test=SearchPlaceField-destination]') }
    get inpval2 () { return $('[data-test=SearchField-input][placeholder]') }
    get btncheck2 () { return $('[data-test="PlacePickerRow-city"]') } 

    get btnDesplegable () { return $('[data-test="PassengersField"] button') }

    get selectadults () {return $('[data-test="PassengersRow-adults"] button[aria-label=increment]')}
    get SelectChild () {return $('[data-test="PassengersRow-children"] button[aria-label=increment]')}
    get SelectKids () {return $('[data-test="PassengersRow-infants"] button[aria-label=increment]')}

    get btnConfirm () {return $('[data-test=PassengersFieldFooter-done]')}

    get pressfecha1 () {return $('[name="search-outboundDate"]')}
    get fecha1 () {return $('[data-value="2020-09-10"]')}
    get btnestablecer1 () {return $('[data-test="SearchFormDoneButton"]')}
    get pressfecha2 () {return $('[name="search-inboundDate"]')}
    get fecha2 () {return $('[data-value="2020-09-15"]')}
    get btnestablecer2 () {return $('[data-test="SearchFormDoneButton"]')}

    get btnconsult () {return $('[data-test="LandingSearchButton"]')}


    get ResultList() {return $$('[data-test="ResultCardWrapper"]')}


   Location() {

    this.inpsearch1.click();
    this.inpval1.setValue('TXL');
    this.btncheck.click();
    this.inpsearch2.click();
    this.inpval2.setValue('LONDRES');
    browser.pause(2000);
    this.btncheck2.click();
    browser.pause(2000);

   }

    Passenger() {

    this.btnDesplegable.click();
    this.selectadults.click();
    this.SelectChild.click();
    this.SelectKids.click();
    this.btnConfirm.click();
    browser.pause(2000);
    
   }

   Dates() {

    this.pressfecha1.click();
    this.fecha1.click();
    this.btnestablecer1.click();
    this.pressfecha2.click();
    this.fecha2.click();
    this.btnestablecer2.click();

    this.btnconsult.click();
    browser.pause(2000);
    
   }


    open () {
        browser.pause(4000);
        browser.maximizeWindow()
        return super.open('/landing/-/-');
    }
}

module.exports = new BuscarPage();
