import { Injectable } from '@angular/core';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import { ConfirmationService } from 'primeng/api';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService {
  private readonly UPDATE_CHECK_INTERVAL = 15 * 60 * 1000; // 15 minutes
  private readonly RETRY_INTERVAL = 5 * 60 * 1000; // 5 minutes

  constructor(
    private swUpdate: SwUpdate,
    private confirmationService: ConfirmationService
  ) {
    this.initializeServiceWorkerUpdates();
  }

  private initializeServiceWorkerUpdates() {
    // Check if service workers are supported
    if (!this.swUpdate.isEnabled) {
      console.log('Service Workers are not supported');
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
    this.confirmationService.confirm({
      message: 'A new version of the application is available. Would you like to update?',
      header: 'Update Available',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Update',
      rejectLabel: 'Cancel',
      accept: () => {
        this.promptUserToUpdate();
      }
    });
  }

  private handleUpdateReady() {
    this.confirmationService.confirm({
      message: 'A new version is ready. Reload to update?',
      header: 'Update Ready',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Reload',
      rejectLabel: 'Later',
      accept: () => {
        this.promptUserToUpdate();
      }
    });
  }

  private promptUserToUpdate() {
    this.swUpdate.activateUpdate().then(() => {
      console.log('Update activated, reloading application');
      window.location.reload();
    }).catch(err => {
      console.error('Failed to activate update', err);
    });
  }
}