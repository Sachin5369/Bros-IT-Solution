// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [],
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.css'
// })
// export class NavbarComponent {

// }

import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 isScrolled = false;

@HostListener('window:scroll')
onScroll() {
  this.isScrolled = window.scrollY > 80;
}
 /* ---------- THEME ---------- */
  theme: 'light' | 'dark' = 'light';

/* ---------- MOBILE MENU ---------- */
  mobileMenuOpen = false;
 toggleTheme() {
  this.theme = this.theme === 'light' ? 'dark' : 'light';

  if (this.theme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}
toggleMobileMenu() {
  this.mobileMenuOpen = !this.mobileMenuOpen;
}

closeMobileMenu() {
  this.mobileMenuOpen = false;
}
  

}



