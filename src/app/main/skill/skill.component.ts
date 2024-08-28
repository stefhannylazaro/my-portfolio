import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { options, options2 } from '../constant';
import { Skill } from 'src/app/models/skill';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  public currentSection = 'home';
  public customOptions: OwlOptions = options;
  public customOptions2: OwlOptions = options2;
  public skills!: Skill[];

  ngOnInit(): void {
    this.skills = [
      {
        imgSrc: "assets/img/js-logo.png",
        imgAlt: "javascript logo",
        title: "Javascript",
      },
      {
        imgSrc: "assets/img/typescript-logo.png",
        imgAlt: "typescript logo",
        title: "Typescript",
      },
      {
        imgSrc: "assets/img/angular-logo.png",
        imgAlt: "angular logo",
        title: "Angular",
      },
      {
        imgSrc: "assets/img/vue-logo.png",
        imgAlt: "vue.js logo",
        title: "Vue.js",
      },
      {
        imgSrc: "assets/img/jquery-logo.png",
        imgAlt: "jquery logo",
        title: "Jquery",
      },
      {
        imgSrc: "assets/img/html5-logo.png",
        imgAlt: "HTML5 logo",
        title: "HTML5",
      },
      {
        imgSrc: "assets/img/pug.png",
        imgAlt: "pug logo",
        title: "Pug",
      },
      {
        imgSrc: "assets/img/css3-logo.png",
        imgAlt: "CSS3 logo",
        title: "CSS3",
      },
      {
        imgSrc: "assets/img/sass-logo.png",
        imgAlt: "SASS logo",
        title: "SASS",
      },
      {
        imgSrc: "assets/img/bootstrap-logo.png",
        imgAlt: "bootstrap logo",
        title: "Bootstrap",
      },
      {
        imgSrc: "assets/img/tailwind-logo.png",
        imgAlt: "Tailwind CSS logo",
        title: "Tailwind CSS",
      },
      {
        imgSrc: "assets/img/jest-logo.png",
        imgAlt: "Jest logo",
        title: "Jest",
      },
      {
        imgSrc: "assets/img/git-logo.png",
        imgAlt: "Git logo",
        title: "Git",
      },
      {
        imgSrc: "assets/img/jira-logo.png",
        imgAlt: "logo Jira",
        title: "Jira",
      },
    ];
  }
}
