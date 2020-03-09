package runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\surbh\\eclipse-workspace\\cucumberSel\\src\\main\\java\\features\\signUp.feature",  //path of feature file
		glue={"stepDefinitionforSignup"},  //path of step definition file
		format={"pretty","html:test-output","json:json-output/cucumber.json","junit:junit_xml/cucumber.xml"},    //to generate different type of reports
		monochrome=true,  //it will display the console output in proper readable format
		strict=true,      //it will fail execution if any step is not defined in step definition
		dryRun=false      //used to check if the mapping is perfect in between feature file and step definition 
		)
public class TestRunner {

}
