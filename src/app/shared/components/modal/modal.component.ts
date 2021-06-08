import { Component, OnInit } from '@angular/core';
import { ModalConfig } from './interfaces/modal-config.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public modalConfig: ModalConfig

  constructor() { }

  ngOnInit(): void {
  }

}
