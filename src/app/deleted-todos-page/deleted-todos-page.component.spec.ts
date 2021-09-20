import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedTodosPageComponent } from './deleted-todos-page.component';

describe('DeletedTodosPageComponent', () => {
  let component: DeletedTodosPageComponent;
  let fixture: ComponentFixture<DeletedTodosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedTodosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedTodosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
