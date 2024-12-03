import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  filters = {
    type: '',
    city: '',
    rooms: ''
  };

  // Array for room numbers
  roomNumbers = [1, 2, 3, 4, 5];

  constructor(private router: Router,) {

  }
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }



  gotodetails() {
    this.router.navigate(['details']);
  }








  applyFilters() {
    console.log('Filters Applied:', this.filters);
    this.closeModal(); // Close the modal after applying filters
  }
}
