import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IframeModelComponent } from '../iframe-model/iframe-model.component';

@Component({
  selector: 'app-dpe',
  templateUrl: './dpe.component.html',
  styleUrls: ['./dpe.component.scss'],
})
export class DPEComponent {
  isModalVisible: boolean = false;
  modalRef!: DynamicDialogRef;

  constructor(private dialog: DialogService) {}
  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  openDialogwithIframe() {
    this.modalRef = this.dialog.open(IframeModelComponent, {
      style: {
        'min-width': '30%',
        'max-width': '100%',
        'min-height': 'max-content',
        'overflow-x': 'hidden',
      },
      baseZIndex: 2000,
      data: {
        title: 'Storage Location View',
      },
      closable: true,
    });
  }
}
