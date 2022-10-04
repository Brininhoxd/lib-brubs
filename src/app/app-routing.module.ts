import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

export function loadViews() {
  const children = import('./views/views.module').then(m => m.ViewsModule)
  return children
}

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'view',
    loadChildren: loadViews
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
