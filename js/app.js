var count = 0;
console.log('hello')

$('#send').click(function(){
  count ++;

  if(count %15 === 0){
    console.log('fizzbuzz');
  }else if(count % 5 === 0){
    console.log('buzz');
  }else if (count % 3 === 0){
    console.log('fizz');
  }else {
    console.log(count);
  }
})
