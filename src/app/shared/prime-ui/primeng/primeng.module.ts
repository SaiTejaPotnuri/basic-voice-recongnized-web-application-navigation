import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BadgeModule } from 'primeng/badge';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { PaginatorModule } from 'primeng/paginator';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ChipsModule } from 'primeng/chips';
import { DragDropModule } from 'primeng/dragdrop';
import { SidebarModule } from 'primeng/sidebar';
import { ListboxModule } from 'primeng/listbox';
import { ChipModule } from 'primeng/chip';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { OverlayModule } from 'primeng/overlay';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';

const primengComponents = [
  CommonModule,
  InputTextModule,
  ButtonModule,
  PasswordModule,
  TableModule,
  AvatarModule,
  OverlayPanelModule,
  BadgeModule,
  DynamicDialogModule,
  PaginatorModule,
  AutoCompleteModule,
  CalendarModule,
  TooltipModule,
  MultiSelectModule,
  InputSwitchModule,
  ChipsModule,
  DragDropModule,
  SidebarModule,
  ListboxModule,
  ChipModule,
  CheckboxModule,
  ProgressSpinnerModule,
  RadioButtonModule,
  OverlayModule,
  TagModule,
  DividerModule,
  DropdownModule,
];

@NgModule({
  declarations: [],
  imports: [primengComponents],
  exports: [primengComponents],
})
export class PrimengModule {}
