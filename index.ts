import { Observable } from "rxjs";


 /*Creates observable and calls methods*/
const obs = Observable.create(observer => {
  try {
    observer.next("Hi Ng Devs");
    observer.next("Ahmed Here!");
    setTimeout(() => observer.complete() , 500);

  } catch (err) {
    observer.error(err);
  }
});
 /*-----------------------------*/


 
 /*This Subscribes to observable*/
/*
  Observables have 3 methods
  1- Result,
  2- Error,
  3- Complete 
*/  
const obr1 = obs.subscribe(
  x  => { addItem(x) },
  err => { console.log(err)},
  () => { addItem("*Observable Completed*") } // ===> This is not get called if unsubscribe(cancelled) first
);
 /*-----------------------------*/


/*Now it unsubscribes*/
setTimeout(() => {
  obr1.unsubscribe();
  addItem('*Observable Cancelled*');
}, 600); //  ===> setting this lower than observables complete method will get it to unsubscribe first.
/*---------------------*/



/*Creates Html nodes and append them to view*/
function addItem(val) {
  const node = document.createElement("p");
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById("box").appendChild(node);
}
/*---------------------*/






