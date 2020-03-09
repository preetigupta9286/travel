$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/surbh/eclipse-workspace/cucumberSel/src/main/java/features/signUp.feature");
formatter.feature({
  "line": 1,
  "name": "Travel Medicare signup page Features",
  "description": "",
  "id": "travel-medicare-signup-page-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "User is able to create a new account Scenario",
  "description": "\r\nGiven: User is already on become an agent page",
  "id": "travel-medicare-signup-page-features;user-is-able-to-create-a-new-account-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "url of become an agent page is https://www.travelmedicare.com/register",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter valid first name is \"\u003cfirstname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter valid last name is \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "enter valid email for signup is \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter valid password is \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "enter valid confirm password is \"\u003cconpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "check the box i agree to website",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "travel-medicare-signup-page-features;user-is-able-to-create-a-new-account-scenario;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "password",
        "conpassword"
      ],
      "line": 15,
      "id": "travel-medicare-signup-page-features;user-is-able-to-create-a-new-account-scenario;;1"
    },
    {
      "cells": [
        "preeti",
        "gupta",
        "email@gmail.com",
        "123456",
        "123456"
      ],
      "line": 16,
      "id": "travel-medicare-signup-page-features;user-is-able-to-create-a-new-account-scenario;;2"
    },
    {
      "cells": [
        "surbhi",
        "gupta",
        "email1@gmail.com",
        "123456",
        "123456"
      ],
      "line": 17,
      "id": "travel-medicare-signup-page-features;user-is-able-to-create-a-new-account-scenario;;3"
    },
    {
      "cells": [
        "vivek",
        "garg",
        "email2@gmail.com",
        "123456",
        "123456"
      ],
      "line": 18,
      "id": "travel-medicare-signup-page-features;user-is-able-to-create-a-new-account-scenario;;4"
    },
    {
      "cells": [
        "vick",
        "aggarwal",
        "email3@gmail.com",
        "123456",
        "123456"
      ],
      "line": 19,
      "id": "travel-medicare-signup-page-features;user-is-able-to-create-a-new-account-scenario;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "User is able to create a new account Scenario",
  "description": "\r\nGiven: User is already on become an agent page",
  "id": "travel-medicare-signup-page-features;user-is-able-to-create-a-new-account-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "url of become an agent page is https://www.travelmedicare.com/register",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter valid first name is \"preeti\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter valid last name is \"gupta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "enter valid email for signup is \"email@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter valid password is \"123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "enter valid confirm password is \"123456\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "check the box i agree to website",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "signupStepDefinition.valid_url()"
});
formatter.result({
  "duration": 142100900,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitionforSignup.signupStepDefinition.valid_url(signupStepDefinition.java:27)\r\n\tat ✽.When url of become an agent page is https://www.travelmedicare.com/register(C:/Users/surbh/eclipse-workspace/cucumberSel/src/main/java/features/signUp.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "preeti",
      "offset": 32
    }
  ],
  "location": "signupStepDefinition.valid_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "gupta",
      "offset": 26
    }
  ],
  "location": "signupStepDefinition.valid_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "email@gmail.com",
      "offset": 33
    }
  ],
  "location": "signupStepDefinition.valid_email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 25
    }
  ],
  "location": "signupStepDefinition.valid_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 33
    }
  ],
  "location": "signupStepDefinition.valid_conpassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "signupStepDefinition.checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "signupStepDefinition.Close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "User is able to create a new account Scenario",
  "description": "\r\nGiven: User is already on become an agent page",
  "id": "travel-medicare-signup-page-features;user-is-able-to-create-a-new-account-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "url of become an agent page is https://www.travelmedicare.com/register",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter valid first name is \"surbhi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter valid last name is \"gupta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "enter valid email for signup is \"email1@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter valid password is \"123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "enter valid confirm password is \"123456\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "check the box i agree to website",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "signupStepDefinition.valid_url()"
});
formatter.result({
  "duration": 234600,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitionforSignup.signupStepDefinition.valid_url(signupStepDefinition.java:27)\r\n\tat ✽.When url of become an agent page is https://www.travelmedicare.com/register(C:/Users/surbh/eclipse-workspace/cucumberSel/src/main/java/features/signUp.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "surbhi",
      "offset": 32
    }
  ],
  "location": "signupStepDefinition.valid_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "gupta",
      "offset": 26
    }
  ],
  "location": "signupStepDefinition.valid_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "email1@gmail.com",
      "offset": 33
    }
  ],
  "location": "signupStepDefinition.valid_email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 25
    }
  ],
  "location": "signupStepDefinition.valid_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 33
    }
  ],
  "location": "signupStepDefinition.valid_conpassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "signupStepDefinition.checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "signupStepDefinition.Close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "User is able to create a new account Scenario",
  "description": "\r\nGiven: User is already on become an agent page",
  "id": "travel-medicare-signup-page-features;user-is-able-to-create-a-new-account-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "url of become an agent page is https://www.travelmedicare.com/register",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter valid first name is \"vivek\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter valid last name is \"garg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "enter valid email for signup is \"email2@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter valid password is \"123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "enter valid confirm password is \"123456\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "check the box i agree to website",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "signupStepDefinition.valid_url()"
});
formatter.result({
  "duration": 228900,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitionforSignup.signupStepDefinition.valid_url(signupStepDefinition.java:27)\r\n\tat ✽.When url of become an agent page is https://www.travelmedicare.com/register(C:/Users/surbh/eclipse-workspace/cucumberSel/src/main/java/features/signUp.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "vivek",
      "offset": 32
    }
  ],
  "location": "signupStepDefinition.valid_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "garg",
      "offset": 26
    }
  ],
  "location": "signupStepDefinition.valid_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "email2@gmail.com",
      "offset": 33
    }
  ],
  "location": "signupStepDefinition.valid_email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 25
    }
  ],
  "location": "signupStepDefinition.valid_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 33
    }
  ],
  "location": "signupStepDefinition.valid_conpassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "signupStepDefinition.checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "signupStepDefinition.Close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "User is able to create a new account Scenario",
  "description": "\r\nGiven: User is already on become an agent page",
  "id": "travel-medicare-signup-page-features;user-is-able-to-create-a-new-account-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "url of become an agent page is https://www.travelmedicare.com/register",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter valid first name is \"vick\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter valid last name is \"aggarwal\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "enter valid email for signup is \"email3@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter valid password is \"123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "enter valid confirm password is \"123456\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "check the box i agree to website",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "signupStepDefinition.valid_url()"
});
formatter.result({
  "duration": 366700,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitionforSignup.signupStepDefinition.valid_url(signupStepDefinition.java:27)\r\n\tat ✽.When url of become an agent page is https://www.travelmedicare.com/register(C:/Users/surbh/eclipse-workspace/cucumberSel/src/main/java/features/signUp.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "vick",
      "offset": 32
    }
  ],
  "location": "signupStepDefinition.valid_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "aggarwal",
      "offset": 26
    }
  ],
  "location": "signupStepDefinition.valid_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "email3@gmail.com",
      "offset": 33
    }
  ],
  "location": "signupStepDefinition.valid_email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 25
    }
  ],
  "location": "signupStepDefinition.valid_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 33
    }
  ],
  "location": "signupStepDefinition.valid_conpassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "signupStepDefinition.checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "signupStepDefinition.Close_browser()"
});
formatter.result({
  "status": "skipped"
});
});