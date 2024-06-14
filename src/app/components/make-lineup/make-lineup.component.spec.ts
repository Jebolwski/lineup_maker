import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeLineupComponent } from './make-lineup.component';

describe('MakeLineupComponent', () => {
  let component: MakeLineupComponent;
  let fixture: ComponentFixture<MakeLineupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeLineupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeLineupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
