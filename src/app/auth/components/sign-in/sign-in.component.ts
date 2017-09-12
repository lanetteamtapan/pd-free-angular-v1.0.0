import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth.service';


@Component({
    selector: 'app-sign-in',
    styleUrls: ['./sign-in.component.scss'],
    templateUrl: './sign-in.html'
})

export class SignInComponent {
    constructor(private auth: AuthService, private router: Router) {
    }

    signInAnonymously(): void {
        this.auth.signInAnonymously()
            .then(() => this.postSignIn());
    }

    signInWithFacebook(): void {
        this.auth.signInWithFacebook()
            .then(() => this.postSignIn());
    }

    signInWithGithub(): void {
        this.auth.signInWithGithub()
            .then(() => this.postSignIn());
    }

    signInWithGoogle(): void {
        this.auth.signInWithGoogle()
            .then(() => this.postSignIn());
    }

    signInWithTwitter(): void {
        this.auth.signInWithTwitter()
            .then(() => this.postSignIn());
    }

    signInWithPhone(): void {
        this.auth.signInWithPhone()
            .then(() => this.postSignIn());
    }

    private postSignIn(): void {
        this.router.navigate(['/dashboard']);
    }
}
