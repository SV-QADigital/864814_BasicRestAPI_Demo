package stepdefinitions;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import POJO.Location;
import POJO.place;
import Resources.APIResources;
import Resources.TestdataBuild;
import Resources.Utils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;

public class Placestepdefinition extends Utils
{

	RequestSpecification  res;
	 //RequestSpecification req;
	ResponseSpecification resspec;
	 Response response;
	 static String place_id;
	 
	 TestdataBuild data= new TestdataBuild();
	 @Given("Add Place Payload with {string} {string} {string}")
	 public void add_Place_Payload_with(String name, String language, String address) throws IOException 
	 {
		 res=given().spec(requestSpecification())
					.body(data.addPlacePayLoad(name,language,address));
	 }

	 @When("User calls {string} with {string} Http request")
	 public void user_calls_with_Http_request(String resource,String method) 
	 {
		 resspec= new ResponseSpecBuilder().expectStatusCode(200).expectContentType(ContentType.JSON).build(); 
			//Constructor will be called with valueof resource  which you pass
			APIResources resourceurl=APIResources.valueOf(resource);
			System.out.println(resourceurl.getResource());
			if(method.equalsIgnoreCase("Post"))
			  response=res.when().post(resourceurl.getResource());
			  // .then().spec(resspec).extract().response();
			  else if(method.equalsIgnoreCase("Get"))
				  response=res.when().get(resourceurl.getResource());
			
	     
	 }

	 @Then("the API call got success with status code {int}")
	 public void the_API_call_got_success_with_status_code(Integer int1)
	 {

			assertEquals(response.getStatusCode(),200);
	 }

	 @Then("{string} in response body is {string}")
	 public void in_response_body_is(String keyvalue, String Expectedvalue) 
	 {
		  assertEquals(getJsonPath(response,keyvalue),Expectedvalue);
	     
	 }

	 @Then("verify place_id created maps to {string} using {string}")
	 public void verify_place_id_created_maps_to_using(String name, String resource) throws IOException 
	 {
		 place_id=getJsonPath(response,"place_id");
			res=given().spec(requestSpecification()).queryParam("place_id", place_id);
			user_calls_with_Http_request(resource,"GET");
			String actualname=getJsonPath(response,"name");
			assertEquals(actualname,name);
		 
	 }

	 @Given("DeletePlace payload")
	 public void deleteplace_payload() throws IOException 
	 {
		 res=given().spec(requestSpecification())
				 
			.body(data.deletePlacePayload(place_id));
	     
	 }

	 @Then("{string} in respons body is {string}")
	 public void in_respons_body_is(String keyvalue, String Expectedvalue) 
	 {
		  assertEquals(getJsonPath(response,keyvalue),Expectedvalue);
	 }
	
	
	

}
