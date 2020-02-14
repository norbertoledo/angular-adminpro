import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface Ajustes{
  themePath: string;
  themeName: string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    themePath: 'assets/css/colors/default.css',
    themeName: 'default',
  }


  constructor( @Inject(DOCUMENT) private _document ) {
    this.getAjustes();
   }


  setAjustes(){
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  getAjustes(){
    const data: Ajustes = JSON.parse(localStorage.getItem('ajustes'));
    if(data){
      this.ajustes = data;
      //console.log(this.ajustes);
    }else{
      //console.log('utilizando valores por defecto');
    }
    this.setTheme(this.ajustes.themeName);

  }

  setTheme(newTheme:string){

    let newPath:string = `assets/css/colors/${newTheme}.css`;
    this._document.getElementById('theme').setAttribute('href', newPath);

    this.ajustes.themePath = newPath;
    this.ajustes.themeName = newTheme;
    this.setAjustes();
  }

}


