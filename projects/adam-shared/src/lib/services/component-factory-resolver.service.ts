import { ComponentFactory, ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ComponentFactoryResolverService {

    componentFactory: ComponentFactory<any>;
    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    createPopup(component: any, viewContainerRef: ViewContainerRef) {
        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        let componentRef: any = viewContainerRef.createComponent(this.componentFactory);
        document.body.appendChild(componentRef.location.nativeElement);
        let subscription = componentRef.instance.closed.subscribe(() => {
            subscription.unsubscribe();
            componentRef.destroy();
            componentRef = null;
        });
        return componentRef.instance;
    }
}
