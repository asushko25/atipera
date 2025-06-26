import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [provideAnimations(), importProvidersFrom(MatDialogModule)],
}).catch(console.error);
