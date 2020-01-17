import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsernamePageRoutingModule } from './username-routing.module';

import { UsernamePage } from './username.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsernamePageRoutingModule, ComponentsModule
  ],
  declarations: [UsernamePage]
})
export class UsernamePageModule {}
