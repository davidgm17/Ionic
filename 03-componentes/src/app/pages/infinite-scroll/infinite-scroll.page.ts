import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss']
})
export class InfiniteScrollPage implements OnInit {
  
  
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  
  data: any[] = Array(20);
  constructor() {}

  ngOnInit() {}

  loadData(event) {
    console.log('Cargando siguientes .....');

    setTimeout(() => {
      if (this.data.length > 50) {
        // cancelo el evento
        event.target.complete();
//cuando se cumple esta condicion desaiblito el infinite scroll
        this.infiniteScroll.disabled = true;
        // con este return te cancela la ejecucion
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);

      // cancelo el evento
      event.target.complete();
    }, 1000);
  }
}
