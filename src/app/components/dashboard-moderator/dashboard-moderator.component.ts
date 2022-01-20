import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-moderator',
  templateUrl: './dashboard-moderator.component.html',
  styleUrls: ['./dashboard-moderator.component.css']
})
export class DashboardModeratorComponent implements OnInit {
  content?: string;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getModeratorBoard().subscribe({
      next: data =>{
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }

}
