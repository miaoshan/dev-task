/* For this task you will be provided with both the existing HTML
 * (`current-html.html` - manual pairing version) of the component and the
 * starter HTML for the task, along with the completed CSS. Your task is to
 * write a JS function that generates a footnote reference list from
 * citation/reference pairs in the main content of the starter HTML file,
 * enabling the list to remain accurate if the pairs are reordered.
 *
 * To successfully complete the task, you must:
 *
 * 1. Populate the `js/script.js` file with a function that generates a
 *    footnotes reference list from the citation/reference pairs in the main
 *    content of the `starter-html.html` file
 *
 * 2. Link each citation to its reference so that the `selected` class is
 *    added to the appropriate reference `li` when the citation is clicked
 *
 * 3. Ensure that the function serves as intended if the citation/reference
 *    pairs are reordered within the main content
 */
 

function generateRef(inlineRefClassName){

    let reference = "";
    let citationIndex = 0; 
    let ol = document.createElement('ol');
    document.body.appendChild(ol);
    let aTag = document.createElement('a');
    aTag.innerText = "link text";
    let refArr = document.getElementsByClassName(inlineRefClassName);
    for (var i =0; i < refArr.length; i++){
        let li = document.createElement('li');
        li.id = "ref"+(i+1);
        reference = refArr[i].innerHTML;
        li.innerHTML = reference; 
        ol.appendChild(li);
        citationIndex = reference.replace(reference, i+1);
        refArr[i].innerHTML = "<a href='#ref"+(i+1)+"' onclick ='selected(" + i+ ")'>"+(i+1)+"</a>"

    }
  
  }

  function selected(i){
      
    document.getElementById("ref"+i).setAttribute("class", "selected");
  }

  
  generateRef("ref");
  