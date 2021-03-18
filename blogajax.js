let url = window.location.search;
let queries = new URLSearchParams(url);

let id = queries.get("id");
let body = '';
console.log('id =>', id);

var xhr = new XMLHttpRequest();
xhr.open('GEt', `https://jsonplaceholder.typicode.com/posts/${id}`, true);

xhr.onload = function () {

  if (this.status == 200) {
    const user = JSON.parse(this.responseText);
    console.log('users => ', user)
    let output = '';

        output =`
        <div  id="nike">NIKE AIR MAX 270</div>
        
        <div class="display" id="why">
        
           <div id="innerid" ><strong>PRODUCT ID-0${user.id}</strong><br></div>
                      <hR>
           <div id="innerbody"> <strong>DESCRIPTION</strong>
           <br>
           ${user.body}</div>

           <strong id="price">PRICE-$99.00</strong>
           <br>
<button class="btn btn-info text-white">BUY NOW</button>
        </div>
        
        `
    
document.getElementById('titleid').innerHTML = output;
      }
    }
    xhr.send();
    

    // <div class="display" id="why">
    //        <div id="innerid" >${id}<br></div>
    //                   <hR>
    //        <div id="innerbody"> ${body}</div>

    //     </div>