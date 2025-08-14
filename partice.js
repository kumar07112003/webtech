let body=document.body;
let nav=document.createElement("nav");

let logo=document.createElement("img");
let div=document.createElement("div");
let leftaside=document.createElement("aside");
let rightaside=document.createElement("aside");
let div1=document.createElement("div");
let div2=document.createElement("div");
let form=document.createElement("form");
let h3=document.createElement("h3");









// nav
nav.style.display="flex";
nav.style.justifyContent="space-between";
nav.style.alignItems="center";
nav.style.padding="10px 30px"
nav.style.borderBottom="solid";
// img
logo.setAttribute("src","https://th.bing.com/th/id/OIP.6eF9vIFIzu-eVMuWWp6BAwHaE8?w=234&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3")
logo.style.width="100px"
//div
div.style.display="flex"
div.style.gap="20px"
div.style.fontSize="20px"
//leftasside
leftaside.innerText="Login";
// rightaside
rightaside.innerText="Register";
// div1
div1.style.width="100vw";
div1.style.height="100vh";
div1.style.display="flex";
div1.style.justifyContent="center";
div1.style.alignItems="center";
// div2
div2.style.width="400px";
div2.style.height="500px";
div2.style.border="solid 1px blue";
div2.style.borderRadius="10px";
div2.style.boxShadow="0px 0px 10px 0px"

//h3
h3.innerText="Login";
h3.style.display="flex";
h3.style.justifyContent="center";
h3.style.fontSize="2rem";
h3.style.padding="20px";
h3.style.color="blue";


// form

form.style.padding="40px 70px"
form.style.display="flex";
form.style.flexDirection="column";




[leftaside,rightaside].forEach(element => {
    
     element.style.cursor="pointer";
     element.style.color="blue";
     element.style.fontWeight="bold";

});



let field=[
     {labelname:"UserName ",for:"name",id:"name",placeholder:"Enter the Name",name:"name",required: ""},
     {labelname:"Password ",for:"password",id:"password",placeholder:"Enter the password" ,name:"password",required: ""},
     {labelname:"Email ",for:"Email",id:"Email",placeholder:"Enter the Email",name:"Email",required: ""}
];
for(let i=0;i<field.length;i++)
{
     let label=document.createElement("label");
     let input=document.createElement("input");
 
     label.innerText=field[i].labelname;
     label.setAttribute("for",field[i].for);
     input.setAttribute("id",field[i].id);
     input.setAttribute("placeholder",field[i].placeholder);
     input.setAttribute("name",field[i].name);
     input.setAttribute("required",field[i].required);
     label.style.padding="8px";
     input.style.padding="10px";
     input.style.width="250px";
     label.style.fontWeight="bold";
     input.style.borderRadius="10px"
     input.style.border="black solid 1px"



     form.appendChild(label);
     form.appendChild(input);

}

let submitbutton=document.createElement("button");
// submitbutton
submitbutton.innerText="submit";
submitbutton.style.width="100px";
submitbutton.style.padding="10px"
submitbutton.style.marginTop="40px"
submitbutton.style.marginLeft="70px"
submitbutton.style.border="none"
submitbutton.style.background="blue";
submitbutton.style.fontWeight="600";
submitbutton.style.color="white";
submitbutton.style.borderRadius="10px";
submitbutton.style.cursor="pointer";



// append
body.appendChild(nav);
nav.appendChild(logo);
nav.appendChild(div);
div.appendChild(leftaside);
div.appendChild(rightaside);
body.appendChild(div1);
div1.appendChild(div2);
div2.appendChild(h3);
div2.appendChild(form);
form.appendChild(submitbutton);








