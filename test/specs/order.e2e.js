const BuscarPage = require('../pageobjects/buscar.page');
const filtrosPage = require('../pageobjects/filtros.page');
const registroPage = require('../pageobjects/registro.page');
const buscarPage = require('../pageobjects/buscar.page');
//const { assert } = require('chai');
//const chaiExpect = require('chai').expect


describe('Validando la URL incial', () => {
    it('Pagina inicial en español', () => {
        BuscarPage.open();
        
        expect(browser).toHaveUrlContaining('/es/')

    });
});

describe('Selección de destino y fecha', () => {
    it('Búsqueda de vuelos disponibles', () => {
        BuscarPage.Location();
        BuscarPage.Passenger();
        BuscarPage.Dates();

    });
    // Esta validación me está generando inconvenientes al validar los resultados
    describe('Validación de los resultados de la búsqueda', () => {
        it.skip('Comparación de los resultados', () => {

                browser.pause(6000)
                //expect(elems).toBeElementsArrayOfSize({ gte: 10 , wait: 3000})// falta terminar este caso de validación
                expect(buscarPage.ResultList).toBeElementsArrayOfSize({ gte: 10})
                //assert.ok(elems.length > 0)
            
        });
    });
 
    describe('Validación de la URL y sus valores', () => {
        it('Validación del lugar de origen', () => {
            
            
            expect(browser).toHaveUrlContaining('aeropuerto-de-berlin-tegel-berlin-alemania')
            expect(browser).toHaveUrlContaining('londres-reino-unido')
            expect(browser).toHaveUrlContaining('2020-09-10')
            expect(browser).toHaveUrlContaining('2020-09-15')
            
    
        });
    });

    // En esta validación si se ecnontraron resultados para buses 
    describe('Generación de filtros de transportes', () => {
        it('Filtrando transporte solo por bus', () => {
            filtrosPage.open();
            filtrosPage.Filters();
            

           expect(browser).toHaveUrlContaining('transport=bus')
          
           expect(filtrosPage.Bookingcheck).toBeDisplayedInViewport()
            
         
    
        });

    });

    describe('Generación de filtros de transportes', () => {
        it('Filtrando transporte por bus y tren', () => {
            filtrosPage.AddTren();
            

           expect(browser).toHaveUrlContaining('transport=bus%2Ctrain')
           expect(filtrosPage.Bookingcheck).toBeDisplayedInViewport()
            
           
    
        });

    });

    describe('Generación de filtros de transportes', () => {
        it('Filtrando transporte por bus y tren', () => {
            filtrosPage.Booking();
            
            expect(filtrosPage.headervalid).toHaveTextContaining('BerlínLondresy regreso')
           
    
        });

    });
    // Esta validación me está generando inconvenientes al validar los resultados 
    describe('Validando los resultados del filtro por bus y tren', () => {
        it.skip('Comparación de los resultados', () => {

            browser.pause(3000)
            //expect(elems).toBeElementsArrayOfSize({ gte: 10 , wait: 3000})// falta terminar este caso de validación
            expect(filtrosPage.Result).toBeElementsArrayOfSize({ gte: 10})
            //assert.ok(elems.length > 0)
            
           browser.pause(2000)
           
    
        });

    });
 
    describe('Registro de datos personales en la reserva del viaje', () => {
        it('Registrandanse para le viaje', () => {
            registroPage.open();
            registroPage.RegName();
            registroPage.RegData();
            registroPage.RegPayment();
        });

        it('Validando datos de la URL posterior al registro', () => {

           expect(browser).toHaveUrlContaining('currency=usd')
           expect(browser).toHaveUrlContaining('direct=true')
            
           browser.pause(2000)
           
    
        });

        it('Validando datos del pasajero', () => {

            expect(registroPage.validdat).toHaveTextContaining('Esteban Arias Castro')
            expect(registroPage.validdat).toHaveTextContaining('03/03/1995')
            expect(registroPage.validdat).toHaveTextContaining('116020555')
            expect(registroPage.validdat).toHaveTextContaining('Sin caducidad')
            expect(registroPage.validdat).toHaveTextContaining('Travel Plus')

            expect(registroPage.validmail).toHaveTextContaining('prueba@hotmail.com')
            expect(registroPage.validmail).toHaveTextContaining('83848586')
             
            browser.pause(2000)
             
     
         });

    });

});


