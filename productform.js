
document.querySelector('.product-form-container').addEventListener('click',(e)=>{

    if(e.target.classList.contains('add-new-variation'))
    {
        e.target.parentNode.insertAdjacentHTML('afterend',
       
       `
       <div class="product-variation-with-price w-100"> 
            <hr style="width:100%">  
            <input type="text" name="" id="" class="w-25 metainput greybg"
            placeholder="color">
            <input type="text" name="" id="" class="w-25 metainput greybg"
            placeholder="size">
            <input type="number" name="" id="" class="w-25 metainput greybg"
            placeholder="product quantity">
            
                <input type="text" name="" id="" class="w-60 metainput greybg"
            placeholder="Product Price">
            <button class="w-15 btn-skyblue add-new-variation btn"> +Add New</button>
            <button class="w-15 btn-danger btn delete-variation"> Delete</button> 
       </div> 
       `)
    }

    if(e.target.classList.contains('delete-variation'))
    {
        e.target.parentNode.remove()
    }

    

    if(e.target.classList.contains('add-new-product'))
    {
        document.querySelector('.product-form').insertAdjacentHTML('afterend',
       
        `
        <div class="product-item" style="margin-top:20px;">

               
                   <svg class="delete-product-svg" width="97px" height="97px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/ 2000/svg" stroke="#000000" stroke-width="0.504"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9498 8.46447C17.3404 8.07394 17.3404 7.44078 16.9498 7.05025C16.5593 6.65973 15.9261 6.65973 15.5356 7.05025L12.0001 10.5858L8.46455 7.05025C8.07402 6.65973 7.44086 6.65973 7.05033 7.05025C6.65981 7.44078 6.65981 8.07394 7.05033 8.46447L10.5859 12L7.05033 15.5355C6.65981 15.9261 6.65981 16.5592 7.05033 16.9497C7.44086 17.3403 8.07402 17.3403 8.46455 16.9497L12.0001 13.4142L15.5356 16.9497C15.9261 17.3403 16.5593 17.3403 16.9498 16.9497C17.3404 16.5592 17.3404 15.9261 16.9498 15.5355L13.4143 12L16.9498 8.46447Z" fill="#000000"></path> </g></svg>
                
                <div class="product-item__product-link">
                    <div class="link_icon">
                        <svg fill="#F1C84E" width="256px" height="256px" viewBox="-3.2 -3.2 38.40 38.40" version="1.1" xmlns="http://www.w3.org/2000/svg" transform="rotate(-45)matrix(-1, 0, 0, 1, 0, 0)" stroke="#F1C84E" stroke-width="0.288"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.064"></g><g id="SVGRepo_iconCarrier"> <title>link</title> <path d="M25.33 9.84l-3.5 6.062c-0.553 0.956-1.775 1.284-2.732 0.731l-0.865-0.5 1-1.731c0.478 0.275 1.090 0.112 1.365-0.366l2.5-4.33c0.276-0.479 0.112-1.090-0.365-1.366l-3.465-2c-0.479-0.276-1.090-0.112-1.365 0.366l-2.5 4.33c-0.277 0.479-0.113 1.090 0.365 1.366l-1 1.731-0.865-0.5c-0.957-0.552-1.285-1.775-0.732-2.731l3.5-6.062c0.553-0.957 1.775-1.284 2.732-0.732l5.195 3c0.957 0.552 1.285 1.775 0.732 2.732zM13.5 20.33c-0.479-0.276-0.643-0.888-0.366-1.366l4-6.928c0.276-0.479 0.888-0.643 1.366-0.366s0.643 0.888 0.365 1.366l-4 6.928c-0.275 0.478-0.886 0.641-1.365 0.366zM12.768 17.599v0c-0.479-0.276-1.090-0.112-1.366 0.365l-2.5 4.33c-0.276 0.479-0.112 1.090 0.366 1.366l3.465 2c0.478 0.276 1.090 0.112 1.365-0.366l2.5-4.33c0.276-0.478 0.112-1.090-0.365-1.366v0l1-1.731 0.865 0.5c0.957 0.552 1.285 1.774 0.732 2.731l-3.5 6.062c-0.553 0.957-1.775 1.284-2.732 0.732l-5.196-3c-0.957-0.553-1.285-1.775-0.732-2.732l3.5-6.062c0.553-0.957 1.776-1.285 2.733-0.732l0.865 0.5-1 1.733z"></path> </g></svg>
                    </div>
                    <input
                     type="text" name="" id="" 
                     class="product_link_box"
                     placeholder="Place Product Link Here"
                    >
                </div>
                <div class="product-item__metainfo">  
                    <select name="cars" id="cars" class="w-30 metainput " >
                        <option value="" selected>FROM COUNTRY</option>
                        <option value="volvo">Volvo</option>
                    </select>

                    <select name="cars" id="cars" class="w-30 metainput" >
                        <option value="" selected>TO COUNTRY</option>
                        <option value="volvo">Volvo</option>
                    </select>

                    <input type="text" name="" id="" class="w-30 metainput greybg"
                     placeholder="Apply Code if any">

                    <input type="text" name="" id="" class="w-40 metainput greybg"
                     placeholder="Product Name">

                    <input type="text" name="" id="" class="w-25 metainput greybg"
                     placeholder="Product Weight in Gram">

                     <select name="cars" id="cars" class="w-25 metainput" >
                        <option value="" selected>Category</option>
                        <option value="volvo">Volvo</option>
                    </select> 
                     

                    <div class="product-variation-with-price w-100">

                        <input type="text" name="" id="" class="w-25 metainput greybg"
                        placeholder="color">
                        <input type="text" name="" id="" class="w-25 metainput greybg"
                        placeholder="size">
                        <input type="number" name="" id="" class="w-25 metainput greybg"
                        placeholder="product quantity">

                        <input type="text" name="" id="" class="w-65 metainput greybg"
                        placeholder="Product Price">
                        <button class="w-25 btn-skyblue  btn add-new-variation"> +Add New</button>
                       

                        <!--

                        <div class="product-variation-with-price w-100"> 
                        <hr style="width:100%">  
                        <input type="text" name="" id="" class="w-25 metainput greybg"
                        placeholder="color">
                        <input type="text" name="" id="" class="w-25 metainput greybg"
                        placeholder="size">
                        <input type="number" name="" id="" class="w-25 metainput greybg"
                        placeholder="product quantity">
                        
                         <input type="text" name="" id="" class="w-60 metainput greybg"
                        placeholder="Product Price">
                        <button class="w-15 btn-skyblue  btn"> +Add New</button>
                        <button class="w-15 btn-danger add-new-variation  btn"> Delete</button> 
                        </div>
                    -->       
                    </div>

                </div>
            </div>
        `)
    }

    if(e.target.classList.contains('delete-product')||e.target.classList.contains('delete-product-svg'))
    {
        e.target.parentNode.remove()
        //console.log(e.target.parentNode)
    }
  
  
})
