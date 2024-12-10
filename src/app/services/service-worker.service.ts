import { Injectable } from '@angular/core';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService {
  private readonly UPDATE_CHECK_INTERVAL = 10 * 1000; // 10 seconds
  private readonly RETRY_INTERVAL = 5 * 1000; // 5 seconds

  constructor(
    private swUpdate: SwUpdate,
  ) {
    console.log('Service Worker Enabled:', this.swUpdate.isEnabled);
    this.initializeServiceWorkerUpdates();
  }

  private initializeServiceWorkerUpdates() {
    // Check if service workers are supported

    if (!this.swUpdate.isEnabled) {
      console.warn('Service Workers are not supported. This can happen if:');
      return;
    }

    // Initial update check
    this.checkForUpdates();

    // Periodic update checks
    this.setupPeriodicUpdateChecks();

    // Listen for version updates
    this.listenForVersionUpdates();
  }

  private checkForUpdates() {
    this.swUpdate.checkForUpdate().then((updateAvailable) => {
      console.log('Update check completed', updateAvailable);
      if (updateAvailable) {
        this.handleUpdateAvailable();
      }
    }).catch(err => {
      console.error('Error checking for updates', err);
      // Schedule a retry if update check fails
      setTimeout(() => this.checkForUpdates(), this.RETRY_INTERVAL);
    });
  }

  private setupPeriodicUpdateChecks() {
    interval(this.UPDATE_CHECK_INTERVAL).subscribe(() => {
      this.checkForUpdates();
    });
  }

  private listenForVersionUpdates() {
    this.swUpdate.versionUpdates.subscribe((event: VersionEvent) => {
      console.log('Version update event', event);

      switch (event.type) {
        case 'VERSION_DETECTED':
          console.log('New version detected');
          this.handleUpdateAvailable();
          break;
        case 'VERSION_READY':
          console.log('New version ready to activate');
          this.handleUpdateReady();
          break;
        case 'VERSION_INSTALLATION_FAILED':
          console.error('Version installation failed', event.error);
          break;
      }
    });
  }

  private handleUpdateAvailable() {
    const yes = prompt("update to new version");
    if (yes) {
      this.swUpdate.activateUpdate().then(() => {
        console.log('Update activated, reloading application');
        window.location.reload();
      }).catch(err => {
        console.error('Failed to activate update', err);
      });
    }
  }

  private handleUpdateReady() {
    const yes = prompt("update to new version");
    if (yes) {
      this.swUpdate.activateUpdate().then(() => {
        console.log('Update activated, reloading application');
        window.location.reload();
      }).catch(err => {
        console.error('Failed to activate update', err);
      });
    }
  }

  // private promptUserToUpdate() {
  //   this.swUpdate.activateUpdate().then(() => {
  //     console.log('Update activated, reloading application');
  //     window.location.reload();
  //   }).catch(err => {
  //     console.error('Failed to activate update', err);
  //   });
  // }
}