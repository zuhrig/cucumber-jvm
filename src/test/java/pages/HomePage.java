package pages;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Created by zeque on 13/05/16.
 */
public class HomePage {
    WebDriver driver;

    @FindBy(css = "a[href='/users/sign_out']")
    private WebElement signOutLinkCssReference;
    public HomePage(WebDriver driver) {
        this.driver = driver;
    }

    public boolean isSignOutLinkDisplayed() throws Throwable {
        return signOutLinkCssReference.isDisplayed();
    }
}
