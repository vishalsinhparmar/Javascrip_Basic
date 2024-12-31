<html>
    <script>
const arr = [1,2,2,3];
// const arr2 = [9,9,9,99];
// const arr3 = [4,3,2,1];
const name = arrayObject(arr);

function arrayObject(arr){
    const obj = {};
    for(let i=0; i<arr.length; i++){
       const value = arr[i];
       if(obj[value]){
          obj[value]++;
       }
       else{
      obj[value]=1;
       }

    }
}
console.log(name);
<script/>
</html>