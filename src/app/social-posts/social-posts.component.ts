import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

	showNewPostForm: boolean =false;

  constructor() { }

  allPosts: Post[] = [
  	{title: 'Grand Circus', thought: 'Grand Circus is cool'},
  	{title: 'Ritual', thought: 'Ritual is a well developed app'},
  	{title: 'Scott', thought: 'Scott rides scooters'}

  ];



  ngOnInit(): void {
  }
  
toggleNewPostForm(){
	this.showNewPostForm = !this.showNewPostForm;
}

  onSubmit(post: Post){
this.allPosts.unshift(post);
this.showNewPostForm = false;
  }

  onDelete(post: Post){
  	let i = this.allPosts.indexOf(post)
  	this.allPosts.splice(i, 1);
  }

}


