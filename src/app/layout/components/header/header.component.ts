import { SidebarService } from './../../services/sidebar.service';
import { Component } from '@angular/core';
import { tuiHintOptionsProvider } from '@taiga-ui/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [
    tuiHintOptionsProvider({
      icon: 'tuiIconGithubLarge',
    }),
  ],
})
export class HeaderComponent {
  constructor(public sidebarService: SidebarService) {}
}
