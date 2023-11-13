import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA_HjIy_F1wDbxHxFLBSFPIWLzVmIRxsW4",
  authDomain: "market-ae1b9.firebaseapp.com",
  projectId: "market-ae1b9",
  storageBucket: "market-ae1b9.appspot.com",
  messagingSenderId: "55258722065",
  appId: "1:55258722065:web:5af80aca0cf17a603766b0",
  measurementId: "G-YK2SXEFXB7"
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule, provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ]
})
export class DpModule { }
