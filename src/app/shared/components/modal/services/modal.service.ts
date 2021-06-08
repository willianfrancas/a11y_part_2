import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from "@angular/core";
import { BodyInjectorService } from "src/app/shared/services/body-injector..service";
import { ModalConfig } from "../interfaces/modal-config.interface";
import { ModalComponent } from "../modal.component";

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
    return new ModalRef(componentRef);
  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }
}

export class ModalRef {

  constructor(private componentRef: ComponentRef<ModalComponent>) { }

  public close(): void {
    console.log('closed called');
    this.componentRef.destroy();
  }
}
