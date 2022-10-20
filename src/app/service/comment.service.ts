import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private host = environment.apiURL;

  constructor(private http: HttpClient) { }

  getWebsiteComments(websiteId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.host}/comment/get/website-comments/${websiteId}`);
  }

  commentOnWebsite(websiteId: number, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.host}/comment/website/${websiteId}`, {
      websiteId: comment.websiteId,
      post: comment.post 
    });
  }
}
