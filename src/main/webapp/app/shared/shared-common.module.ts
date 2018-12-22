import { NgModule } from '@angular/core';

import { FitnessHubSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [FitnessHubSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [FitnessHubSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FitnessHubSharedCommonModule {}
