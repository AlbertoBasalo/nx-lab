describe('activity-bookings', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('h1').contains(/Activity Bookings/);
  });

  it('should display header with title (Activity Bookings), home link (Home), user link (John Doe), activities link (Activities), and bookings link (Bookings)', () => {
    cy.get('header')
      .first()
      .within(() => {
        cy.get('h1').contains(/Activity Bookings/);
        cy.get('a').contains(/Home/);
        cy.get('a').contains(/John Doe/);
        cy.get('a').contains(/Activities/);
        cy.get('a').contains(/Bookings/);
      });
  });

  it('should display footer with author (Alberto Basalo), solution (Angular 17 Nx), and year(2023)', () => {
    cy.get('footer').contains(/Alberto Basalo/);
    cy.get('footer').contains(/Angular 17 Nx/);
    const currentYear = new Date().getFullYear();
    cy.get('footer').contains(currentYear);
  });
});
