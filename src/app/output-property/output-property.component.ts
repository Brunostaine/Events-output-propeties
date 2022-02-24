import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  valor: number = 0

  incrementa() {
    this.valor++;
  }

  decrementa(){
    if(this.valor >= 1)
    this.valor--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
