import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
// import { provideGoogleAnalytics } from 'ngx-google-analytics';
// import { environment } from '../environment/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // provideGoogleAnalytics('G-XXXXXXXXXX'), // Your GA4 ID
    // provideGoogleAnalytics(environment.gaMeasurementId),
  ],
};
