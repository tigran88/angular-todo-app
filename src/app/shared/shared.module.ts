import { NgModule} from '@angular/core';

import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule {}
