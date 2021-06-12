import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from "@angular/core";
import { BodyInjectorService } from "src/app/shared/services/body-injector..service";
import { ModalConfig } from "../interfaces/modal-config.interface";
import { ModalComponent } from "../modal.component";
import { ModalRef } from "../models/modal-ref";

@Injectable()
export class ModalService {

  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    private injector: Injector,
    componentFactoryResolver: ComponentFactoryResolver,
    private bodyInjector: BodyInjectorService
  ) {
    this.componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  public open(modalConfig: ModalConfig): ModalRef {
    const componentRef = this.createComponentRef();
    componentRef.instance.modalConfig = modalConfig;
    console.log('open called');
    this.bodyInjector.stackBeforeAppRoot(componentRef);
    const modalRef = new ModalRef(componentRef);
    componentRef.instance.modalRef = modalRef;
    return modalRef;
  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }
}
