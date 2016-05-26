package steps;

import cucumber.api.java.en.Given;

/**
 * Created by zeque on 13/05/16.
 */
public class StartingSteps extends DriverFactory {

    @Given("^the user is on landing page$")
    public void setup() throws Throwable {
        driver.get("http://accountsdemo.herokuapp.com");
        driver.manage().window().maximize();
    }
}
