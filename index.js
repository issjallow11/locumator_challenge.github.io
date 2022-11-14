function difference_between_two_dates() {
  var date1 = new Date(document.getElementById('date1').value)
  var date2 = new Date(document.getElementById('date2').value)
  var value = document.getElementById('value')

  const diff = date2 - date1
  const result = diff / (1000 * 60 * 60 * 24)
  
  value.textContent = 'the difference between the two dates in days is '+ result

  // alert('the difference in days between the two dates is '+ value)
}