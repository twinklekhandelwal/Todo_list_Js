
document.getElementById("txtb").addEventListener("keyup",function(event){
    var val=document.getElementById("txtb").value;
    if (event.keyCode === 13 && val!="") {
        list =document.getElementById("notcomp");
     var nodd = document.createElement('li');
    nodd.innerText=val;
    //  console.log(nodd.innerText);
     list.appendChild(nodd);
    //  nodd.append('<i class="fa fa-cloud"></i>');
    //  var nodd1 = document.createElement('<i class="fa fa-trash"></i>');
    // nodd.appendChild(nodd1);
    var j = document.createElement('i');
    
    }
});
