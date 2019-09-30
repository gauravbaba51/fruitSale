import { TablePageModule } from './../table/table.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { SharetableComponent } from '../sharetable/sharetable.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // TablePageModule,
    
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page,SharetableComponent]
})
export class Tab2PageModule {}
