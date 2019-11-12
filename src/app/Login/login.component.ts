import { Component } from "@angular/core";

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent{
   public email:String;
   public pass:String;
   


  lee(){
      //alert(this.email);
      //alert(this.pass);
      if (this.email=="Aldo" && this.pass=="123") {
        alert("Bienvenido");
        "<registro></registro>"
      }else{
alert("Usuario o Contraseña incorrectos")
      }
  }
    
}