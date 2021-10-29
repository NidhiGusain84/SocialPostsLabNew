import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  thetitle: string = '';
	thethought: string = '';

  @Output() submitted: EventEmitter<Post> = new EventEmitter<Post>();
  constructor() { }

  ngOnInit(): void {
  }
  submitPost(){
    let newPost: Post = {title: this.thetitle, thought: this.thethought};
    this.submitted.emit(newPost);
  }

}
