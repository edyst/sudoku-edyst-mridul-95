var ar=[];
function easy(){
  ar=[[4,8,6,9,0,0,0,0,0],[ 0,0,0,6,0,5,0,1,9],[9,0,0,0,2,0,0,3,6],[0,3,0,2,0,1,7,6,8],[ 1,2,9,8,0,0,3,0,0],[0,0,0,5,3,0,0,0,0],[0,0,7,1,0,9,5,0,0],[ 8,0,0,0,5,2,0,0,1],[0,1,5,0,8,7,9,0,0]];
  setValue();

}
 function medium(){
   ar=[[8,0,0,7,3,0,0,1,0],[0,0,5,0,0,0,2,0,6],[1,4,0,0,0,0,0,0,0],[0,0,0,2,0,7,0,0,0],[0,0,8,9,0,0,4,0,3],[0,0,0,0,4,0,0,0,0],[0,0,6,0,0,0,0,0,0],[0,1,0,4,0,0,9,0,8],[9,7,0,8,0,0,0,6,0]];
  setValue();

}
function hard(){
  ar=[[0,5,0,0,0,0,4,0,0],[1,6,0,8,0,0,7,0,5],[4,0,0,0,0,0,0,2,6],[0,4,9,0,0,0,0,0,0],[8,0,5,6,0,0,0,0,1],[0,0,0,0,0,0,8,7,0],[0,0,0,3,9,0,0,6,4],[0,0,0,0,0,6,0,1,0],[9,0,0,0,2,0,0,0,0]];
  setValue();

}
function setValue(){
 // console.log(ar);
  var c=1;
  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
      if(ar[i][j]!=0){
  document.getElementById(c).value=ar[i][j];
  document.getElementById(c).classList.add("cell-fixed");
  document.getElementById(c).disabled=true;
      }
      else{
        document.getElementById(c).value="";
        document.getElementById(c).classList.remove("cell-fixed");
        document.getElementById(c).disabled=false;
          document.getElementById(c).classList.add("cell-notfixed");
          document.getElementById(c).classList.remove('cell-error');
              document.getElementById(c).classList.remove('cell-error');
      }
  c++;
  }
}
}
let flag=0;
function validate(){
  flag=checkRow();
  if(flag==0)
   alert("Incorrect Solution");
   else{
     flag= checkColumn();
    if(flag==0)
    alert("Incorrect Solution");
    else{
      flag=checkBox();
      if(flag==0)
      alert("Incorrect Solution");
      else
      alert("You have Successfully completed the solution");
    }
 }
}
function checkRow(){
    let a=1,b=9;
    for(let i=0;i<9;i++){
    flag= checkOneRow(a,b);
    if(flag==0)
    return 0;
    a=a+9;
    b=b+9;
    }
    return 1;
 }
 function checkOneRow(row_start,row_end){
    let row=[];
    for(let i=row_start;i<=row_end;i++){
       let a =document.getElementById(i).value;
       if(a==""){
       return 0;
       }
         else
         row.push(a);
       }
    //console.log(row);
        row.forEach((val,index)=>{
          if(row.indexOf(val)!==index&&val!==0){
             return 0;
          }
       });
       return 1;
 }
