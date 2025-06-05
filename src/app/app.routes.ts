import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './maincontent/hero/hero.component';
import { AboutMeComponent } from './maincontent/about-me/about-me.component';
import { SkillsComponent } from './maincontent/skills/skills.component';
import { ProjectsComponent } from './maincontent/projects/projects.component';
import { ContactComponent } from './maincontent/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MaincontentComponent } from './maincontent/maincontent.component';

export const routes: Routes = [
    { path: 'header', component: HeaderComponent },
    { path: 'hero', component: HeroComponent },
    { path: 'about', component: AboutMeComponent},
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectsComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'footer', component: FooterComponent},
    { path: '', component: MaincontentComponent},
];