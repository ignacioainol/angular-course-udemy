import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from '../../components/side-menu/side-menu';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, SideMenu],
  templateUrl: './dashboard-page.html',
})
export default class DashboardPage {}