function checkColumn(){
    let a=1,b=73;
    for(let i=0;i<9;i++){
    flag=checkOneColumn(a,b);
    if(flag==0)
    return 0;
    a++;
    b++;
    }
    return 1;
}
function checkOneColumn(column_start,column_end){
    let column=[];
    for(let i=column_start;i<=column_end;i+=9){
       let a =document.getElementById(i).value;
       if(a=='')
        return 0;
         else
         column.push(a);
       }
  //  console.log(column);
       column.forEach((val,index)=>{
          if(column.indexOf(val)!==index&&val!==0){
            return 0;
          }
       });
       return 1;
}
function checkBox(){
    if(checkOneBox(1,21)==0)
    return 0;
    else{
      if(checkOneBox(4,24)==0)
      return 0;
      else{
        if(checkOneBox(7,27)==0)
        return 0;
        else{
          if(checkOneBox(28,48)==0)
          return 0;
          else{
            if(checkOneBox(31,51)==0)
            return 0;
            else{
              if(checkOneBox(34,54)==0)
              return 0;
              else{
                if(checkOneBox(55,75)==0)
                return 0;
                else{
                  if(checkOneBox(58,78)==0)
                  return 0;
                  else
                  if(checkOneBox(61,81)==0)
                  return 0;
                }
              }
            }
          }
        }
      } 
    }
    return 1;
}
function checkOneBox(box_start,box_end){
    let box=[];
    let c=1;
      for(let i=box_start;i<=box_end;i++){
        let a =document.getElementById(i).value;
        if(a=='')
         return 0;
          else
          box.push(a);
      if(c%3==0)
      i+=6;
      c++; 
      }
     // console.log(box);
      box.forEach((val,index)=>{
        if(box.indexOf(val)!==index&&val!==0){
           return 0;
        }  
     });
     return 1;
}
  function input(i){
    highlightDigit(i);
    validateinput(i);
    validateRow(i);
   validateColumn(i);
  // validateBox(i);
  }
  function highlight(i){
    highlightColumn(i);
     highlightRow(i);
     highlightBox(i);
  }
  function unhighlight(i){
      unhighlightColumn(i);
      unhighlightRow(i);
      unhighlightBox(i);
      unhighlightDigit(i);
  }
 function highlightRow(i){
    let  m = i%9;
    if(m==0){
       m=9;
    }
    let a = i-m+1;
    let b=Number(i)+(9-m);
   // console.log(a,b);
   for(let j=a;j<=b;j++){
     document.getElementById(j).classList.add("cell-highlight");
   }
 }
 function unhighlightRow(i){
  let  m = i%9;
  if(m==0){
    m=9;
 }
  let a = i-m+1;
  let b=Number(i)+(9-m);
  //console.log(a,b);
 for(let j=a;j<=b;j++){
   document.getElementById(j).classList.remove("cell-highlight");
 }
}
function highlightColumn(i){
  let m=i%9;
  let a =m;
  if(m==0)
   a=9;
  let b=72+a;
 // console.log(a,b);
  for(let j=a;j<=b;j+=9){
    document.getElementById(j).classList.add("cell-highlight");
  }
}
function unhighlightColumn(i){
  let m=i%9;
  let a =m;
  if(m==0)
   a=9;
  let b=72+a;
  //console.log(a,b);
  for(let j=a;j<=b;j+=9){
    document.getElementById(j).classList.remove("cell-highlight");
  }
}
function findBox(i){
  let a,b;
  i=Number(i);
  if(i>=1&&i<=3||i>=10&&i<=12||i>=19&&i<=21){
  a=1;
   b=21;
  }
  if(i>=4&&i<=6||i>=13&&i<=15||i>=22&&i<=24){
    a=4;
     b=24;
    }
  if(i>=7&&i<=9||i>=16&&i<=18||i>=25&&i<=27){
      a=7;
       b=27;
      }
  if(i>=28&&i<=30||i>=37&&i<=39||i>=46&&i<=48){
        a=28;
         b=48;
        }
  if(i>=31&&i<=33||i>=40&&i<=42||i>=49&&i<=51){
          a=31;
           b=51;
          }
   if(i>=34&&i<=36||i>=43&&i<=45||i>=52&&i<=54){
            a=34;
             b=54;
            }
   if(i>=55&&i<=57||i>=64&&i<=66||i>=73&&i<=75){
              a=55;
               b=75;
              }
    if(i>=58&&i<=60||i>=67&&i<=69||i>=76&&i<=78){
                a=58;
                 b=78;
          }
    if(i>=61&&i<=63||i>=70&&i<=72||i>=79&&i<=81){
                  a=61;
                   b=81;   }
      return [a,b];
}
function highlightBox(i){
   let c=findBox(i);
   a=c[0];
   b=c[1];
  for(let j=a;j<=b;j++){
    document.getElementById(j).classList.add("cell-highlight");
    if(j%3==0)
    j=j+6;
  }
 // console.log(a,b);
}
function unhighlightBox(i){
  let c=findBox(i);
  a=c[0];
  b=c[1];
  for(let j=a;j<=b;j++){
    document.getElementById(j).classList.remove("cell-highlight");
    if(j%3==0)
    j=j+6;
  }
 // console.log(a,b);
}
function highlightDigit(i){
  for(let j=1;j<=81;j++){
  let a =document.getElementById(j).value;
  let b=document.getElementById(i).value;
  if(a===b&&a!=0)
  document.getElementById(j).classList.add("cell-input");
  else
  document.getElementById(j).classList.remove("cell-input");
  }
}
function unhighlightDigit(i){
  for(let j=1;j<=81;j++){
  let a =document.getElementById(j).value;
  let b=document.getElementById(i).value;
  if(a===b&&a!=0)
  document.getElementById(j).classList.remove("cell-input");
  }
}
function validateinput(i){
  let b=document.getElementById(i).value;
  if((b>0&&b<=9)){
    document.getElementById(i).classList.add("cell-valid");
  }
  else{
  document.getElementById(i).value="";
  document.getElementById(i).classList.remove("cell-valid");
  }
}
function validateRow(i){
  let  m = i%9;
    if(m==0){
       m=9;
    }
    let a = i-m+1;
    let b=Number(i)+(9-m);
   // console.log(a,b);
   for(let j=a;j<=b;j++){
     let c=document.getElementById(j).value;
     let d=document.getElementById(i).value;
   //  console.log(c,d);
     if(c==d &&i!=j){
      document.getElementById(i).value="";
      validateinput(i);
      highlightDigit(i);
     }
   }
}
function validateColumn(i){
  let m=i%9;
  let a =m;
  if(m==0)
   a=9;
  let b=72+a;
 // console.log(a,b);
  for(let j=a;j<=b;j+=9){
    let c=document.getElementById(j).value;
    let d=document.getElementById(i).value;
  //  console.log(c,d);
    if(c==d &&i!=j){
     document.getElementById(i).value="";
     validateinput(i);
     highlightDigit(i);
  }
}
}
function validateBox(i){
  let c=findBox(i);
   a=c[0];
   b=c[1];
  for(let j=a;j<=b;j++){
    let c=document.getElementById(j).value;
    let d=document.getElementById(i).value;
    //  console.log(c,d);
    if(c==d &&i!=j){
     document.getElementById(i).value="";
     validateinput(i);
     highlightDigit(i);
    if(j%3==0)
    j=j+6;
  }
}
}
 easy();