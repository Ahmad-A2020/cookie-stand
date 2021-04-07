'use strict';
// Assign hours per day that the restutant serve customers  
let time =[' 6:00 am ',' 7:00 am ',' 8:00 am ',' 9:00 am ',' 10:00 am ',' 11:00 am ',' 12:00 pm '
,' 1:00 pm ',' 2:00 pm ',' 3:00 pm ',' 4:00 pm ',' 5:00 pm ',' 6:00 pm ',' 7:00 pm ', ' Daily Location Total '];

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
// create table Html tag 
parent=document.getElementById('fish');
let table =document.createElement('table');
parent.appendChild(table);
// console.log(parent);
// declare array to includes all of the objects 
let cities=[];

// constructive function for cities 
function city(name,min,max, avg){
    this.name= name;
    this.min=min;
    this.max=max;
    this.avg=avg; 
    this.cookiesPerHourArrayPar=[];
    cities.push(this);
    this.cookiesPerHour=function(){        
        let cookiesPerHourArray=rand(this.max,this.min, this.avg);
        // seatleCookies= seatleCustoHur.map(x => x * this.avg);
        this.cookiesPerHourArrayPar=cookiesPerHourArray;
        return cookiesPerHourArray;
    }   
   
};


// Add new method for the constructive function; city
city.prototype.render=function(){
    // let b=this.cookiesPerHourArray
    // console.log(cookiesPerHourArrayParameter);
    let tableRow =document.createElement('tr');
    table.appendChild(tableRow);
    let tdX=document.createElement('td');
    tableRow.appendChild(tdX);
    tdX.textContent=this.name;
    this.cookiesPerHour();
    for(let i=0;i<time.length;i++){
        let tdX=document.createElement('td');
        tableRow.appendChild(tdX);
        tdX.textContent=this.cookiesPerHourArrayPar[i];        
    }   

}
// Function for the table headre 
function tableHeader(){    
    let tableRow=document.createElement('tr');
    table.appendChild(tableRow);
    let th1=document.createElement('th');
    tableRow.appendChild(th1);
    th1.textContent=null;    
    for (let i=0; i<time.length;i++){
        let thX=document.createElement('th');
        tableRow.appendChild(thX);
        thX.textContent=time[i];   
    }
}
// invoke the table header 
tableHeader();

// Seatle obj
let seatle=new city('Seatl',23,65,6.3);
// seatle.cookiesPerHour();
// console.log(seatle.cookiesPerHour());
seatle.render();
console.log(seatle.cookiesPerHourArrayPar);

//  Tokyo city object

let tokyo=new city('Tokyo',3,24,1.2);
tokyo.render();

//  Tokyo city object

let Dubai=new city('Dubai',11,38,3.7);
Dubai.render();

//  Paris city object

let Paris=new city('Paris',20,38,2.3);
Paris.render();

//  Lima city object

let Lima=new city('Lima',2,16,4.6);
Lima.render();


// Total function for the footer: 
function total() {
    let sum=[];
    for (let i=0;i<time.length;i++){
        let sumColum=0
        for(let j=0;j<cities.length;j++){
            sumColum=cities[j].cookiesPerHourArrayPar[i]+sumColum;           
        }
        sum.push(sumColum);
    }
    return sum;    
}
console.log("totalfun",total());

// Table footer 
function footer() {
    let tableRow=document.createElement('tr');
    table.appendChild(tableRow);
    let th1=document.createElement('th');
    tableRow.appendChild(th1);
    th1.textContent='Totals';    
    for (let i=0; i<time.length;i++){
        let thX=document.createElement('th');
        tableRow.appendChild(thX);
        thX.textContent=total()[i];   
    }   

    
}
console.log(cities);
footer();

let addResturant=document.getElementById('cookiesForm');

