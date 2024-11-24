import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.css'
})
export class UserAccountComponent {

  public ProfilImage: string = 'assets/UserImage/profil.png'
  OwnerHouses!: any[];


  constructor(private route: ActivatedRoute, private router: Router) { }





  gotonotification() {
    this.router.navigate(['/compte/Notifications']);
  }
  gotofavoris() {
    this.router.navigate(['/compte/Messages']);
  }
  gotoparametres() {
    this.router.navigate(['/compte/Parametres']);
  }


  goto_add_announcement() {
    this.router.navigate(['add-immo']);
  }


  showDetails(house: any) {

  }



  ModifierAnnonce(house: any) {

  }

  SupprimerAnnonce(house: any) {

  }


}
