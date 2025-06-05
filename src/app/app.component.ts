import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollDownComponent } from './scroll-down/scroll-down.component';

import { HeroComponent } from './maincontent/hero/hero.component';
import { AboutMeComponent  } from './maincontent/about-me/about-me.component';
import { SkillsComponent } from './maincontent/skills/skills.component';
import { ProjectsComponent } from './maincontent/projects/projects.component';
import { ContactComponent } from './maincontent/contact/contact.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    ScrollDownComponent,
    MaincontentComponent,
    HeroComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
