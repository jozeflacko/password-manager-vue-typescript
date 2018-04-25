import firebase from 'firebase';

// https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c
export default class FirebaseProvider {
    
    private static config = {
        apiKey: "AIzaSyAWp5rc894VBoLOmj9GNKyE0KxQsFFWlqQ",
        authDomain: "passwordmanager-12e23.firebaseapp.com",
        databaseURL: "https://passwordmanager-12e23.firebaseio.com",
        projectId: "passwordmanager-12e23",
        storageBucket: "passwordmanager-12e23.appspot.com",
        messagingSenderId: "918700295069"
    };

    private static isStarted: boolean = false;
    
    public static start(callbackOnUserChange: Function) {
        if(! this.isStarted) {
            this.isStarted = true;
            firebase.initializeApp(this.config);

            firebase.auth().onAuthStateChanged(function(user) {
                callbackOnUserChange(user);                
            });
        }
    }
}



