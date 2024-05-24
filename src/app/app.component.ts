import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';


interface Item {
  name:String,
};


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  CommonModule,
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  items: Observable<Item[]> | undefined;
  firestore: Firestore = inject(Firestore);

  constructor(){
    const itemCollection = collection(this.firestore, 'items');
    this.items = collectionData(itemCollection) as Observable<Item[]>;
  }
  
}