addResturant.addEventListener('submit',newResturanr);
function newResturanr (event) {
    event.preventDefault();
    console.log(event);
    let nameN=event.target.cityName.value;
    let minum=event.target.min.value;
    let maxN=event.target.max.value;
    let avgN=event.target.avg.value;
    // console.log(nameN,minN,maxN,minum);
    console.log(minum);
    console.log(maxN);
    console.log(avgN);
    let newRestrantInst=new city(nameN,minum,maxN,avgN);
    // newRestrantInst.render();
    // let newx=new city("new",10,40,2);
    // newx.render();
    table.textContent='';
    tableHeader();
    for (let i=0;i<cities.length;i++){
        cities[i].render();


    }
    footer(); 


    
}






// Lab 06 code: all cities excapt seatle; which I worked on it in Lab07


// html for seatle city 

// console.log(className)
// console.log(seattle.customHur());


// // Tokyo city object 
// let tokyo={
//     name:'Tokyo',
//     min:3,
//     max:24,
//     avg:1.2,
//     customHur:function(){        
//         seatleCookies=rand(this.max,this.min, this.avg);
//         // seatleCookies= seatleCustoHur.map(x => x * this.avg);
//         return seatleCookies
//     }
   
// }

// // html for Tokyo city 
// let headOfTokyo=document.createElement('p');
// parent.appendChild(headOfTokyo);
// headOfTokyo.textContent= tokyo.name
// let odrerListTokyo=document.createElement('ul'); 
// parent.appendChild(odrerListTokyo); 
// for (let f=0; f< time.length;f++){
//     let listEleTokyo=document.createElement('li');
//     parent.appendChild(listEleTokyo);
//     listEleTokyo.textContent=time[f]+" : "+tokyo.customHur()[f];     
// }


// // Dubai city object 
// let dubai={
//     name:'Dubai',
//     min:11,
//     max:38,
//     avg:3.7,
//     customHur:function(){        
//         seatleCookies=rand(this.max,this.min, this.avg);
//         // seatleCookies= seatleCustoHur.map(x => x * this.avg);
//         return seatleCookies
//     }
   
// }

// // html for Dubai city 
// let headOfDubai=document.createElement('p');
// parent.appendChild(headOfDubai);
// headOfDubai.textContent= dubai.name
// let odrerListDubai=document.createElement('ul'); 
// parent.appendChild(odrerListDubai); 
// for (let f=0; f< time.length;f++){
//     let listEleDubai=document.createElement('li');
//     parent.appendChild(listEleDubai);
//     listEleDubai.textContent=time[f]+" : "+dubai.customHur()[f];     
// }

// // Paris city object 
// let Paris={
//     name:'Paris',
//     min:20,
//     max:38,
//     avg:2.3,
//     customHur:function(){        
//         seatleCookies=rand(this.max,this.min, this.avg);
//         // seatleCookies= seatleCustoHur.map(x => x * this.avg);
//         return seatleCookies
//     }
   
// }

// // html for Paris city 
// let headOfParis=document.createElement('p');
// parent.appendChild(headOfParis);
// headOfParis.textContent= Paris.name
// let odrerListParis=document.createElement('ul'); 
// parent.appendChild(odrerListParis); 
// for (let f=0; f< time.length;f++){
//     let listEleParis=document.createElement('li');
//     parent.appendChild(listEleParis);
//     listEleParis.textContent=time[f]+" : "+Paris.customHur()[f];     
// }

// // Lima city object 
// let Lima={
//     name:'Lima',
//     min:2,
//     max:16,
//     avg:4.6,
//     customHur:function(){        
//         seatleCookies=rand(this.max,this.min, this.avg);
//         // seatleCookies= seatleCustoHur.map(x => x * this.avg);
//         return seatleCookies
//     }
   
// }

// // html for Lima city 
// let headOfLima=document.createElement('p');
// parent.appendChild(headOfLima);
// headOfLima.textContent= Lima.name
// let odrerListLima=document.createElement('ul'); 
// parent.appendChild(odrerListLima); 
// for (let f=0; f< time.length;f++){
//     let listEleLima=document.createElement('li');
//     parent.appendChild(listEleLima);
//     listEleLima.textContent=time[f]+" : "+Lima.customHur()[f];     
// }