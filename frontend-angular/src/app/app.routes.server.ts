import { RenderMode, ServerRoute } from '@angular/ssr';
import { routes } from './app-routing.module';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
