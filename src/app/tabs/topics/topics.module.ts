import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopicsPage } from './topics.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { TopicsPageRoutingModule } from './topics-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TopicsPageRoutingModule
  ],
  declarations: [TopicsPage]
})
export class TopicsPageModule {}
