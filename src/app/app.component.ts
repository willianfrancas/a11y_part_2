import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('modal') modalTemplateRef: TemplateRef<any>;
  title = 'a11y-p2';
  public firstName = 'William';
  public modalRef: ModalRef;
  public subscribeNews = false;

  constructor(private modalService: ModalService) {}

  showModal() {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }
}
