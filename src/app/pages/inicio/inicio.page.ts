import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

 
  constructor(private menuController: MenuController,
    private alertController: AlertController,) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async input() {
    const alert = await this.alertController.create({
      header: 'Ingrese sus credendiales de usuario',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Alias (max 8 characteres)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'password',
          placeholder: 'password',
            attributes:{
              maxlength: 8,
            }
        },
        
      ],
    });

    await alert.present();
  }
}
