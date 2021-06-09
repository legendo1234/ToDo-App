import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styles: [`
    /* :host {
      display: block;
      padding: 32px;
      */
  /* }
  .header {
    background-color: #e3e3e3;
  }
  .side {
    background-color: #e3e3ff;
  }
  .content {
    background-color: #e3ffe3;
  }
  .footer {
    background-color: #ffe3e3;
  } */

  body {
  padding: 20px;
  font: 1em Helvetica Neue, Helvetica, Arial, sans-serif;
}

* {box-sizing: border-box;}

p {
  margin: 0 0 1em 0;
}

.container {  
  border: 5px solid rgb(111,41,97);
  border-radius: .5em;
  padding: 10px;
  display: flex;
  flex-direction: row-reverse;
}

.item {
  width: 100px;
  height: 100px;
  padding: 10px;
  background-color: rgba(111,41,97,.3);
  border: 2px solid rgba(111,41,97,.5);
}

  `]
})
export class CardComponent {}
