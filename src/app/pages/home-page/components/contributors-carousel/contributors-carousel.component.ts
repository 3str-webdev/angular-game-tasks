import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contributors-carousel',
  templateUrl: './contributors-carousel.component.html',
  styleUrls: ['./contributors-carousel.component.less'],
})
export class ContributorsCarouselComponent implements OnInit {
  public index: number = 0;

  constructor() {}

  ngOnInit() {}
}
