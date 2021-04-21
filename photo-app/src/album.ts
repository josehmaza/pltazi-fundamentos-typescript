import {Item} from './item';
import {Picture} from './picture'

export class Album extends Item{
  
  private _pictures: Picture[]; 
  
  constructor(id: number, title: string){
    super(id, title)
    this._pictures = []
  } 

  public get pictures(): Picture[] {
    return this._pictures;
  }
  public set pictures(value: Picture[]) {
    this._pictures = value;
  }

  addPicture(picture: Picture) {
    this.pictures.push(picture)
  }
}


