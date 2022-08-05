 const getTime=()=>
 {
    let d = new Date();

    let h = d.getHours();
    
    let amPm =h >=12 ? "PM" : "AM"; // coditional operator me agar 'h' value badi hoti hai to true(pm) case chalega otherwise false.
    
    h=h%12; // modulus operator 
    h= h==0 ? 12:h; //agar h ki value 0 aati h to 12 time ho jayega otherwise 'h' ki value print kar dega.
    h= h >9? h:'0' + h;
    let m = d.getMinutes();
    m= m > 9? m:'0' + m;
   
    let s = d.getSeconds();
    s= s > 9? s:'0' + s ;
    
   
    

    return `${h} : ${m} :${s} : ${amPm} `;
    //return d.toString();
  


 };

 setInterval(() => { 
    //console.log(getTime()) 
    let clockOb = document.querySelector('.clock');  //queryselector ek trha se returns  karta hai first element that matches a CSS selector.
    clockOb.innerHTML = getTime(); }, 1000); // getTime() returns the number of milliseconds.
 
 
 