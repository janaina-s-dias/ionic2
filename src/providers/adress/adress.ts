import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
 
/*
  Generated class for the AdressProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdressProvider {
  private PATH='adress/';

  constructor(private db: AngularFireDatabase) {
    console.log('Hello AdressProvider Provider');
  }

  getAll(){
    return this.db.list(this.PATH, ref=> ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes =>{
         return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
    .map(c => {
    return { key: c.key, ...c.payload.val() };
    });
  }
    
  save(adress: any) {
    return new Promise((resolve, reject) => {
    if (adress.key) {
      this.db.list(this.PATH)
      .update(adress.key, { name: adress.name, location: adress.location })
      .then(() => resolve())
      .catch((e) => reject(e));
    } else {
      this.db.list(this.PATH)
      .push({ name: adress.name, location: adress.location })
      .then(() => resolve());
      }
    })
    }

    remove(key: string) {
      return this.db.list(this.PATH).remove(key);
    }
   

}
