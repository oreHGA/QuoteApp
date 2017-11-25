import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuoteProvider } from '../../providers/quote/quote';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // styleUrls: [
  //   './home.css'
  // ]
})
export class HomePage {

  quote : any;

  fetchQuote(){
    this.quoteService.getQuote()
    .then(data => {
      this.quote = data;
      console.log(this.quote)
    })
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private quoteService: QuoteProvider) {
    this.fetchQuote();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
