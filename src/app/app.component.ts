import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-crm';
  public href = '';


  constructor(public router: Router, public authService: AuthenticationService){

    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        this.href = this.router.url;
        console.log('current url :', this.href)
        if (this.href == '/'  || this.href =='/sign-up') {
          document.getElementById('drawer')?.classList.add('d-none');
        } else if (this.href != '/'  && this.href !='/sign-up') {
          document.getElementById('drawer')?.classList.remove('d-none');
        }
      }
  });
  }


  logout(){
    this.authService.logout().subscribe(() => {
      this.router.navigate(['']);
    });
  }

  goToLogin(){
    console.log('works');
    this.router.navigateByUrl('/');
  }
}
