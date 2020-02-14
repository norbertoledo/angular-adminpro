import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('inputProgreso') inputProgreso: ElementRef;
  @Input('titulo') leyenda:string = 'Leyenda';
  @Input('valor') progreso: number = 50;

  @Output() updateProgreso: EventEmitter<number> = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {

  }

  onInputChange(newValue:number){

    
    if(newValue <= 0 ) {
      this.progreso=0;
    }else if(newValue >= 100 ){
      this.progreso=100;
    }else{
      this.progreso = newValue;
    }

    this.inputProgreso.nativeElement.value = this.progreso;

    this.updateProgreso.emit(this.progreso);
    
    
  }

  cambiarValor(param:number){
    if(this.progreso<=0 && param < 0){
      this.progreso = 0;
      return;
    }
    if(this.progreso>=100 && param > 0){
      this.progreso = 100;
     return;
    }

    this.progreso = this.progreso + param;

    this.updateProgreso.emit(this.progreso);

    this.inputProgreso.nativeElement.focus();
  }
}
