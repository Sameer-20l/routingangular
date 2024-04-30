import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
constructor(private route : ActivatedRoute){
console.log("user id is ",this.route.snapshot.paramMap.get('id')); // for dynamic routing
}
}
