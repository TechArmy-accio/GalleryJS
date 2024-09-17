
let images = document.querySelectorAll('img');


let detailsForm = document.querySelector('.details');
// select things inside the form
let name_box = document.querySelector('#name');
let email_box = document.querySelector('#email');
let username_box = document.querySelector('#username');

let submitted_details = document.querySelector('.submitted-details');

let dice_game = document.querySelector('.dice-game');

let winner = document.querySelector('.winner');

let userDetails = []


images[0].addEventListener("click", ()=>{

    // console.log("clicked");
       images[0].classList.add("selected");
     
       detailsForm.style.display = "block";
})


detailsForm.addEventListener("submit", (e)=>{
   e.preventDefault();
    let name = name_box.value;
    let email = email_box.value;
    let username = username_box.value;

    if(name == "" || email == "" || username == ""){
        alert("Please fill in all fields");
    }
    userDetails.push(name, email, username);

    // console.log(userDetails);

    detailsForm.style.display = "none";

    alert("Details submitted successfully, continue to next image");
})


images[1].addEventListener("click", ()=>{

    // console.log("clicked");
       images[1].classList.add("selected");

       userDetails.forEach(detail => {
            let para = document.createElement('p');
            para.innerText = detail;

            submitted_details.append(para);
       })
       
})


let score = 0
let click = 1
images[2].addEventListener("click", ()=>{
    let h1 = document.createElement('h1');
    dice_game.append(h1);
     images[2].classList.add("selected");
    let button = document.createElement('button');
    button.innerText = "Roll Dice";
    dice_game.append(button);
    button.addEventListener("click", ()=>{
        let newDiv = document.createElement('div');
        if(click>3 && score >=10){
            alert("You have already clicked 3 times");
            return
         }
       
        
        let dice = 1+ Math.floor(Math.random() * 5) ; // 3
        //  console.log(dice);
         score += dice;
        
          h1.innerText = `Score: ${score}`;
        
        
        for(let i = 1; i<=dice; i++){
            let img = document.createElement('img');
            img.src = "./images/dice.jpg";
            newDiv.append(img);
            // img.className = "diceImg";
            img.style.width = "50px";
            img.style.height = "50px";
            
       }
       dice_game.append(newDiv);
       
       if(click==3 && score < 10){
         console.log(click);
        reset()
       }
       click++;
    })
    
})


function reset(){

  setTimeout(()=>{
    console.log("I am executed");
    score = 0;
    click = 1;
    dice_game.innerHTML = "";
    let para = document.createElement('p');
    para.innerText = "You have lost the game, try again";
    dice_game.append(para);
  },3000)

     
}


images[3].addEventListener("click", ()=>{
    if(score < 10){
        alert("Try again after scoring more than 10");
        return
    }

    let button = document.createElement('button');
    button.innerText = "Get Amazon Coupon";
    let para = document.createElement('p');
    para.innerText = "Congratulations, you have won an Amazon coupon of Rupees 1 million dollars";

    winner.append(para, button);

    button.addEventListener("click", ()=>{
        let coupon = generateCoupoun();
        alert(`Your coupon code is: ${coupon}`);
    })
})



function generateCoupoun(){
    let collection = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(<>?){}[]";

    let str = ""
    for(let i = 1; i<=12; i++){
       let index = Math.floor(Math.random() * collection.length);
    str = str + collection[index]
    }

    return str;
}
