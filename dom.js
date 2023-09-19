// 1.JavaScript getElementById


    // function findElement() {
    //     const element = document.getElementById("id1");
    //     element.innerHTML = "Element found!.....";

    //     document.getElementById("id2").innerHTML = "Hello World.....!"
    // }      
    
    
    // const node1 = document.getElementById("id2");
    // const node2 = document.getElementById("id3");
    //     function textNode1() {
    //         alert(node1.innerHTML);
    //     }
    //     function textNode2() {
    //         alert(node2.innerHTML);
    //     }


// 2.getElementsByTagName()


    // const elements = document.getElementsByTagName("div");
    // console.log(elements);

    // function changeColor() {
    //   for (let i = 0; i < elements.length; i++) {
    //     if(i==0)
    //     elements[i].style.color = "red";
    // else
    //     elements[i].style.color = "blue";
    //   }
    // }


// 3.getElementsByClassName()


    // const elements = document.getElementsByClassName("blue");
    // console.log(elements);
    
    // function changeColor() {
    //   for (let i = 0; i < elements.length; i++) {
    //     elements[i].style.color = "blue";
    //   }
    // }}

// 4.querySelector()


    // const element = document.querySelector(".demo");
    // console.log(element);

    // function changeColors() {
    //   element.style.color = "red";
    // }


// 5.querySelectorAll


    // const elements = document.querySelectorAll("#sun p");
    // console.log(elements);

    // function changeColorss() {
    //   for (let i = 0; i < elements.length; i++) {
    //     elements[i].style.color = "red";
    //   }
    // }


// 6.javascript has attribute


    // const element = document.querySelector("p");
    // function check() {
    //   if (element.hasAttribute("name")) {
    //     alert("Yes 'name' attribute exist!");
    //   }
    //   else {
    //     alert("No 'name' attribute doesn't exist!");
    //   }
    // }



// 7.javascript get attribute

   
    // function attr(elem) {
    //   alert(elem.getAttribute("id"));
    // }


// 8.javascript set attribute


    // const element = document.querySelector("p");

    // function checkAttr() {
    //   alert(element.hasAttribute("name"));
    // }
    // function addAttr() {
    //   element.setAttribute("name", "myParagraph");
    // }


// 9.javascript remove attribute


    // const element = document.querySelector("button");

    // function remove() {
    //   element.removeAttribute("title");
    // }

    {
        // document.getElementById("demo").innerHTML = document.body.innerHTML;
    }
    
    {
        // document.getElementById("demo").innerHTML = document.documentElement.innerHTML;
    }
    
    {
        document.getElementById("demo1").innerHTML = "Number of forms tag: " + document.forms.length;
    }
    
    {
        // document.getElementById("demo2").innerHTML = "Number of images tag: " + document.images.length;
    }
    
    {
        // document.getElementById("demo3").innerHTML = "Number of links tag: " + document.links.length;
    }
    
    {
        // document.getElementById("demo4").innerHTML = "Number of scripts: " + document.scripts.length;
    }
    
    {
        // document.getElementById("title").innerHTML = "The title of this document is: " + document.title;
    }