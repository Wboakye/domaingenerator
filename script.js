window.onload = () => {
    var pronoun = ['the','our'];
    var adj = ['great', 'big' ];
    var noun = ['jogger','racoon'];
    
    
     var generated = "";
     
     pronoun.forEach((x)=>{
      adj.forEach((y)=>{
        noun.forEach((z)=>{
          generated += x + y + z + ".com <br>";
          
        });
      });
    });

    
    document.getElementById("generator").innerHTML = generated ;
};