import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsTable } from './elements-table';

describe('ElementsTable', () => {
  let component: ElementsTable;
  let fixture: ComponentFixture<ElementsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
