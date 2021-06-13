import { Component, HostBinding, OnInit } from '@angular/core';
import { fade } from '../../animations/fade-animation/fade';
import { ModalConfig } from './interfaces/modal-config.interface';
import { ModalRef } from './models/modal-ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade]
})
export class ModalComponent implements OnInit {

  @HostBinding('@fade') fade = true;
  public modalConfig: ModalConfig
  public modalRef: ModalRef;

  constructor() { }

  ngOnInit(): void {
  }
}
