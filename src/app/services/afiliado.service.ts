import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData } from '@angular/fire/firestore';
import Afiliado from '../interfaces/afiliado.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {

  constructor(private firestore: Firestore) { }

//metodo agregar
addAfiliado(afiliado: Afiliado){
  const referenciaAfiliado = collection(this.firestore, 'afiliado'); //acceder a las colecciones
  return addDoc(referenciaAfiliado, afiliado) //guarda el afiliado
  }
  
  //metodo traertodos
  getAfiliados(): Observable<Afiliado[]>{
    const afiliadoRef = collection(this.firestore,'afiliado'); //acceder a las colecciones
    return collectionData(afiliadoRef, { idField:'id',  }) as Observable<Afiliado[]>;//traer
  }

  //traer por id 
  getAfiliadoPorId(id: string): Observable<Afiliado> {
    const afiliadoRef = doc(this.firestore, 'afiliado', id); // referencia al documento
    return docData(afiliadoRef, { idField: 'id' }) as Observable<Afiliado>; // traer solo el documento
  }
 
 




}
