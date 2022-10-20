import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'find',
        loadChildren: () => import('./find/find.module').then(m => m.FindPageModule)
      },
      {
        path: 'topics',
        loadChildren: () => import('./topics/topics.module').then(m => m.TopicsPageModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/find',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/find',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
