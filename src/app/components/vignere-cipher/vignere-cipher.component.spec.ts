import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VignereCipherComponent } from './vignere-cipher.component';

describe('VignereCipherComponent', () => {
  let component: VignereCipherComponent;
  let fixture: ComponentFixture<VignereCipherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VignereCipherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VignereCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
