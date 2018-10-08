import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Flashlight} from '@ionic-native/flashlight';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isOn: boolean=true;
  constructor(private flashlight: Flashlight, public navCtrl: NavController) {

  }

  async isAvailable():Promise<boolean>
  {
  try{
    return await this.flashlight.available();
  }catch(e){
    console.log(e);
  }
  }
/*
Toggle the flashlight to an on or off state
Get whether the flashligh is Availableif it is availalbe
toggle the Flashlighttoggle the 'isOn' variable
If it isnt
log out to the console
*/
  async toggleFlash():Promise<void>{
    try{
      let available = await this.isAvailable();
      if(available){
        await this.flashlight.toggle();
        this.isOn = !this.isOn;
      }else{
        console.log("Isn't Available.");
      }
    }catch(e){
        console.log(e);
      }
  }
async turnOnFlash(): Promise<void> {
  await this.flashlight.switchOn();
}
async turnOffFlash(): Promise<void>{
  await this.flashlight.switchOff();
}
async isFlashOn(): Promise<boolean>{
  return await this.flashlight.isSwitchedOn();
}
  }
