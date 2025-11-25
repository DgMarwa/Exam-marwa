import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';                // Nécessaire pour *ngFor
import { Post, PostService } from '../../services/post';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],                                 // Autorise *ngFor, *ngIf, etc.
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss'
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (data) => this.posts = data,
      error: (err) => console.error('Erreur chargement posts', err)
    });
  }
}