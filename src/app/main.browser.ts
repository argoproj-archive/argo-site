import 'rxjs/Rx';
import { decorateModuleRef } from './environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from './main';

platformBrowserDynamic()
    .bootstrapModule(MainModule)
    .then(decorateModuleRef)
    .catch(err => console.error(err));

if (module['hot']) {
    // Reload page if any angular module has changed. CSS changes will be injected without page reload.
    module['hot'].accept();
}
