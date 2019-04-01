//  WENT THROUGH A MILLION WAYS TO DO THIS B/C I DIDNT HAVE MY JS LINKED UP, ALWAYS LINK JS FIRST THING YOU DO!

// Some starter code
const container = document.querySelector("#addressList")

document.querySelector("#saveEntryAddress").addEventListener("click", event => {  
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
   console.log("click")
    const personName = document.querySelector("#fullName").value;
    console.log(personName)
  
    const personAddress = document.querySelector("#address").value;
    console.log(personAddress)
    // Once you have collected all the values, update the DOM
    // with some HTML
    // const inputContent = document.querySelector("#inputContent")
    container.innerHTML +=`
        <section>
            <h1>${personName}</h1>
            <div>${personAddress}</div>
        </section>
    `;

});