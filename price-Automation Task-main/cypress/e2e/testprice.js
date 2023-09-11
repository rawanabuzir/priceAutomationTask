/// <reference types="Cypress" />

describe('Total Old Prices And New Prices', () => {
    it('calculate total old and new prices', () => {
        cy.visit("https://www.automationteststore.com/")
        
        let totalOldPrice = 0; 
        let totalNewPrice = 0; 

        cy.get('#special > .container-fluid')
            .find('.pricenew')
            .each(($element) => {
                const newPrice = parseFloat($element.text().replace("$", ""));
                cy.log(newPrice);
                totalNewPrice += newPrice;
            });

        cy.get('#special > .container-fluid')
            .find('.priceold')
            .each(($element) => {
                const oldPrice = parseFloat($element.text().replace("$", ""));
                cy.log(oldPrice);   
                totalOldPrice += oldPrice;
            });

        cy.then(() => {
            const formattedTotalOldPrice = totalOldPrice.toFixed(2);
            const formattedTotalNewPrice = totalNewPrice.toFixed(2);
            cy.log("Total Old Price Is $" + formattedTotalOldPrice);
            cy.log("Total New Price Is $" + formattedTotalNewPrice);
            // You can replace the log with other actions if needed.
        });
    });
});
