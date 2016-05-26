package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by zeque on 13/05/16.
 */
public class LandingPage {
    WebDriver driver;

    @FindBy(linkText = "Sign Up")
    private WebElement signUpLinkText;


    public LandingPage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void she_chooses_to_sign_up() throws Throwable {
        signUpLinkText.click();
    }
}
