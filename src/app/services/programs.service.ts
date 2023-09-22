import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {


  programsSubject = new Subject<any[]>();
  dateCompSubject = new Subject<any[]>();
  nEtudeSubject = new Subject<any[]>();


  constructor() { }

  programs = [
    {
      "name": "Douane / Transit",
      "duration": "12"
    },
    {
      "name": "Impôts fiscalité",
      "duration": "18"
    },
    {
      "name": "Impôts trésor",
      "duration": "15"
    },
    {
      "name": "Banque finances",
      "duration": "24"
    },
    {
      "name": "Comptabilité",
      "duration": "18"
    },
    {
      "name": "Audit et contrôle de gestion",
      "duration": "24"
    },
    {
      "name": "Ponts et chaussées",
      "duration": "36"
    },
    {
      "name": "Géomètre topographe",
      "duration": "24"
    },
    {
      "name": "Construction bâtiment",
      "duration": "30"
    },
    {
      "name": "Collaborateur d'architecte",
      "duration": "24"
    },
    {
      "name": "Dessinateur projeteur",
      "duration": "18"
    },
    {
      "name": "Électricité bâtiment",
      "duration": "24"
    },
    {
      "name": "Électronique",
      "duration": "24"
    },
    {
      "name": "Délégué médical",
      "duration": "18"
    },
    {
      "name": "Auxiliaire de pharmacie",
      "duration": "12"
    },
    {
      "name": "Mines/géologie",
      "duration": "24"
    },
    {
      "name": "Environnement",
      "duration": "24"
    }
  ]
    ;



  dateComp = [
    {
      code: "281023",
      name: "Concours du 28 Octobre 2023",
    }
  ];


  listConcours = [
    {
      code: "281023",
      name: "Concours du 28 Octobre 2023",
    }
  ];


  nEtdute = [
    {
      code: "M",
      name: "Master ou Equivalent",
    },
    {
      code: "L",
      name: "Licence ou Equivalent",
    },
    {
      code: "BTS",
      name: "Brévet de Technicien Supérieur ou Equivalent",
    },
    {
      code: "BAC",
      name: "Baccalauréat ou Equivalent",
    },
    {
      code: "PROB",
      name: "Probatoire ou Equivalent",
    },
    {
      code: "BEPC",
      name: "BEPC ou Equivalent",
    }
  ];

  emitProgramsSubject() {
    this.programsSubject.next(this.programs.slice());
  }

  emitDateSubject() {
    this.dateCompSubject.next(this.dateComp.slice());
  }

  emitnEtudeSubject() {
    this.nEtudeSubject.next(this.nEtdute.slice());
  }

}
