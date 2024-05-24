import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import {provideFirebaseApp, getApp, initializeApp} from '@angular/fire/app'
import {getFirestore, provideFirestore} from '@angular/fire/firestore'
import {getAuth, provideAuth} from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
  
    provideClientHydration(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp({
        apiKey: "AIzaSyBH3mUEq75KcNlgWhXme2_UAHlEaZOwSDM",
        authDomain: "utesocial-4228352-2.firebaseapp.com",
        databaseURL: "https://utesocial-4228352-2-default-rtdb.firebaseio.com",
        projectId: "utesocial-4228352-2",
        storageBucket: "utesocial-4228352-2.appspot.com",
        messagingSenderId: "412224092884",
        appId: "1:412224092884:web:832225e5b8d8d5f3a89941",
        measurementId: "G-Q6HBG6FW5S"
      }) ),

      provideFirestore(()=> getFirestore()),
      provideAuth(() => getAuth()),
    ])

  
  
  ]
};
