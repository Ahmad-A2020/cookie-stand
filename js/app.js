// use strict;
// Assign hours per day that the restutant serve customers  
time =['6am','7am','8am','9am','10am','11am','12pm'
,'1pm','2pm','3pm','4pm','5pm','6pm','7pm', 'Total'];
// declare function invoke inside the objective to give the number of cookies perhour randomly
function rand(max,min,avg){
    let randArray=[]
    let sum=0
    for (let i=0;i<time.length-1;i++){
        let generatedValue=Math.floor((Math.random() * (max - min) + min)*avg)
        sum =generatedValue+sum
        randArray.push(generatedValue);
    }
    randArray.push(sum);

    return randArray;

}

// seatle city object 
let seattle={
    name:'seattle',
    min:23,
    max:65,
    avg:6.3,
    customHur:function(){        
        seatleCookies=rand(this.max,this.min, this.avg);
        // seatleCookies= seatleCustoHur.map(x => x * this.avg);
        return seatleCookies
    }
   
}

// html for seatle city 
let parent=document.getElementById('city'); 
let headOf=document.createElement('p');
parent.appendChild(headOf);
headOf.textContent= seattle.name
let odrerList=document.createElement('ul'); 
parent.appendChild(odrerList); 
for (let k=0; k< time.length;k++){
    let listEle=document.createElement('li');
    parent.appendChild(listEle);
    listEle.textContent=time[k]+" : "+seattle.customHur()[k];     
}
// console.log(className)
console.log(seattle.customHur());

// Tokyo city object 
let tokyo={
    name:'Tokyo',
    min:3,
    max:24,
    avg:1.2,
    customHur:function(){        
        seatleCookies=rand(this.max,this.min, this.avg);
        // seatleCookies= seatleCustoHur.map(x => x * this.avg);
        return seatleCookies
    }
   
}

// html for Tokyo city 
let headOfTokyo=document.createElement('p');
parent.appendChild(headOfTokyo);
headOfTokyo.textContent= tokyo.name
let odrerListTokyo=document.createElement('ul'); 
parent.appendChild(odrerListTokyo); 
for (let f=0; f< time.length;f++){
    let listEleTokyo=document.createElement('li');
    parent.appendChild(listEleTokyo);
    listEleTokyo.textContent=time[f]+" : "+tokyo.customHur()[f];     
}


// Dubai city object 
let dubai={
    name:'Dubai',
    min:11,
    max:38,
    avg:3.7,
    customHur:function(){        
        seatleCookies=rand(this.max,this.min, this.avg);
        // seatleCookies= seatleCustoHur.map(x => x * this.avg);
        return seatleCookies
    }
   
}

// html for Dubai city 
let headOfDubai=document.createElement('p');
parent.appendChild(headOfDubai);
headOfDubai.textContent= dubai.name
let odrerListDubai=document.createElement('ul'); 
parent.appendChild(odrerListDubai); 
for (let f=0; f< time.length;f++){
    let listEleDubai=document.createElement('li');
    parent.appendChild(listEleDubai);
    listEleDubai.textContent=time[f]+" : "+dubai.customHur()[f];     
}

// Paris city object 
let Paris={
    name:'Paris',
    min:20,
    max:38,
    avg:2.3,
    customHur:function(){        
        seatleCookies=rand(this.max,this.min, this.avg);
        // seatleCookies= seatleCustoHur.map(x => x * this.avg);
        return seatleCookies
    }
   
}

// html for Paris city 
let headOfParis=document.createElement('p');
parent.appendChild(headOfParis);
headOfParis.textContent= Paris.name
let odrerListParis=document.createElement('ul'); 
parent.appendChild(odrerListParis); 
for (let f=0; f< time.length;f++){
    let listEleParis=document.createElement('li');
    parent.appendChild(listEleParis);
    listEleParis.textContent=time[f]+" : "+Paris.customHur()[f];     
}

// Lima city object 
let Lima={
    name:'Lima',
    min:2,
    max:16,
    avg:4.6,
    customHur:function(){        
        seatleCookies=rand(this.max,this.min, this.avg);
        // seatleCookies= seatleCustoHur.map(x => x * this.avg);
        return seatleCookies
    }
   
}

// html for Lima city 
let headOfLima=document.createElement('p');
parent.appendChild(headOfLima);
headOfLima.textContent= Lima.name
let odrerListLima=document.createElement('ul'); 
parent.appendChild(odrerListLima); 
for (let f=0; f< time.length;f++){
    let listEleLima=document.createElement('li');
    parent.appendChild(listEleLima);
    listEleLima.textContent=time[f]+" : "+Lima.customHur()[f];     
}