//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
console.log(_INPUT);	
INPUT = _INPUT.split("\n");
for(i=1;i< INPUT.length;i++){
	R=INPUT[i].split(' ');
	a= R[0];
	b= R[1];
	c=0;
	while (a<b){
	 	if(a<0)
 		{
 			console.log("Error no existen Raices Negativas");
 			break;
 		}
 		else{
	 		r=Math.sqrt(a);
 			if(r % 1!=0){
	 			a++;
 			}
			else{
 				c++;
 				a++;
 			}
 		}
 	}
	console.log(c);
}
