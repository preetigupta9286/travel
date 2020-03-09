package stepDefinitionforSignup;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class signupStepDefinition {
	
WebDriver driver;


@Given("^User is already on become an agent page$")
public void User_is_already_on_becomeanagent_page() {
driver=new FirefoxDriver();	
driver.get("https://www.travelmedicare.com/register");
}


@When("^url of become an agent page is https://www.travelmedicare.com/register$")
public void valid_url() {
String url=driver.getCurrentUrl();
Assert.assertEquals("https://www.travelmedicare.com/register", url);	
}


@Then("^user enter valid first name is \"([^\"]*)\"$")
public void valid_firstname(String firstname) {
driver.findElement(By.name("first_name"))	.sendKeys(firstname);
}


@Then("^enter valid last name is \"([^\"]*)\"$")
public void valid_lastname(String lastname) {
driver.findElement(By.name("last_name")).sendKeys(lastname);
}

@Then("^enter valid email for signup is \"([^\"]*)\"$")
public void valid_email(String email) {
driver.findElement(By.name("email")).sendKeys(email);
}


@Then("^enter valid password is \"([^\"]*)\"$")
public void valid_password(String password) {
driver.findElement(By.name("password")).sendKeys(password);
}


@Then("^enter valid confirm password is \"([^\"]*)\"$")
public void valid_conpassword(String conpassword) {
driver.findElement(By.name("password_confirmation")).sendKeys(conpassword);
}

@Then("^check the box i agree to website$")
public void checkbox() {
driver.findElement(By.xpath("//input[@class='btn-consition']")).click();
}


@Then("^quit the browser$")
public void Close_browser() {
driver.quit();	
}

}
