var container = document.getElementById("container")

for(var i=0;i<30;i++){
    var elem=document.createElement("div")
    var high=Math.floor((Math.random()*500)+100)
    elem.innerText=high
    elem.style.backgroundColor="blue"
    elem.setAttribute('id',i)
    elem.setAttribute('class',"block")
    elem.style.width='40px'
    elem.style.height=(high + "px")
    elem.style.border="1px solid black"
    container.appendChild(elem)
    elem.style.fontSize="25px"
    elem.style.color="yellow"
}
var blocks = document.querySelectorAll(".block");
async function bubblesort(){
    for(var i = 0; i < 30; i++){ 
        for(var j = 0; j < ( 30-i -1 ); j++){
            var elem1 = document.getElementById(j);
            var elem2 = document.getElementById(j+1);
            elem1.style.backgroundColor="red"
            elem2.style.backgroundColor="red"
            await new Promise((resolve) =>{
                setTimeout(() => {
                    resolve();
                }, 5)}
            );
            if(elem1.textContent > elem2.textContent){
                swap(elem1,elem2);
            }
            elem1.style.backgroundColor="blue"
            elem2.style.backgroundColor="blue"
        }
    }
}
function swap(elem1,elem2){
    var temp = elem1.style.height;
    var temp1= elem1.textContent;
    elem1.textContent=elem2.textContent;
    elem1.style.height=elem2.style.height;
    elem2.textContent=temp1;
    elem2.style.height=temp;
}


async function selectionsort(){
    for(var i=0;i<blocks.length;i++){
        var min_index=i;
        blocks[i].style.backgroundColor="black"
        for(var j=i+1;j<blocks.length ;j++){
            blocks[j].style.backgroundColor="red"
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 0)
            );
            blocks[j].style.backgroundColor="blue"
            if(blocks[j].textContent<blocks[min_index].textContent){ 
                blocks[min_index].style.backgroundColor="blue"
                blocks[i].style.backgroundColor="black"
                min_index=j;
                blocks[j].style.backgroundColor="black"
            }
        }
        swap(blocks[i],blocks[min_index]);
        blocks[i].style.backgroundColor="blue"
        blocks[min_index].style.backgroundColor="blue"

    }
}

async function insertionsort(){
    blocks[0].style.backgroundColor="green"
    for( var i=1;i<blocks.length;i++){
        var key = blocks[i].textContent;
        blocks[i].style.backgroundColor="black"

        var high=blocks[i].style.height;
        await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                },1000)
            );
        var j = i-1;
        while(j>=0 && blocks[j].textContent>key){
            col=blocks[j].style.backgroundColor;
            blocks[j].style.backgroundColor="red";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                },1000)
            );
            blocks[j+1].textContent=blocks[j].textContent;
            blocks[j+1].style.height=blocks[j].style.height;
            j--;
            for(var k=i;k>=0;k--){
                blocks[k].style.backgroundColor="green";
            }
        }
        blocks[j+1].textContent=key;
        blocks[j+1].style.height=high;
        blocks[i].style.backgroundColor="green";
    }

}

function generate()
{
  window.location.reload();
}




