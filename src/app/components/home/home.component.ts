import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {
    this.getData();
  }

  getData() {
    fetch('http://localhost:8000/api/produto')
      .then((data) => data.json())
      .then((data) => console.log(data));
  }
}
