// let a=15;
// console.log(a);

// if (true) { 
//    let b=6;
//    console.log(b);
// }
// // console.log(b);

// let c='Shraddha';
// console.log(c);
// c=5;
// console.log(c);

// let rectangle = {
// 	length:1,
// 	breadth:2,

// 	draw(){
// 		console.log('drawing rectangle');
// 	}
// };


 // function createRectangle(len,bre){
 // 	return rectangle = {
 // 			length:len,
 //         	breadth:bre,

 //         	draw(){
 //         		console.log('drawing');
 //         	}

 // 	};
 // } 
 // let rectangleObj1 = new createRectangle(5,4);


// function Rectangle(){
// 	this.length=1;
// 	this.breadth=2;

// 	this.draw=function(){
// 		console.log('drawing');
// 	}
// }
// let rectangleObj =new Rectangle();
// rectangleObj.color='yellow';
// console.log(rectangleObj);
// delete rectangleObj.color;
// console.log(rectangleObj);


// let a={value:10};
// let b=a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

 // function inc(a){
 // 	a++;
 // }

 // let a=10;
 // inc(a);
 // console.log(a);


  let rectangle = {
  	length:2,
  	breadth:3
  };
 // for(let key in rectangle){
 // 	console.log(key,rectangle[key]);
 // }
// for(let key in rectangle){
// 	console.log(key,rectangle(key));
// }

//prints the entries of rectangle
//if we write keys in place of entries then it will display the keys of rectangle i.e. length and breadth.
// for(let key of Object.entries(rectangle)){
// 	console.log(key);
// }

if('length' in rectangle){
console.log('Present');	
}
else{
	console.log('Absent');
}

let src={
	a:10,
	b:20,
	c:30
};
// let dest={};
// for(let key in src){
// 	dest[key]=src[key];
// }

// console.log(dest);
let src2={value:25};
let dest=Object.assign({},src,src2);
console.log(dest);
src.a++;
console.log(dest);

let dest1={...src};
console.log(dest1);
src.a++;
console.log(dest1);