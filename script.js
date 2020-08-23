(() => {
    async function food({getval}){
      const result =  await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?targetCalories=${getval}&timeFrame=day`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "3aca4fffa0msh96bffca15768108p1565b4jsnf4fb1b61f6ec"
	}
})
            const res = await result.json();
            console.log(res);
            const {meals,nutrients} = res;
            
            return {
                title: meals[0].title,
                sourceUrl:meals[0].sourceUrl,
                imageType:meals[0].imageType,
                
                title1: meals[1].title,
                sourceUrl1:meals[1].sourceUrl,
                imageType1:meals[1].imageType,
                title2: meals[2].title,
                sourceUrl2:meals[2].sourceUrl,
                imageType2:meals[2].imageType,
                caloriess:nutrients.calories,
                carbohydrates:nutrients.carbohydrates,
                fat:nutrients.fat,
                protein:nutrients.protein
            };
            
    }
    function displaycal({caloriess,title,title1,title2,sourceUrl,sourceUrl1,sourceUrl2,protein,carbohydrates,fat}){
        const totalcal = document.querySelector('.Total');
        const titleall = document.querySelector('.title1');
        const titleall1 = document.querySelector('.title2');
        const titleall2 = document.querySelector('.title3');
        const linklem = document.querySelector('a[href="http://www.google.com"]');
        const linklem1 = document.querySelector('a[href="http://www.facebook.com"]');
        const linklem2 = document.querySelector('a[href="#"]');
        const proteinday = document.querySelector('.protiens');
        const carbday = document.querySelector('.carb');
        const fatday = document.querySelector('.fat');
        totalcal.innerText = `TotalCal:${caloriess}`;
        titleall.innerText = title;
        titleall1.innerText = title1;
        titleall2.innerText = title2;
        proteinday.innerText = `Protein/Day:${protein} gram`;
        carbday.innerText = `Carbohydrates/Day${carbohydrates} gram`;
        fatday.innerText = `Fat/Day${fat} gram`;
        linklem.href = sourceUrl;
        linklem1.href = sourceUrl1;
        linklem2.href = sourceUrl2;
        
    }
    function showA(){
      document.querySelector('.show').style.display = "block";
      document.querySelector('.show1').style.display = "block";
      document.querySelector('.show2').style.display = "block";
      document.querySelector('.menudis').style.display = "block";
      document.querySelector('.menudis1').style.display = "block";
      document.querySelector('.menudis2').style.display = "block";
      document.querySelector('.titledis').style.border = "1px solid #000000"
      document.querySelector('.titledis1').style.border = "1px solid #000000"
      document.querySelector('.titledis2').style.border = "1px solid #000000"
    }

    // function getInput() {
    //     x = document.querySelector("#valuelem").value
    //     return x;
    //   }
    
    async function run() {
        const formElem = document.querySelector('#form');
        // const getval = document.querySelector('#valuelem').value;
        formElem.addEventListener('click',async function(e) {
            const getval = document.querySelector('#valuelem').value;
            try{
                const {title,sourceUrl,imageType,title1,sourceUrl1,imageType1,title2,sourceUrl2,imageType2,caloriess,carbohydrates,fat,protein} = await food({getval});
                console.log(title);
                 displaycal({caloriess,title,title1,title2,sourceUrl,sourceUrl1,sourceUrl2,protein,carbohydrates,fat});
                showA();
                
            }   catch (err) {
                console.log(err)
              }
            // x = getval.value;
            // showval.innerText = x;
            // y = showval.innerText;
            // return true;
        });

        // const {title,sourceUrl,imageType,title1,sourceUrl1,imageType1,title2,sourceUrl2,imageType2,caloriess,carbohydrates,fat,protein} 
        // = await food({y});

        
        
        
        console.log(formElem);
        // console.log(sourceUrl);
        
        
        
  }
  run();
})();
