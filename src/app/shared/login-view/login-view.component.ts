import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
@Component({
    selector: 'app-login-view',
    templateUrl: './login-view.component.html',
    styleUrls: ['./login-view.component.css'],
})
export class LoginViewComponent implements OnInit {
    formLogin!: FormGroup;
    constructor(private router: Router, private messagesService: MessagesService) {}

    ngOnInit(): void {
        this.formLogin = new FormGroup({
            login: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
        });
    }

    get login() {
        return this.formLogin.get('login')!;
    }

    get password() {
        return this.formLogin.get('password')!;
    }

    submit() {
        const submittedLogin = this.login.value;
        const submittedPass = this.password.value;

        if (submittedLogin === 'Admin' && submittedPass === '1234') {
            this.router.navigate(['/crud']);
        }
        else{
            this.messagesService.add('Usuário e/ou Senha incorretos!');
        }
    }
}
