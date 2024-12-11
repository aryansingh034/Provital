import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UnigenixDigitech';

  
  ngOnInit(): void {

    let nav_element = document.getElementsByClassName('mobile-nav-toggle');
    nav_element[0].addEventListener("click", this.onClick)

 

  }

  onClick(this: HTMLElement){
    //console.log("nav")
    let navbar = document.getElementsByClassName('navbar')
    navbar[0].classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
    
  }


}

