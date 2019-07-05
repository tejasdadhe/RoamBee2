const area_of_requirement =['Shipment Monitoring','Inventory Monitoring','Returnable Asset Monitoring','Field Asset Monitoring','Others'];
const mode_of_transport = ['Road','Rail','Ocean','Air'];
var PostData = {
    'blog_subscription':false,
    'marketing_subscription':false,
    'area_of_interest':'',
    'mode_of_transport':'',
    'first_name':'',
    'last_name':'',
    'email_id':'',
    'contact_num':'',
    'message':''
};

function getSelectedChbox() {
    var selchbox = [];
    var inpfields = document.getElementsByTagName('input');
    var nr_inpfields = inpfields.length;
    for(var i=0; i<nr_inpfields; i++) {
      if(inpfields[i].type == 'checkbox' && inpfields[i].checked == true) selchbox.push(inpfields[i].value);
    }
    return selchbox;
  } 

function openXontactDetailsForm()
{
    if(document.querySelector('input[name="area_of_interest"]:checked') != null)
    {
        const form1 = document.getElementById('form-page-1');
        const form2 = document.getElementById('form-page-2');

        form1.style.display = 'none';
        form2.style.display = 'block';

        let i = document.querySelector('input[name="area_of_interest"]:checked').value;
        PostData.area_of_interest = area_of_requirement[i];
        PostData.mode_of_transport = getSelectedChbox();

        console.log("PostData %j",PostData);
    }
}


function sendData()
{
    PostData.first_name = document.getElementById('fname').value;
    PostData.last_name = document.getElementById('lname').value;
    PostData.email_id = document.getElementById('email').value;
    PostData.contact_num = document.getElementById('contact_num').value;
    PostData.message = document.getElementById('message').value;
    PostData.blog_subscription = getCheckBoxValue('blog_sub');
    PostData.marketing_subscription = getCheckBoxValue('marketing_sub');
    
    console.log("Post Data %j",PostData);

    var xhttp = new XMLHttpRequest();  
    xhttp.onreadystatechange = showThankyouMessage;
    xhttp.open("POST", "http://13.126.190.115/:3000/saveData", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(PostData));




    //post('./saveData.php', {'data': PostData});
}

function showMenu()
{
    const form_container = document.getElementById("form-container");
    form_container.style.display = "block";
}

function showThankyouMessage()
{
    const form2 = document.getElementById('form-page-2');
    const form3 = document.getElementById('form-page-3');

    form2.style.display = 'none';
    form3.style.display = 'block';

}

function hideMenu()
{
    const form_container = document.getElementById("form-container");
    form_container.style.display = "none";
}

function getCheckBoxValue(id)
{
   return document.getElementById(id).checked
}