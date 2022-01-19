let button=document.querySelector("#loginButton");
        let id=document.querySelector("#loginID");
        let pass=document.querySelector("#loginPass");

        button.addEventListener("click",()=>{
            if(id.value==="admin"&&pass.value==="password"){
                location.href="D:\\CodesNStuff\\orai\\Hazifeladatok\\myPublicRepo\\Practice\\DOM\\admin\\admin.html"
            }
        })
