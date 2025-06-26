import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { PeriodicElement } from '../../shared/periodic-element.model';

@Component({
  selector: 'app-edit-element-dialog',
  standalone: true,
  templateUrl: './edit-element-dialog.html',
  styleUrls: ['./edit-element-dialog.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class EditElementDialog {
  editedElement: PeriodicElement = { ...inject(MAT_DIALOG_DATA) };

  private dialogRef: MatDialogRef<EditElementDialog> = inject(MatDialogRef);

  onSave() {
    this.dialogRef.close(this.editedElement);
  }
  onCancel() {
    this.dialogRef.close();
  }
}
