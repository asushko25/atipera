import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ElementsTable } from './components/elements-table/elements-table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ElementsTable],
  template: `<app-elements-table></app-elements-table>`,
})
export class App {}
