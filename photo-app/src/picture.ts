import {Item} from './item'
import {PhotoOrientation} from './photo-orientation'
export class Picture extends Item{
  public static photoOrientation = PhotoOrientation
  //Propiedades

  constructor(id: number, title: string, private _date: string, private _orientation: PhotoOrientation){
    super(id, title);
  }
  // Comportamiento

  toString(){
    return `[id: ${this.id}, title: ${this.title} orientation: ${this.orientation}]`
  }
  get orientation(){
    return this._orientation
  }
  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation
  }
}
