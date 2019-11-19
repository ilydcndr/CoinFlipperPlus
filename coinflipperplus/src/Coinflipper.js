import React,{Component} from 'react';
import Coin from '../src/Coin';
import './coinflipper.css'


/* 1-tıkladığında dönsün (dönme durumu baslangıcta false olsun tıkladıgında true ya cek, true ıken rotate classını ekle.)
   2-random deger gelecek bı fonksıyon set et (dönme durumu 1 sn sonra yeniden false olsun false oldugunda random bir option alsın.)
   3-dönmesi durdugunda false durumunda random gelen degerlerın sayısını hesapla (random gelen deger bir arraye concat edilsin ve lengthi okunsun)
   4-her bırınden kac adet geldiğini hesapla.(gelenler arrayi icerisinde, gelen option filtrelensin ve lengthi okunsun.)  
   ------------------------------------------------------------------------------------------------------------------------------------------
   SET EDİLECEK DEĞERLERİN BELİRLENMESİ

   boş bir array set edelim ki gelenleri orada toplayalım,
   donme durumu set edelim buna bağlı değişiklikler meydana gelsin,
   */

class Coinflipper extends Component{
    constructor(props){
        super(props);
        this.state={
            turn:false,
            whatıhave:[],
        }

    }

    flip=()=>{
        this.setState({
            turn:true
        });
       setTimeout(() => {
        this.setState({
            turn:false,
        })       
       }, 1000); 
    }

     render(){
         return(
             <div>
              <Coin turn={this.state.turn}/>
              <button onClick={this.flip}> AT!</button>
             </div>
         )
     }


}

export default Coinflipper;