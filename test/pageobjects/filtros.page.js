const Page = require('./page');

class FiltrosPage extends Page {
 

    get buscheck () { return $('//span[contains(text(),"Autobús")]')}
    get trencheck () { return $('//span[contains(text(),"Tren")]')} // crear funcion con if validando si esta seleccionado, desclickealo, de lo contario clickealo
    get vuelocheck () { return $('//span[contains(text(),"Vuelo")]')}

    get checkpack () {return $('//span[contains(text(),"$ 826")]')}
    get checkRes () {return $('[data-test="DetailBookingButton"]')}//span[contains(text(),"Reservar")]
    get Bookingcheck () { return $('[data-test="BookingButton"]')}

    get headervalid () {return $('[data-test="ReservationHead"]')}


    get Result() {return $$('[data-test="ResultCardWrapper"]')}


    Filters() {

        this.vuelocheck.click();
        this.trencheck.click();
        browser.pause(8000)
    }

    AddTren() {

        this.trencheck.click();
        browser.pause(5000)
    }


    Booking() {

        this.checkpack.click();
        this.checkRes.click();
        browser.pause(3000)
    }
  
    open () {
        browser.pause(3000)
        browser.maximizeWindow()
        return super.open('/buscar/results/aeropuerto-de-berlin-tegel-berlin-alemania/londres-reino-unido/2020-09-10/2020-09-15?adults=2&children=1&infants=1');
    }
}

module.exports = new FiltrosPage();
