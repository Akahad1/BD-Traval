const addtocart=(id)=>{
    let soppingcart={}

  const stroredCart =localStorage.getItem('shoppingCart')
 if(stroredCart){
    soppingcart=JSON.parse(stroredCart)
 }
 else{
    
 }


    // add quintity
    const quintity =soppingcart[id];

    if(quintity){
        const newquintiy =parseInt(quintity) +1
        soppingcart[id]=newquintiy
        // localStorage.setItem(id,newquintiy)

    }
    else{
        soppingcart[id]=1
      

    }
    localStorage.setItem('shoppingCart',JSON.stringify(soppingcart))

}
//  delet item
  const removeDb=(id)=>{
    console.log(id)
    const stroredCart=localStorage.getItem('shoppingCart')
    if(stroredCart){
        const soppingcart= JSON.parse(stroredCart)
        if(id in soppingcart){
            delete soppingcart[id];
            localStorage.setItem('shoppingCart',JSON.stringify(soppingcart))
        }

    }

  }

export{
    addtocart,
    removeDb

}