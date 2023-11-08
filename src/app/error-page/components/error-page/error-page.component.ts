import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent {
  constructor(public router: Router) {}
  ngOnInit(): void {
    this.changePage();
    if (navigator.onLine == false) {
      document.getElementById('h')!.innerHTML="No internet";
      document.getElementById('p')!.innerHTML="Checking the network cables, modem, and router \n Reconnecting to Wi-Fi";

    }
  }

  changePage() {
    setInterval(() => {
      this.router.navigate(['proucts']).then(() => {
        window.location.reload();
      });
    }, 6000);
  }
}
