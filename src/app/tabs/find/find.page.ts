import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Comment } from '../../model/comment';
import { WebsiteMetaData } from '../../model/website-metadata';
import { CommentService } from '../../service/comment.service';
import { WebsiteMetadataService } from '../../service/website-metadata.service';
import { timeFromNow } from '../../shared/date.utils';

@Component({
  selector: 'app-find',
  templateUrl: 'find.page.html',
  styleUrls: ['find.page.scss']
})
export class FindPage implements OnInit {

  @ViewChild('popover') popover;

  private readonly MAX_CHARS = 300;

  companyName = 'ZIZseR';
  url: string = 'https://www.investorsobserver.com/news/stock-update/should-you-accumulate-unity-software-inc-u-stock-tuesday-morning-2';
  websiteMetaData: WebsiteMetaData = new WebsiteMetaData();
  characterLimit = this.MAX_CHARS;
  comments: Comment[];
  isOpen = false;

  constructor(
    private commentService: CommentService,
    private toastController: ToastController,
    private websiteMetadataService: WebsiteMetadataService) {}

  ngOnInit(): void {}

  addPost(commentForm: NgForm): void {
    commentForm.value.websiteId = this.websiteMetaData.id;
    this.commentService.commentOnWebsite(commentForm.value.websiteId, commentForm.value).subscribe(
      (commentResponse: Comment) => {
        console.log('COMMENT');
        console.log(commentResponse);
        commentForm.resetForm();
        this.comments.unshift(commentResponse);
        this.characterLimit = this.MAX_CHARS;
      }, (err: HttpErrorResponse) => {
        console.error(err.error.message);
        this.presentToast('top', err.error.message);
      });
  }

  checkCharLength(postValue: string) {
    this.characterLimit = this.MAX_CHARS;
    this.characterLimit -= postValue.length;
  }

  presentPopover(event: Event) {
    this.popover.event = event;
    this.isOpen = true;
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3500,
      position: position
    });
    await toast.present();
  }

  retrieveWebsiteMetaData(): void {
    this.websiteMetadataService.retrieveWebsiteMetadata(this.url).subscribe(
      (metadata: WebsiteMetaData) => {
        this.websiteMetaData = metadata;
        this.getWebsiteComments(metadata.id);
      }, (err: HttpErrorResponse) => {
        console.error(err.error.message);
        this.presentToast('top', err.error.message);
      });
  }

  private getWebsiteComments(id: number) {
    this.commentService.getWebsiteComments(id).subscribe((comments: Comment[]) => {
      this.comments = comments;
      console.log('comments');
      console.log(this.comments);
    }, (err: HttpErrorResponse) => {
      console.error(err.error.message);
    });
  }

  timeFromNow(time: Date) {
    return timeFromNow(time);
  }
}
