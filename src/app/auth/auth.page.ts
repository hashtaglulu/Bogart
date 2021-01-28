import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = true;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
    ) 
    { }

  ngOnInit() 
  {
  }

  authenticate(email: string, password: string){
    this.isLoading = true;

    this.loadingCtrl
      .create({keyboardClose: true, message: 'Logging in...'})
      .then(loadingEl => {
        loadingEl.present();

        let authObs: Observable<AuthResponseData>;

        if(this.isLogin)
        {
          authObs = this.authService.login(email, password);
        } else
        {
          authObs = this.authService.signup(email, password);
        }
        authObs.subscribe(resData => 
          {
            console.log(resData); 
            this.isLoading = false;
            loadingEl.dismiss();
            this.router.navigateByUrl('/pubs/tabs/discover');
          }, 
        errRes => {
          loadingEl.dismiss();
          //get the code from errRes, we dig in, 
          //->create a human readable message here which by default could not sign you up
          const code = errRes.error.error.message;
          let message = 'Couldn`t sign up. pls try again';
          switch(code)
          {
            case 'EMAIL_EXISTS':
            {
              message = 'Adresa de email s-a folosit la crearea altui cont.'
              break;
            }
            case 'EMAIL_NOT_FOUND':
            {
              message = 'Adresa de email nu a putut fi găsită.'
              break;
            }
            case 'INVALID_PASSWORD':
            {
              message = 'Parola este incorectă.'
              break;
            }
          }
          this.showAlert(message); 
          }
      ); 
    });
  
  }

  onSwitchAuthMode(){
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm ){
    if(!form.valid)
    {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    console.log(email, password);

    this.authenticate(email, password);

    // if(this.isLogin) 
    // {
    //   //send request to login server
    // }
    // else 
    // {
    //   //send request to signup server
    // }
    console.log(form);
  }

  private showAlert(message: string)
  {
    this.alertCtrl.create({
      header: 'Autentificare eșuată',
      message: message, 
      buttons: ['OK']
    })
    .then(alertEl => alertEl.present());
  }

}
