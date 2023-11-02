import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
message:string="I need to help in your app"

constructor(){
 
}
ngOnInit(){

}
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
 openNav() {
  document.getElementById("mySidebar")!.style.width = "250px";
  document.getElementById("main")!.style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
 closeNav() {
  document.getElementById("mySidebar")!.style.width = "0";
  document.getElementById("main")!.style.marginLeft = "0";
}

}
