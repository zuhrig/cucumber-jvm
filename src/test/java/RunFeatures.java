import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by zeque on 12/05/16.
 */


@RunWith(Cucumber.class)
@CucumberOptions(
        monochrome = true,
        features = "src/test/java/features/",
        dryRun = false,
        glue = "steps"

)
public class RunFeatures {

}