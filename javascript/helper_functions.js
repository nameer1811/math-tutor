/**
 * 
 * @param {String} filePath 
 * @param {JSON} postData 
 * @param {function} resultFunction 
 */
function sendRequest (filePath, postData, resultFunction) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", filePath, true);
    xhr.setRequestHeader('Content-Type', 'application/xwww-form-urlencoded');
    xhr.send(postData);
    xhr.onreadystatechange = function() {
        resultFunction(this.readyState, this.status, this);
    }
}
// <!-- Example of using sendRequest -->
// <p id="bad"></p>
// <script>
//     sendRequest("../php/checkCreds.php", JSON.stringify({'username': 'something else', 'password': 'pwd'}), (readyState, statusCode, theRequest) => {
//         if (readyState == 4 && statusCode == 200) {
//             const result = JSON.parse(theRequest.responseText);
//             document.getElementById('bad').innerHTML = result.starID + result.roleType;
//         }
//     });
// </script>
async function isTeacher() {
   return new Promise((resolve, reject) => {
        sendRequest("../php/isTeacher.php", JSON.stringify({}), (readyState, statusCode, theRequest) => {
            if (readyState == 4 && statusCode == 200) {
                const result = JSON.parse(theRequest.responseText);
                resolve(result);
            }
        });
    })
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
function sendBack() {
    window.location.replace("http://localhost/math-tutor/");
}