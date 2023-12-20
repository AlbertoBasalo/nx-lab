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

  it('renders', () => {
    cy.mount(PageTemplate, {
      componentProperties: {
        title: '',
      },
    });
  });
});
