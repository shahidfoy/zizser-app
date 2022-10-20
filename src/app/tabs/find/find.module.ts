import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FindPage } from './find.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { FindPageRoutingModule } from './find-routing.module';
import { UnescapePipe } from '../../pipe/unescape-pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    FindPageRoutingModule
  ],
  declarations: [FindPage, UnescapePipe]
})
export class FindPageModule {}
