import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ComplementosComponent } from './pages/complementos/complementos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    SkillsComponent,
    ExperienciaComponent,
    FooterComponent,
    ComplementosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
