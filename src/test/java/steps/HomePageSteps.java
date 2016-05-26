package steps;


import cucumber.api.java.en.Then;
import org.junit.Assert;
import pages.HomePage;

/**
 * Created by zeque on 13/05/16.
 */
public class HomePageSteps extends DriverFactory {

    @Then("^she should be logged in to the application$")
    public void she_should_be_logged_in_to_the_application() throws Throwable {
        Assert.assertTrue(new HomePage(driver).isSignOutLinkDisplayed());
    }
}
