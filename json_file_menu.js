
    <script>
        let xttp = new XMLHttpRequest();
        xttp.onload=function(){
            const myarry = JSON.parse(this.responseText);
            document.getElementById("demo").innerHTML=myarry[0];
        }
        xttp.open("GET","json.js");
        xttp.send();
    </script>
