/*
let query = ""
let req = {}
let netID = "trp36501"
let pw = "Forwarding12*"
let results = []

//  Textaread shows customer names upon loading

customerAdd.onshow=function(){

//  SELECT CODE Cleaned up
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

  if (req.status == 200) { //transit trip worked. 
    results = JSON.parse(req.responseText)
    console.log(`The results are \n ${results}`)
    if (results.length == 0)
      lblMessage3.value = "There are no customers in the database."
    else {
      let message = ""
      for (i = 0; i < results.length; i++)
        message = message + results[i][1] + "\n"  
      txtaCustomer3.value = message
    } // end else

  } else // the transit didn't work - bad wifi? server turned off?
    lblMessage3.value = "Error code: " + req.status
}

btnAddCustomer.onclick=function(){
  let name = inptName.value
  let street = inptStreet.value
  let city = inptCity.value
  let state = inptState.value
  let zipcode = inptZipcode.value
  query = `INSERT INTO customer375 VALUES = ${name} ${street} ${city} ${state} ${zipcode}`
  alert(query)
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

  if (req.status == 200) { //transit trip worked.
    lblAddConfirmation.value = `Customer ${name} has been added!`

  } else // the transit didn't work - bad wifi? server turned off?
    lblAddConfirmation.value = "Error code: " + req.status
}

//Jesse Antiques, 1113 F St, Omaha, NE, 68178
*/