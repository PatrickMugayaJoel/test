const updateStatus = (type, id) => {
  // update incident's status

  let body = new Object();
  body.status = document.getElementById(id).value;

  const options = {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: new Headers({
      "content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("currentUserToken")
    })
  };

  return fetch(
    "http://127.0.0.1:5000/ireporter/api/v2/" + type + "/" + id + "/status",
    options
  )
    .then(response => response.json())
    .then(data => {
      if (data.status == 200) {
        localStorage.setItem("userMassage", " successfully updated.");
        window.location.href = "list.html";
      } else {
        userMessage(data.error, "#f5313180");
      }
    })
    .catch(err => {
      console.log("Fetch Error: ", err);
      userMessage(err, "#f5313180");
    });
};