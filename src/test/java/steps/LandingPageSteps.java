package steps;

import cucumber.api.java.en.When;
import pages.LandingPage;

/**
 * Created by zeque on 13/05/16.
 */
public class LandingPageSteps extends DriverFactory {

    @When("^she chooses to sign up$")
    public void she_chooses_to_sign_up() throws Throwable {
        new LandingPage(driver).she_chooses_to_sign_up();
    }


}
