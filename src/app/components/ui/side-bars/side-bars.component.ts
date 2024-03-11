import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bars',
  templateUrl: './side-bars.component.html',
  styleUrls: ['./side-bars.component.scss']
})
export class SideBarsComponent {
  items = [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
      icon: "fa fa-tachometer"
    },
    {
      title: "Realisations",
      path: "/admin/projects",
      icon: "fa fa-briefcase"
    },
    {
      title: "Compétences",
      path: "/admin/skills",
      icon: "fa fa-code"
    },
    {
      title: "Utilisateurs",
      path: "/admin/users",
      icon: "fa fa-users"
    },

  ]
}
