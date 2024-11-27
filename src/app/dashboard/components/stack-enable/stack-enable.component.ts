import { Component } from '@angular/core';

@Component({
  selector: 'app-stack-enable',
  templateUrl: './stack-enable.component.html',
  styleUrls: ['./stack-enable.component.scss']
})
export class StackEnableComponent {
  

  openVisualizer(){
    const visualizerManager: any = (window as any).WarehouseVisualizerManager;
    const warehouseId = "AFTW";
    const locationId = "bin_4";
    visualizerManager.addWarehouse(warehouseId);
    visualizerManager.showLocation({
        locationId: locationId,
        warehouseId: warehouseId,
        modal: true
    });
  }

}
