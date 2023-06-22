describe("template spec", () => {
    it("has a fruit selector dropdown", () => {
        cy.visit("http://localhost:8000");
        cy.get('[data-testid="fruit-select"]').should("exist");
    });
});
