import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../../environments/environment';

export const firebaseConfig = {
    apiKey: 'AIzaSyDbbdeoX6FKnn5eY7ISG6N75jOjac9AdGU',
    authDomain: 'fir-demo-9f1e7.firebaseapp.com',
    databaseURL: 'https://fir-demo-9f1e7.firebaseio.com',
    projectId: 'fir-demo-9f1e7',
    storageBucket: 'fir-demo-9f1e7.appspot.com',
    messagingSenderId: '566363389942'
}


@NgModule({
    imports: [
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(firebaseConfig)
    ]
})
export class FirebaseModule {
}
