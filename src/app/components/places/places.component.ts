import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  acount: number = 0;
  statusOne: boolean = false;
  statusThree: boolean = false;
  statusFour: boolean = false;
  promo: boolean = false;

  constructor() { }

  ngOnInit() {
    document.getElementById('one').addEventListener('click', event => {
      this.statusOne = !this.statusOne;
      if (this.statusOne == true) {
        document.getElementById('one').style.backgroundColor = '#17a2b8'
        this.acount += 200;
        if (this.acount >= 600) {
          this.promo = !this.promo;
          this.acount = this.acount / 2;
        }
      } else {
        document.getElementById('one').style.backgroundColor = '#EAECEE'
        if (this.acount == 300) {
          this.promo = !this.promo;
          this.acount = this.acount * 2;
        }
        this.acount -= 200;
      }
    })

    document.getElementById('three').addEventListener('click', event => {
      this.statusThree = !this.statusThree;
      if (this.statusThree == true) {
        document.getElementById('three').style.backgroundColor = '#17a2b8'
        this.acount += 200;
        if (this.acount >= 600) {
          this.promo = !this.promo;
          this.acount = this.acount / 2;
        }
      } else {
        document.getElementById('three').style.backgroundColor = '#EAECEE'
        if (this.acount == 300) {
          this.promo = !this.promo;
          this.acount = this.acount * 2;
        }
        this.acount -= 200;
      }
    })

    document.getElementById('four').addEventListener('click', event => {
      this.statusFour = !this.statusFour;
      if (this.statusFour == true) {
        document.getElementById('four').style.backgroundColor = '#17a2b8'
        this.acount += 200;
        if (this.acount >= 600) {
          this.promo = !this.promo;
          this.acount = this.acount / 2;
        }
      } else {
        document.getElementById('four').style.backgroundColor = '#EAECEE'
        if (this.acount == 300) {
          this.promo = !this.promo;
          this.acount = this.acount * 2;
        }
        this.acount -= 200;
      }
    })
  }

}
