import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictionListComponent } from './restriction-list.component';

describe('RestrictionListComponent', () => {
  let component: RestrictionListComponent;
  let fixture: ComponentFixture<RestrictionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestrictionListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestrictionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
