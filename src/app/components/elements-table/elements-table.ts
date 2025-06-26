import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import {
  PeriodicElement,
  ELEMENT_DATA,
} from '../../shared/periodic-element.model';
import { EditElementDialog } from '../edit-element-dialog/edit-element-dialog';

@Component({
  selector: 'app-elements-table',
  standalone: true,
  templateUrl: './elements-table.html',
  styleUrls: ['./elements-table.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    EditElementDialog,
  ],
})
export class ElementsTable {
  displayedColumns = ['position', 'name', 'weight', 'symbol', 'actions'];
  dataSource: PeriodicElement[] = [...ELEMENT_DATA];
  filteredData: PeriodicElement[] = [...ELEMENT_DATA];

  filterControl = new FormControl('');
  private dialog: MatDialog = inject(MatDialog);

  constructor() {
    this.filterControl.valueChanges
      .pipe(debounceTime(2000))
      .subscribe((value) => {
        this.applyFilter(value || '');
      });
  }

  applyFilter(value: string): void {
    const filterValue = value.trim().toLowerCase();
    this.filteredData = this.dataSource.filter((e) =>
      Object.values(e).some((v) =>
        v.toString().toLowerCase().includes(filterValue)
      )
    );
  }

  openEditDialog(element: PeriodicElement): void {
    const ref = this.dialog.open(EditElementDialog, {
      panelClass: 'edit-dialog-panel',
      data: element,
    });

    ref.afterClosed().subscribe((result?: PeriodicElement) => {
      if (result) {
        const idx = this.dataSource.findIndex(
          (e) => e.position === result.position
        );
        if (idx !== -1) {
          this.dataSource[idx] = result;
          this.dataSource = [...this.dataSource];
          this.applyFilter(this.filterControl.value || '');
        }
      }
    });
  }

  get filtered(): PeriodicElement[] {
    return this.filteredData;
  }
}
