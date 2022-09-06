import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private menuController: MenuController, private alertController: AlertController) { }

  ngOnInit() {
  }
  

  


  mostrarMenu(){
    this.menuController.open('first');

}

  usuario={
  nombre:'',
  password:'',
  email:'',
  }


  onSubmit(){
  console.log('submit');
  console.log(this.usuario);
  }

  async input() {
    const alert = await this.alertController.create({
      header: 'Ingrese sus correo de recuperación.',
      buttons: ['OK'],
      inputs: [
        { type: 'email',
          placeholder: 'Correo',
        },
        
      ],
    });

    await alert.present();
  }

}


