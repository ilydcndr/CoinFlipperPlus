import React,{Component} from 'react';
import Coin from '../src/Coin';
import './coinflipper.css';
import Options from'./Optiondata';
import {GetRandom,RandomOptionsCount} from './helpers';



/* 1-tıkladığında dönsün (dönme durumu baslangıcta false olsun tıkladıgında true ya cek, true ıken rotate classını ekle.)
   2-random deger gelecek bı fonksıyon set et (dönme durumu 1 sn sonra yeniden false olsun false oldugunda random bir option alsın.)
   3-dönmesi durdugunda false durumunda random gelen degerlerın sayısını hesapla (random gelen deger bir arraye concat edilsin ve lengthi okunsun)
   4-her bırınden kac adet geldiğini hesapla.(gelenler arrayi icerisinde, gelen option filtrelensin ve lengthi okunsun.)  
   ------------------------------------------------------------------------------------------------------------------------------------------
   SET EDİLECEK DEĞERLERİN BELİRLENMESİ
   
   boş bir array set edelim ki gelenleri orada toplayalım,
   donme durumu set edelim buna bağlı değişiklikler meydana gelsin,
   paranın side ı değişeceği için 
   
   --------------------------------------------------------------------------------------------------------------------------------------------------------
   ÖNEMLİ
   helpersdaki fonksiyonlara hangilerini kullanacaksam onu belirterek import ediyorum.
   datayı const'un adı ile export et.
   olasılığın genişletilmesi durumunda tek tek yazmak yerine
   olasılık havuzu olustur.buraya dırek havuz dosyasını ekle degısken olarak kullan.

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
        const option=GetRandom(Options);        
        this.setState({
            turn:true,
        });
       setTimeout(() => {
        this.setState({
            turn:false,
            whatıhave:[...this.state.whatıhave].concat([option])
            
        }, ()=>{
            console.log(this.state.whatıhave)
        }
        )
    }, 1000); 


    }

     render(){
         return(
             <div>
              <Coin turn={this.state.turn}/>
              <button onClick={this.flip}> AT!</button> 
              {option} 
              {RandomOptionsCount(this.state.whatıhave,option)}






                {/*
 ------------------------HELPERS.JS DE FONKSİYON TANIMLAMADAN------------------------------------------------
                 <div> 
                 {this.state.whatıhave.length} atıştan
                 {                 
                     options.map((item)=>{
                       const filteredoption= this.state.whatıhave.filter((x)=>{
                            return(
                                    item===x   
                            )
                        })
                        return(
                        ` ${filteredoption.length}  ${item}`
                        )
                     })       
                 }                      
                </div> 
 --------------------------------------------------------------------------------------------------------------               
                */}              
             </div>
         )
     }


}

export default Coinflipper;