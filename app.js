function UpdateCaseNumber(product,mainPrice,lessThenZero){
    const case_input = document.getElementById(product+'_input');
    const case_input_num = parseInt(case_input.value);
    if(lessThenZero){
        let case_number = case_input_num + 1 ;
        case_input.value = case_number;

        // total price 
        const price = document.getElementById(product+'_price');
        const price_int = parseInt(price.innerText)
        const total_price = case_number * mainPrice ;
        price.innerText = total_price;
    }
    

    else if(case_input_num > 1){
        let case_number = case_input_num - 1 ;
        case_input.value = case_number;

        // total price 
        const price = document.getElementById(product+'_price');
        const price_int = parseInt(price.innerText)
        if(price_int > mainPrice){
            const total_price = price_int - mainPrice ;
            price.innerText = total_price;
        }    
    }

    finalAmount();
      
}


// get input 
function getInput(product){
    const phone_inp = document.getElementById(product + '_input').value;
    const  phone_input = parseInt(phone_inp);
    return phone_input ;
 }

// total amount 
function finalAmount(){
    const sub_total = document.getElementById('sub_total');
    const total_phone_ammount =  getInput('phone') *1219;
    const case_phone_ammount =  getInput('case') *59;


    const total_shoping_amount = total_phone_ammount + case_phone_ammount;
    sub_total.innerText = total_shoping_amount;

    const tax_amount = total_shoping_amount / 10;
    document.getElementById('tax_amount').innerText = tax_amount;

    const finel_amount = total_shoping_amount + tax_amount;
    document.getElementById('final_amount').innerText = finel_amount ;
    

    
}






// for case get input and update price 
document.getElementById('case_add_btn').addEventListener('click',function(){
    UpdateCaseNumber('case',59,true);
})
document.getElementById('case_minus_button').addEventListener('click',function(){
    UpdateCaseNumber('case',59,false);
})

// for phone get input and update price 
document.getElementById('phone_add_btn').addEventListener('click',function(){
    UpdateCaseNumber('phone',1219,true);
})
document.getElementById('phone_minus_button').addEventListener('click',function(){
    UpdateCaseNumber('phone',1219,false);
})