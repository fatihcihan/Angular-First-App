import { Component } from '@angular/core';


@Component({
  selector: 'app-root',     //index.html'deki app-root tagleri buradaki selector sayesinde geliyor
  templateUrl: './app.component.html',  //index.html'de sayfanin gosterilecegi html buradan geliyor
  styleUrls: ['./app.component.scss']   //gerekli css'leri yazacagimiz yer de burasi
})

//datayi yonettigimiz yer de burasi (backend gibi dusunebiliriz) daha sonra html ile ekranda gosteriyoruz
export class AppComponent {
  title = 'my-first-app';

  inputText: string = "";
}
