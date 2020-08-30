const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegistroPage extends Page {
    /**
     * define selectors using getter methods
     */

    get correo () { return $('//input[@name="email"]')}
    get telefono () { return $('//input[@name="phone"]')}
    get nombre () { return $('//input[@name="firstname"]')}
    get apellidos () { return $('//input[@name="lastname"]')}
    get nacionalidad () { return $('[data-test="ReservationPassenger-nationality"]')} 
    get sexo () { return $('//select[@name="title"]')} 
    get nacimiento () { return $('//input[@name="birthDay"]')}
    get nacimiento2 () { return $('//select[@name="birthMonth"]')}
    get nacimiento3 () { return $('//input[@name="birthYear"]')}
    get cedula () { return $('//input[@name="idNumber"]')}
    get vencimiento () { return $('//span[contains(text(),"Sin caducidad")]')}
    get seguro () { return $('//div[contains(text(),"Travel Plus")]')}
    get continuarbtn () { return $('[data-test="StepControls-passengers-next"]')}
    get continuestandard () {return $('[data-test="fareTypesStandardButton"]')}
    get selectandcontinue () {return $('[data-test="servicePackagesPremiumButton"]')}
    get continueend () {return $('[data-test="StepControls-AdditionalService-next"]')}

    get validdat () {return $('.//div[@class="SummaryPassengers__SummaryPassengersWrapper-sc-1x1ezd1-0 fpydWb"]')}
    get validmail () {return $('//div[@class="Stack__StyledStack-sc-1t576ow-0 hBaoAh"]')}

    //get vuelocheck () { return $('[data-test="BookingButton"]')}



    RegName(){
        this.correo.click();
        this.correo.setValue('prueba@hotmail.com');
        this.telefono.click();
        this.telefono.setValue('83848586');
        this.nombre.click()
        this.nombre.setValue('Esteban');
        this.apellidos.click()
        this.apellidos.setValue('Arias Castro');
        browser.pause(5000)
    }

    RegData(){
        this.nacionalidad.click();
        this.nacionalidad.selectByAttribute('value', 'al');
        this.sexo.click();
        this.sexo.selectByAttribute('value', 'mr');
        this.nacimiento.click()
        this.nacimiento.setValue('03');
        this.nacimiento2.click()
        this.nacimiento2.selectByAttribute('value', '03');
        this.nacimiento3.click()
        this.nacimiento3.setValue('1995');
        this.cedula.click()
        this.cedula.setValue('116020555');
        this.vencimiento.click()
        this.seguro.click()
        browser.pause(5000)
    }

    RegPayment(){
        this.continuarbtn.click();
        this.continuestandard.click();
        this.selectandcontinue.click();
        this.continueend.click()
  
        browser.pause(5000)
    }

    open () {
        browser.pause(6000)
        browser.maximizeWindow()
        return super.open('/booking?%3FbackToSearchUrl=https%3A%2F%2Fwww.kiwi.com%2Fes%2Fbuscar%2Fresults%2Faeropuerto-de-berlin-tegel-berlin-alemania%2Flondres-reino-unido%2F2020-10-01_2020-10-31%2F2020-10-01_2020-10-31%2F&activeStep=0&currency=usd&direct=true&flightsId=1aae22f5486f0000cb803249_0-22f51aae488300004fee2b75_0&handBags=0&holdBags=0&locale=es&passengers=1&price=84&searchType=return&token=AVuyTQLIzYFAZw38lBIuAukyB3lQ8SJ8A_JTOxndLar-SH5HBraeC8SprVRaRnXK_7pA3bNZS-BfKt-6lrXbLJLRzcdi3hCeFj18t6a4aEim26OfAxP3YzxpbKLW5nlfW8PFKoraDB716zY9Mp5L1mu3DsaRHpooj7GfMWKS1xvJRNClu9pNpPjyCZPViMcWDjmq3RI9toyrMoghhkCKOBoZzH6K15-n0vlHECf2w64ZXSggTwizsyT8ztIZrEogvYPaSRrjRjbj2WNbXyrGHYAPfwcC0DRZTw_NQvxZhVWt_Fy4egiwNy3RdVBXB0ter3Sp2OlIA4ZmivEuOTWjwVNLZbKhBXQ120GciCjZKyjwunOWZl3wY3P8Xy_i7f-tD6nAAC5rYwf0x77_FTQBo-SSHo1layJm3Rg6hBK_j_P47-Opl2RyiO60D1EDDFrItXJHTb41NQxfJPPY-cWmFmhll_h4R2CRO32Dnx3yMOeIvvw65PospSHl2lDQjiPQ7rr_zcKgn0NGgMQ0-Rj47cc2bhhTQIZ4c-1h6mqW4CYygzJ_gURCAF83cMCS3PNbZ5z4mzE1pQQhzaBoIcJKz5K5CFz-344Z01oAP28eb-S6EtA-h7-YUuX9coLXok90yYYSLOpLOgyRVkvY_wk9eQZM4IsErMprY4nZRx_Oe37dt3AcGup-3wFZWz79l74Nc');
    }
}

module.exports = new RegistroPage();
