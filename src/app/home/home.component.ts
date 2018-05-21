import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Array<Post>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
    .subscribe(res => this.posts = res);
  }

}
