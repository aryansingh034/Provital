import { Component, OnInit } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Router } from '@angular/router'
declare function test():any;
declare function dropdown(): any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

  constructor( private _router: Router) { }

  ngOnInit(): void {
  
    let nav_element = document.getElementsByClassName('mobile-nav-toggle');  
    nav_element[0].addEventListener("click", this.onClick)
    dropdown();

  }

  
  onClick(this: HTMLElement){  
    console.log("nav")  
    let navbar = document.getElementsByClassName('navbar') 
    console.log("nav-222")
    navbar[0].classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    console.log("list is still not there")
    this.classList.toggle('bi-x')
    console.log("list is still not thereeeeee")
    
  }


}
