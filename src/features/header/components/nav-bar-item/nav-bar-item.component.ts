import { Component, Input } from '@angular/core';
import { RouteItem } from '../../types/RouteItem';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar-item.component.html',
  styleUrl: './nav-bar-item.component.scss'
})
export class NavBarItemComponent {
  @Input({ required: true }) route: RouteItem;
}
