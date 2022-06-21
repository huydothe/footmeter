function ftm(foot){
    let meter=foot*0.305;
    return meter;
}
function mtf(meter){
    let foot=meter*3.279;
    return foot;
}
let foot=+prompt('Enter foot');
document.write(foot + ' foot ' + ' = ' + ftm(foot) + ' meter');
document.write('<br>')
let meter=+prompt('Enter meter');
document.write(meter + ' meter ' + ' = ' + mtf(meter) + 'foot');