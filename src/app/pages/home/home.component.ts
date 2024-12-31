import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CarouselModule } from '@coreui/angular';
import { NgFor } from '@angular/common';

// import { NgFor } from '@angular/common';
// import { RouterLink } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule, CarouselModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: './assets/img/angular.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: './assets/img/react.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };
    this.slides[2] = {
      id: 2,
      src: './assets/img/vue.jpg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    };
  }
}
