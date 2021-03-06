$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("NewClientWorkflow.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "As a user\nI want to be able to add new clients in the system\nSo that i can add accounting data for that client",
  "id": "",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Sign up a new user",
  "description": "",
  "id": ";sign-up-a-new-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "the user is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "she chooses to sign up",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "she provides the first name as Sukesh",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "she provides the last name as Kumar",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "she provides the email as validemail@aq.com",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "she provides the password as password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "she provides the confirm password again as password",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "she signs-up",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "she should be logged in to the application",
  "keyword": "Then "
});
formatter.match({
  "location": "ClientSteps.setup()"
});
formatter.result({
  "duration": 10232405542,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.she_chooses_to_sign_up()"
});
formatter.result({
  "duration": 459203771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sukesh",
      "offset": 31
    }
  ],
  "location": "ClientSteps.she_provides_the_first_name_as(String)"
});
formatter.result({
  "duration": 130293333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kumar",
      "offset": 30
    }
  ],
  "location": "ClientSteps.she_provides_the_last_name_as(String)"
});
formatter.result({
  "duration": 98642298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validemail@aq.com",
      "offset": 26
    }
  ],
  "location": "ClientSteps.she_provides_the_email_as(String)"
});
formatter.result({
  "duration": 182396440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 29
    }
  ],
  "location": "ClientSteps.she_provides_the_password_as(String)"
});
formatter.result({
  "duration": 131653951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 43
    }
  ],
  "location": "ClientSteps.she_provides_the_confirm_password_again_as(String)"
});
formatter.result({
  "duration": 147204299,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.she_signs_up()"
});
formatter.result({
  "duration": 659759078,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.she_should_be_logged_in_to_the_application()"
});
formatter.result({
  "duration": 55363998,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a[href\u003d\u0027/users/sign_out\u0027]\"}\n  (Session info: chrome\u003d50.0.2661.94)\n  (Driver info: chromedriver\u003d2.21.371461 (633e689b520b25f3e264a2ede6b74ccc23cb636a),platform\u003dLinux 4.4.0-22-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 50 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027LPITN009609\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-22-generic\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.21.371461 (633e689b520b25f3e264a2ede6b74ccc23cb636a), userDataDir\u003d/tmp/.com.google.Chrome.s2c9jL}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d50.0.2661.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 7ee7b8c47fdd92fd0eaedd68ecd86ad7\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:437)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:425)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\n\tat steps.ClientSteps.she_should_be_logged_in_to_the_application(ClientSteps.java:65)\n\tat ✽.Then she should be logged in to the application(NewClientWorkflow.feature:16)\n",
  "status": "failed"
});
});