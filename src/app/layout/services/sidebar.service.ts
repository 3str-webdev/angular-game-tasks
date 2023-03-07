import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isOpen: boolean = false;

  constructor() {}

  public get openState() {
    return this.isOpen;
  }

  public open() {
    this.isOpen = true;
  }

  public close() {
    this.isOpen = false;
  }
}
