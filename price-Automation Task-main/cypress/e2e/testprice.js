/// <reference types="Cypress" />

describe('Total Old Prices And New Orices', () => {
    it('find elements', () => {
        cy.visit("https://www.automationteststore.com/")
        
        let totalOldPrice = 0; 
        let totalNewPrice = 0; 
       
        cy.get('#special > .container-fluid').find('.pricenew').each(($element) => {
            
            const newPrice = parseFloat($element.text().replace("$", ""));
            cy.log(newPrice);
            totalNewPrice += newPrice;
        }).then(() => {
            cy.get('#special > .container-fluid').find('.priceold').each(($element) => {
                  const oldPrice = parseFloat($element.text().replace("$", ""));
                cy.log(oldPrice);   
                totalOldPrice += oldPrice;
            }).then(() => {
                const formattedTotalOldPrice = totalOldPrice.toFixed(2);
                const formattedTotalNewPrice = totalNewPrice.toFixed(2);
                window.alert("Total Old Price Is $" + formattedTotalOldPrice);
                window.alert("Total New Price Is $" + formattedTotalNewPrice);
            });
        });
    });
});
