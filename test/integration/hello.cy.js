describe("Column", () => {
  before(() => {
    cy.visit("/web-pages/hello.html");
  });

  context("Margins", () => {
    it("h1 top", () => {
      cy.get("h1")
        .should("have.css", "margin-top", "10px");
    });
    it("h1 bottom", () => {
      cy.get("h1")
        .should("have.css", "margin-bottom", "11px");
    });

    it("p1 top", () => {
      cy.get("p")
        .should("have.css", "margin-top", "8px");
    });
    it("p1 bottom", () => {
      cy.get("p")
        .should("have.css", "margin-bottom", "18px");
    });
  });
});

