import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Observable<any[]>;
  cuisines: Observable<any[]>;

  constructor(public navCtrl: NavController, afDB: AngularFireDatabase, afS: AngularFirestore) {
    this.items = afDB.list('cuisines').valueChanges();
    this.cuisines = afS.collection('cuisines').valueChanges();
    console.log('db values:', this.items);
    console.log('db values:', this.cuisines);
  }

}
