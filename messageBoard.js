var displayArea = document.getElementById("comments");
var btn = document.getElementById("sendButton");

btn.onclick = function(){
    var displayContent = document.getElementById("textArea").value;
    var displayName = document.getElementById("name").value;
    if (displayName === ""){
        displayName = "Anonymity"
    }
    // var displayTitle = document.getElementById("bar");
    // var titleIndex = displayTitle.selectedIndex;
    // var displayTitle = displayTitle.options[titleIndex].text;

    var displayEvaluation = document.getElementsByName("survey");
        for(var i=0; i<displayEvaluation.length; i++){
            if(displayEvaluation[i].checked){
                displayEvaluation = displayEvaluation[i].value;
                break;
            }
        }

    if(displayContent != ""){
        var comment_information = document.createElement("p");
        comment_information.style.whiteSpace = "pre";
        comment_information.style.margin = "10px";
        comment_information.style.fontSize = "16px";
        comment_information.style.fontWeight = "bold";
        comment_information.style.fontFamily = "Comic Sans MS"
        comment_information.append("Name: ", displayName, "      Evaluation: ", displayEvaluation)

        var comment_text = document.createElement("p");
        comment_text.display = "block";
        comment_text.style.marginLeft = "10px";
        comment_text.style.marginRight = "10px";
        comment_text.style.fontSize = "16px";
        comment_text.style.maxWidth = "100%";
        comment_text.style.fontFamily = "Consolas"
        comment_text.style.wordWrap = "bread-word";
        comment_text.style.wordBreak = "normal";
        comment_text.append(displayContent);

        var comment_block = document.createElement("div");
        comment_block.style.border = "0.1px solid #fff";
        comment_block.style.borderRadius = "10px";
        comment_block.style.marginTop = "20px";
        comment_block.style.height = "100px";

        var portrait = document.createElement("img");
        portrait.src = "keshav.png";
        portrait.style.display = "inline-block";
        portrait.style.height = "80px";
        portrait.style.margin = "10px";
        portrait.style.borderRadius = "5px";
        portrait.style.verticalAlign = "top";

        var comment_content = document.createElement("div");
        comment_content.style.display = "inline-block"
        comment_content.style.height = "100px";
        comment_content.style.width = "86%";
        comment_content.style.marginLeft = "10px";
        comment_content.style.backgroundColor = "#F4F6F6";
        comment_content.style.borderRadius = "5px";
        comment_content.style.verticalAlign = "top";

        comment_content.append(comment_information);
        comment_content.append(comment_text);

        comment_block.append(portrait);
        comment_block.append(comment_content);
        displayArea.append(comment_block);
        alert("Thank you! Your message will be published.");
    }else{
        alert("My friend you has not inputted anything yet.");
    }
}
