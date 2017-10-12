
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    public currentUser: any;
    users : any ;

    constructor() {
    }

    ngOnInit() {

      let user =JSON.parse(localStorage.getItem('currentUser'));
      this.currentUser = user.name;
        /*this.users = this.currentUser;*/
    }
/*
    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
      */
}