import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DpService {

  constructor(private fs:Firestore) { }

AddToFirebase(items:any,collectionName:string){
  let collectionCart=collection(this.fs,collectionName);
return  addDoc(collectionCart,items);
}
}
