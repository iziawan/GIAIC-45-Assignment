/*Cars: Write a function that stores information
 about a car in a Object. The function should
 always receive a manufacturer and a model name.
 It should then accept an arbitrary number of 
 keyword arguments. Call the function with the 
 required information and two other name-value pairs,
 such as a color or an optional feature. Print the Object
that’s returned to make sure all the information was stored correctly.
*/

interface Car{
  manufacturer: string;
  model_number: string;
  features:any[];
}

function car_info (manufacturer:string , model_number:string , ...keywords:any[]):Car{
  return {
    manufacturer: manufacturer,
    model_number: model_number,
    features : keywords
  };
} 


let car_1 = car_info('Toyota', 'Corolla', 'paint: white');
let car_2 = car_info('Lamborghini','Hurracan','Paint: red')
let car_3 = car_info('Rolls Royce','Phantom','Paint: Blue')
console.log(car_1);
console.log(car_2);
console.log(car_3);
