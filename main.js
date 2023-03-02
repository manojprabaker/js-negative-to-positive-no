var arr=[1,-2,-3,-4,5],newArr=[];
function abs(arr){
for(i=0;i<arr.length;i++)
{
	if(arr[i]<0)
	{
	  
      newArr.push(Math.abs(arr[i]));		
	}
	
}
console.log(newArr);
}
abs(arr);