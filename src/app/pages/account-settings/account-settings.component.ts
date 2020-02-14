import { Component, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit, AfterViewInit {

  @ViewChildren('elementTheme') elements: QueryList<ElementRef>;

  constructor( public _settings:SettingsService ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit():void{
    console.log('elements: ',this.elements);
    this.setCheck(this._settings.ajustes.themeName);
  }

  setTheme(newTheme:string){
    this.deleteCheck(newTheme);
    this._settings.setTheme(newTheme);
  }

  deleteCheck(newTheme:string){
    this.elements.map( (el:ElementRef) => {
      el.nativeElement.classList.remove('working');
    });
    this.setCheck(newTheme);
  }

  setCheck(newTheme:string){

    const elem:any = this.elements.find( (el:ElementRef) => el.nativeElement.attributes['data-theme'].value === newTheme);
    elem.nativeElement.classList.add('working');
  }



}
