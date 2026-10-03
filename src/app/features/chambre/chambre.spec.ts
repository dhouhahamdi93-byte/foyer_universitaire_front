import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chambre } from './chambre';

describe('Chambre', () => {
  let component: Chambre;
  let fixture: ComponentFixture<Chambre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chambre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chambre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
