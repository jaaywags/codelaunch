import { Component } from '@angular/core';
import { RouteItem } from '../../types/RouteItem';
import { NavBarItemComponent } from '../nav-bar-item/nav-bar-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavBarItemComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  routes: RouteItem[] = [
    {
      id: "1",
      name: "HOME",
      route: "/"
    },
    {
      id: "2",
      name: "ABOUT",
      route: "/about"
    },
    {
      id: "3",
      name: "CURATION",
      route: "/curation"
    },
    {
      id: "4",
      name: "WHY",
      route: "/why"
    },
    {
      id: "5",
      name: "HOF",
      route: "/hof"
    },
    {
      id: "6",
      name: "BLOG",
      route: "/blog"
    },
    {
      id: "7",
      name: "FAQ",
      route: "/faq"
    },
    {
      id: "8",
      name: "RULES",
      route: "/rules"
    },
    {
      id: "9",
      name: "INVESTORS",
      route: "/investors"
    },
  ];
}
