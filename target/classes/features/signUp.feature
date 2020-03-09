Feature: Travel Medicare signup page Features
Scenario Outline: User is able to create a new account Scenario

Given: User is already on become an agent page
When url of become an agent page is https://www.travelmedicare.com/register
Then user enter valid first name is "<firstname>"
Then enter valid last name is "<lastname>"
Then enter valid email for signup is "<email>"
Then  enter valid password is "<password>"
Then enter valid confirm password is "<conpassword>"
Then check the box i agree to website
Then quit the browser

Examples:
|firstname| lastname | email | password | conpassword|
|preeti| gupta | email@gmail.com | 123456 | 123456|
|surbhi| gupta | email1@gmail.com | 123456| 123456|
|vivek| garg | email2@gmail.com | 123456 | 123456|
|vick| aggarwal | email3@gmail.com | 123456 | 123456|