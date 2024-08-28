import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})

export class WorkComponent implements OnInit{
  public projects!: Project[];

  ngOnInit(): void {
    this.projects = [
      {
        name: "Interbank",
        link: "https://interbank.pe/",
        imgSrc: "assets/img/interbank-web.png",
        imgAlt: "Interbank.pe",
      },
      {
        name: "Intercorp Financial Services",
        link: "https://ifs.com.pe/",
        imgSrc: "assets/img/ifs-web.png",
        imgAlt: "Intercorp Financial Services",
      },
      {
        name: "Scharff",
        link: "https://www.holascharff.com/",
        imgSrc: "assets/img/scharff-web.png",
        imgAlt: "Scharff",
      },
      {
        name: "Janaq",
        link: "https://www.janaq.com",
        imgSrc: "assets/img/janaq-web.png",
        imgAlt: "Janaq",
      },
      {
        name: "Iteprevengo",
        link: "https://iteprevengo.com/",
        imgSrc: "assets/img/itprevengo-web.png",
        imgAlt: "Iteprevengo",
      },
      {
        name: "Hardtech",
        link: "https://hardtech.pe/",
        imgSrc: "assets/img/hardtech-web.png",
        imgAlt: "Hardtech",
      },
      {
        name: "Redcoach",
        link: "https://www.redcoachusa.com/",
        imgSrc: "assets/img/redcoach-web.png",
        imgAlt: "Redcoach",
      },
      {
        name: "Mi portafolio",
        link: "",
        imgSrc: "assets/img/portfolio-web.png",
        imgAlt: "portafolio de Stefdev",
      },
      {
        name: "Task organizer app",
        link: "#",
        imgSrc: "assets/img/todoapp-web.png",
        imgAlt: "My day app",
      },
    ];
  }
}
