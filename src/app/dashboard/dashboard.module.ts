// src/app/dashboard/dashboard.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeDashboardComponent } from './screens/home-dashboard/home-dashboard.component';
import { DPEComponent } from './components/dpe/dpe.component';
import { PGTComponent } from './components/pgt/pgt.component';
import { SeamlessAssistComponent } from './components/seamless-assist/seamless-assist.component';
import { StackEnableComponent } from './components/stack-enable/stack-enable.component';
import { SharedModule } from '../shared/shared.module';
import { VoicebotComponent } from './components/voicebot/voicebot.component';
import { TranslateModule } from '@ngx-translate/core';
import { IframeModelComponent } from './components/iframe-model/iframe-model.component';

@NgModule({
  declarations: [HomeDashboardComponent, DPEComponent, PGTComponent, SeamlessAssistComponent, StackEnableComponent, VoicebotComponent, IframeModelComponent],
  imports: [CommonModule, DashboardRoutingModule,SharedModule,TranslateModule],
})
export class DashboardModule {}