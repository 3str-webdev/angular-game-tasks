import { SidebarService } from './../../services/sidebar.service';
import {
  UserRouting,
  IUserRouting,
} from '@shared/constants/userRouting';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
})
export class SidebarComponent {
  public readonly routes: IUserRouting[] = UserRouting;

  constructor(public sidebarService: SidebarService) {}
}
