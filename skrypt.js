var iloscZn=8;
var iloscCyfr=0;

function iloscZnakow(){
    iloscZn=document.getElementById("iloscZnakow").value;
    document.getElementById("iloscCyfr").max=iloscZn;
}

function wybCyfr(){
    iloscCyfr=document.getElementById("iloscCyfr").value
    document.getElementById("wybCyfr").value=iloscCyfr;
}