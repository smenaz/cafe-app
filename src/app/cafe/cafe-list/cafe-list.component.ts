import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = [];
  totalCafeOrigen: number = 0;
  totalCafeBlend: number = 0;

  constructor(private cafeService: CafeService) { }

  ngOnInit() {
    this.getCafesAvaiables();
  }

  getCafesAvaiables(): void {
    this.cafeService.getCafesAvaiables().subscribe((cafes) => {
      this.cafes = cafes;
      this.totalCafeOrigen = cafes.filter(cafe => cafe.tipo === "Café de Origen").length;
      this.totalCafeBlend = cafes.filter(cafe => cafe.tipo === "Blend").length;
    });
  }

}
