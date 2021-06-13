import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  // public firstName = 'William';
  public modalRef: ModalRef;
  public subscribeNews = false;
  public form: FormGroup;

  constructor(private modalService: ModalService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['William', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      info: [false,]
    })
  }
  showModal() {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }

  submit() {
    if(this.form.invalid) return;
    console.log(this.form.value);
    this.modalRef.close();
  }
}
