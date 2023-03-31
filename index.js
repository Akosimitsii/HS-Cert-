

function Go(){
    let name = document.getElementById('name').value;
    let grade = document.getElementById('grade').value;
    let strand = document.getElementById('strand').value;
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let sem = document.getElementById('sem').value;

    let cname = document.getElementById('namec');
    let cgrade = document.getElementById('gradec');
    let cstrand = document.getElementById('strandc');
    let cday = document.getElementById('dayc');
    let cmonth = document.getElementById('monthc');
    let csem = document.getElementById('semc');

    cname.innerText = name;
    cgrade.innerText = grade;
    cstrand.innerText = strand;

    let newday = day.slice(1,2);
    if(day.length == 1){
        if (day == 1){
            cday.innerText = day + 'st';
        }else if (day == 2){
            cday.innerText = day + 'nd';
        }else if (day == 3){
            cday.innerText = day + 'rd';
        }else {
            cday.innerText = day + 'th';
        }
    }else if ((day >= 10) && (day <= 19)){
        cday.innerText = day + 'th';
    }else if (newday == 1){
        cday.innerText = day + 'st';
    }else if (newday == 2){
        cday.innerText = day + 'nd';
    }else if (newday == 3){
        cday.innerText = day + 'rd';
    }else {
        cday.innerText = day + 'th';
    }
   


    cmonth.innerText = month;
    csem.innerText = sem;

}

function printContent(el){
    var restorepage = $('body').html();
    var printcontent = $('#' + el).clone();
    $('body').html(printcontent);
    window.print();
     location.reload();
}