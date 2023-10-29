import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name: string = 'Felipe';
  age: number = 33;
  job: string = 'programmer';
  email: string = 'felipe@gmail.com';

  constructor() {}

  ngOnInit(): void {}
}
