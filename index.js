function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_m7cjuxa";
  const templateID = "template_7njyscg";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("تم إرسال رسالتك بنجاح")

    }).then(
      message =>{
        if(message=='OK'){
          swal("Secussful", "You clicked the button!", "success");
        }
        else{
          swal("error", "You clicked the button!", "success");
        }
      }
    );
    .catch(err=>console.log(err));

}

