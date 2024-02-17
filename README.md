# personal-site

building a webpage to highlight a small bit of who i am and the projects ive worked on

what i used to build
-html
-css
-javascript

part 2:
requirments are:
-A GitHub project with a task board
-Detailed planning tickets with task descriptions for each one
-Updated GitHub repository with new commits
-An updated website with:
-improved layouts using CSS grid/flex
-proportional units
-dynamic styling with hover effects
-A contact form (id="form") with the following:
-These specific fields:
-name field
-email field
-message field
-submit button (id="submit" type="submit")
-The correct attributes is somewhere on the website
-Functionality that when submitted should redirect to another HTML file containing a success message (The form does not need to send a real email when submitted)
-A functioning "submit" button.

A "success" page (success.html)
javascript.js file with these details:
See Solution:

<!--
const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/success.html'
})
 -->

Remember to add the JS in a script tag in your contact html
success.js file with these details:
See Solution:

<!--
setTimeout(() => {
  window.location.href = window.location.origin
}, 5000)
 -->

Remember to add the JS in a script tag in your success html
Remember to add the CSS in a style tag in your success html
