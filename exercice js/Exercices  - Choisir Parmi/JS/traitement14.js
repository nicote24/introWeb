function btnCalculer_onclick()
{
    var Nbr1,Nbr2,Operateur,Total;

    Nbr1=parseFloat(document.getElementById("txtNbre1").value);
    Nbr2=parseFloat(document.getElementById("txtNbre2").value);
    Operateur=(document.getElementById("txtOperateur").value);


    if(Operateur=="*")
    {
        Total=Nbr1*Nbr2
    }
    else if(Operateur=="/"){
        Total=Nbr1/Nbr2
    }
    else if(Operateur=="+"){
        Total=Nbr1+Nbr2
    }
    else{
        Total=Nbr1-Nbr2
    }
    console.log("le total avec l'operateur "+Operateur+" est de: "+Total);
    document.getElementById("lblMessage").innerHTML="le total avec l'operateur "+Operateur+" est de: "+Total;
}