async function question({getval}){
    const result =  await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=${getval}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "3aca4fffa0msh96bffca15768108p1565b4jsnf4fb1b61f6ec"
        }
    })

    const res = await result.json();
    const {answer,image} = res;
    console.log(answer,image);
    return{
        title:answer,
        image1:image
    };
}
function disans({title,image1}){
    const ans = document.querySelector('.answer');
    document.getElementById("imgch").src = image1;
    ans.innerText =  title;
}
function showborder(){
    document.querySelector('.titleanswer').style.border = "1px solid #000000"
}
async function run(){
    
    const formElem = document.querySelector('#form');
    formElem.addEventListener('click',async function(e) {
        const getval = document.querySelector('#valuelem').value;
        try{
            const {title,image1} = await question({getval});
            disans({title,image1});
            showborder();
        }catch (err) {
            console.log(err)
          }

        });
          
}
run();