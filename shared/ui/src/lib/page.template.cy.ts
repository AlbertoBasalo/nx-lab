import { TestBed } from '@angular/core/testing';
import { PageTemplate } from './page.template';

describe(PageTemplate.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(PageTemplate, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders with Title property', () => {
    cy.mount(PageTemplate, {
      componentProperties: {
        title: 'The title',
      },
    });
    cy.title().should('equal', 'The title');
  });

  it('renders an included subtitle content', () => {
    cy.mount(`<lab-page><div class="subtitle">The subtitle</div></lab-page>`, {
      imports: [PageTemplate],
    });
    cy.contains('The subtitle');
  });
});
