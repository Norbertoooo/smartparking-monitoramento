import { Component, OnInit } from '@angular/core';
import {VagaModel} from './vaga.model';
import {VagaService} from './vaga.service';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.css']
})
export class VagaComponent implements OnInit {

  listaDeVaga: VagaModel[];
  constructor( private vagaService: VagaService) { }

  ngOnInit(): void {
    this.getStatus();
  }
  getStatus() {
   this.vagaService.listarStatus()
     .subscribe( (vaga) => { this.listaDeVaga = vaga; } );
  }
}
