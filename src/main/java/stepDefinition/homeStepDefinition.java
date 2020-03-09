package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class homeStepDefinition {

WebDriver driver;

//definitions

@Given("^User is already on home page$")
public void User_Is_Already_On_Home_Page(){ 
driver=new FirefoxDriver();
driver.get("https://www.travelmedicare.com/");
}
	

@When("^title of home page is Travel Medicare$")	
public void Title_of_Home_page(){
String title = driver.getTitle();
System.out.println("the title of the home page is::"+ title);
Assert.assertEquals("Travel Medicare", title);
}
	

@Then("^user clicks on Become an agent Button$")	
public void Click_on_become_An_Agent(){
driver.findElement(By.xpath("//a[contains(text(),'Become an Agent')]")).click();
}


@Then("^user is on become an agent page$")
public void User_Is_On_becomeAnAgent_Page(){
String url= driver.getCurrentUrl();
Assert.assertEquals("https://www.travelmedicare.com/register", url);
System.out.println("the url of the page is:: "+ url);
}

@Then("^close the browser$")
public void Close_the_Browser(){
driver.quit();
}

@Given("^User is already on become an agent page$")
public void User_is_on_becomeAnAgent_page() {
driver=new FirefoxDriver();
driver.get("https://www.travelmedicare.com/register");
}

@When("^url of become an agent page is https://www.travelmedicare.com/register$")
public void url_of_the_page() {
String url1=driver.getCurrentUrl();
Assert.assertEquals("https://www.travelmedicare.com/register", url1);
System.out.println("the url of the page is"+ url1);
}

//reg exp::
//1)  \"(.*)\"
//2) //\"([^\*]")\

@Then("^Then enter valid first name is \"(.*)\"$")
public void valid_first_name(String firstname) {
driver=new FirefoxDriver();	
driver.get("https://www.travelmedicare.com/register");	
driver.findElement(By.name("first_name")).sendKeys(firstname);
}

}
