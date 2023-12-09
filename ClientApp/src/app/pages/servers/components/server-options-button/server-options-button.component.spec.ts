import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerOptionsButtonComponent } from './server-options-button.component';

describe('ServerOptionsButtonComponent', () => {
  let component: ServerOptionsButtonComponent;
  let fixture: ComponentFixture<ServerOptionsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerOptionsButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerOptionsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
