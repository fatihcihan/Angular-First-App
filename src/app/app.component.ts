import { Component } from '@angular/core';


@Component({
  selector: 'app-root',     //index.html'deki app-root tagleri buradaki selector sayesinde geliyor
  templateUrl: './app.component.html',  //componentin gosterilecegi html buradan geliyor
  styleUrls: ['./app.component.scss']   //gerekli css'leri yazacagimiz yer de burasi
})

//datayi yonettigimiz yer de burasi (backend gibi dusunebiliriz) daha sonra html ile ekranda gosteriyoruz
export class AppComponent {
  title = 'my-first-app';

  inputText: string = "";
  inputText2: string = "";
  changeInput() {
    // console.log(this.inputText);
    this.inputText2 = this.inputText;
  }
}
