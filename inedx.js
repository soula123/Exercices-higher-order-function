
/*--------EXERCICE1------------*/
 let persons = [

    { name : "MONCEF" , age: 13} ,
    { name : "BAHIJA" , age: 23} ,
    { name : "ALA" , age: 18} ,
    
    ];
 
let newList=persons.map(mineurmajeur)
function mineurmajeur(element){
    if(element.age>=18)
element.status="majeur"
    else 
element.status="mineur"
return element
}
console.log(newList)

/*----------EXERCICE2-----------*/
const str1 = 'ahmed&ferah-moez&saadi-fadhel&gadihi';
var str2= str1.split('-');
let newTab=str2.map(filtered)
function filtered (element)
{
    var str3=element.split('&')
    let obj={}
    obj.firstName=str3[0]
    obj.lastName=str3[1]
    return obj
 }
 console.log(newTab)

/*----------EXERCICE3-----------*/

const users = [
    { name : "sarah" , comment : "j'aime ce poste <3" },
    { name : "monya" , comment : "le poste est null :( " },
    { name : "carlos" , comment : "salut l'algérie" }
    ]

    let newL=users.map(MoodDetect)
    function MoodDetect(el){
    let obj={}
    obj.name=el.name
        if(el.comment.includes(':(')==true)
    obj.etat="triste"
        else 
          if(el.comment.includes('<3')==true)
    obj.etat="heureux"
        else 
    obj.etat="neutre"
    return obj
    }
    console.log(newL)


/*----------EXERCICE4-----------*/

const etudiants = [
    { name : "sarah" , note : undefined },
    { name : "monya" , note : 7 },
    { name : "carlos" , note : 13 },
    { name : "fadhel" , note : 18 },
    ]
let newEtudiants=etudiants.map(failedStudent)


 

function failedStudent(element){
    etudiants.sort((a, b) => b.note - a.note);
    let etudiant = etudiants.filter(e => e.note != undefined  )
    let moy=(etudiant.reduce((moyFinal,element)=>moyFinal+element.note,0))/etudiant.length;

    let obj={}
    obj.name=element.name
    obj.note=element.note
        if(element.note<moy)
    obj.mention="passable"
        else 
    obj.mention="bien"
    
    return obj
}
let etudiantF = newEtudiants.filter(e => e.note != undefined  )

    console.log(etudiantF)












/*
newArray=array.map(callback)
l callback trajaali ligne =return element ou bien return objet li 
nassna3 fih,
return element:: badlt les lignes eli f array nafsou 
que soit zedet haja ouu badlt haja 
return obj:: l array kaadet heya bidha matbdltsh mais par contre 
newArray bsh ykhrej feha heya l resultat .
*/