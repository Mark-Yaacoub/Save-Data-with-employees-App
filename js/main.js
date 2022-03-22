// dark mood

let button2 = document.getElementById('dark');
let body = document.querySelector('body');


button2.onclick = function () {

    if (body.classList.toggle('dark-mood')) {
        body.classList.add('dark-mood')
        body.classList.remove('light-mood')
        this.innerText = 'Light Mood'

    } else {
        body.classList.add('light-mood')
        body.classList.remove('dark-mood')
        this.innerText = 'Dark Mood'

    }


}

// viwe and hiden list


let secctionAdd = document.getElementById('secctionAdd');
let addData = document.getElementById('addData');
let exportData = document.getElementById('exportData');
let secctioExport = document.getElementById('secctioExport');
let viweData = document.getElementById('viweData');
let secctionViwe = document.getElementById('secctionViwe');
let cancelData = document.getElementById('cancelData');
let cancelexport = document.getElementById('cancelexport');
let cancelviwe = document.getElementById('cancelviwe');



// addData.onclick = function () {

//   if (secctionAdd.classList.toggle('none')) {
//    secctionAdd.classList.add('block')
   

//     } else {

//        secctioExport.classList.add('none')
//        secctionViwe.classList.add("block")
       
//      }
//  }

// btn viwe data 



// viweData.onclick = function () {
//     if (secctionViwe.classList.toggle('none')) {
//         secctionViwe.classList.add("block")

//     } else {
//         secctionAdd.classList.add('none')
//         secctioExport.classList.add('none')
//     }
// }


// click btn export 

// exportData.onclick = function () {

//     if (secctioExport.classList.toggle('none')) {

//         secctioExport.classList.add('block')
//         secctionAdd.classList.add('none')
//         secctionViwe.classList.add("none")

//     } else {
//         secctionAdd.classList.add('block')
//         secctionViwe.classList.add("block")

//     }
// }

cancelData.onclick = function () {
    if (secctionAdd.classList.toggle('none')) {

    }
}

cancelviwe.onclick = function () {
    if (secctionViwe.classList.toggle('none')) {

    }
}

cancelexport.onclick = function () {
    if (exportData.classList.toggle('none')) {
    }
}






// great data


let fname = document.getElementById('fname');
let National = document.getElementById('National');
let gouna = document.getElementById('el-gouna');
let phone = document.getElementById('phone');
let Resturant = document.getElementById('Resturant');
let Position = document.getElementById('Position');
let date1 = document.getElementById('date1');
let date2 = document.getElementById('date2');
let imgone = document.getElementById('imgone');
let imgtwo = document.getElementById('imgtwo');

let saveData = document.getElementById('saveData');

let mood = 'SavaData'
let tmp;

let dataUser

if(localStorage.dataInfo != null){

    dataUser = JSON.parse(localStorage.dataInfo)
}else{
    dataUser = [];
}

saveData.onclick = function(){
    let newUser = {
        
        fname:fname.value,
        National:National.value,
        gouna:gouna.value,
        phone:phone.value,
        Resturant:Resturant.value,
        Position:Position.value,
        date1:date1.value,
        date2:date2.value,
        imgone:imgone.value,
        imgtwo:imgtwo.value,
    }

    if (mood  === 'SavaData') {
        dataUser.push(newUser);

    }else {
        dataUser[tmp] =  newUser;
        mood = 'SavaData';
        saveData.innerHTML =  'Sava Data';
    }
    

    // save local storge

    localStorage.setItem('dataInfo' ,  JSON.stringify(dataUser))
    
    clearData()
    showData ()
}



// clear input


function clearData(){
        fname.value = '';
        National.value = '';
        gouna.value = '';
        phone.value = '';
        Resturant.value = '';
        Position.value = '';
        date1.value = '';
        date2.value = '';
        imgone.value = '';
        imgtwo.value = '';
}



// viwe data read


function showData()
{
    let table = '';
    for (let i = 0; i < dataUser.length;i++){
        table += `
        <div class="col-lg-6 tablee">
                                <table class="table" align="center" id"table"=>
                                    <tr>
                                        <th> Name <input class="input-viwe" readonly value="${dataUser[i].fname}"> </input> </th>
                                        <th>National ID <input class="input-viwe" readonly value="${dataUser[i].National}"> </input></th>
                                    </tr>
                                    <tr>
                                        <th>El-Gouna ID <input class="input-viwe" readonly value="${dataUser[i].gouna}"></th>
                                        <th>Phone <input class="input-viwe" readonly value="${dataUser[i].phone}"></th>
                                    </tr>
                                    <tr>
                                        <th>Resturant <input class="input-viwe" readonly value="${dataUser[i].Resturant}"></th>
                                        <th>Position <input class="input-viwe" readonly value="${dataUser[i].Position}"></th>
                                    </tr>
                                    <tr>
                                        <th>بدايه الشهاده الصحيه<input class="input-viwe" readonly value="${dataUser[i].date1}"></th>
                                        <th>نهايه الشهاده الصحيه<input class="input-viwe" readonly value="${dataUser[i].date2}"></th>
                                    </tr>
                                    <tr>
                                        <th>
                                           img one  <img class="imgid " src="${dataUser[i].imgone}">
                                        </th>
                                        <th>
                                        img two  <img class="imgid " src="${dataUser[i].imgtwo}">                                        </th>
                                    </tr>
                                </table>
                                <buttom onclick="deleteData(${i})" class="btn btn-danger float-right delet" id="delete" >Remov</buttom>
                                <buttom onclick="updata(${i})" id="up" class=" btn btn-info ">Upate Data</buttom>
                            </div> 
                            <hr>
`
        
    }

   document.getElementById('listUser').innerHTML = table
    
}

showData()


// delet

function deleteData(i) 
{
    dataUser.splice(i,1);
    localStorage.dataInfo = JSON.stringify(dataUser);
    showData()
    
}

// updata



function updata(i){
    fname.value = dataUser[i].fname;
    National.value = dataUser[i].National;
    gouna.value = dataUser[i].gouna;
    phone.value = dataUser[i].phone;
    Resturant.value = dataUser[i].Resturant;
    Position.value = dataUser[i].Position;
    date1.value = dataUser[i].date1;
    date2.value = dataUser[i].date2;
    imgone.value = dataUser[i].imgone;
    imgtwo.value = dataUser[i].imgtwo;

    saveData.innerHTML =  'update';
    mood = 'update'
    tmp = i;
    
    scroll({
        top:0,
        behavior:'smooth'
    })

    
}



// print

// btn print all

function myprint(listUser){
    var printdata = document.getElementById(listUser);
    newwin = window.open("");
    newwin.document.write(printdata.outerHTML);
    newwin.print();
    newwin.close();
}




function myprintt(tr){
    var printdata = document.querySelector(tr);
    newwin = window.open("");
    newwin.document.write(printdata.outerHTML);
    newwin.print();
    newwin.close();
}
