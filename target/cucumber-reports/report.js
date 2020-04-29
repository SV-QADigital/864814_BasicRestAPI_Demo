$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/placeValidation.feature");
formatter.feature({
  "name": "Validating Place API\u0027s",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify place is added successfully using AddPlace API",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Add Place Payload with \"\u003cname\u003e\" \"\u003clanguage\u003e\" \"\u003caddress\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User calls \"AddPlaceAPI\" with \"Post\" Http request",
  "keyword": "When "
});
formatter.step({
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "\"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify place_id created maps to \"\u003cname\u003e\" using \"getPlaceAPI\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "language",
        "address"
      ]
    },
    {
      "cells": [
        "AAHouse",
        "English",
        "WorldTradeCenter"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify place is added successfully using AddPlace API",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Add Place Payload with \"AAHouse\" \"English\" \"WorldTradeCenter\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Placestepdefinition.add_Place_Payload_with(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User calls \"AddPlaceAPI\" with \"Post\" Http request",
  "keyword": "When "
});
formatter.match({
  "location": "Placestepdefinition.user_calls_with_Http_request(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Placestepdefinition.the_API_call_got_success_with_status_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "Placestepdefinition.in_response_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.match({
  "location": "Placestepdefinition.in_response_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify place_id created maps to \"AAHouse\" using \"getPlaceAPI\"",
  "keyword": "And "
});
formatter.match({
  "location": "Placestepdefinition.verify_place_id_created_maps_to_using(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify if deleteAPI functionality is working",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "DeletePlace payload",
  "keyword": "Given "
});
formatter.match({
  "location": "Placestepdefinition.deleteplace_payload()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User calls \"deletePlaceAPI\" with \"Post\" Http request",
  "keyword": "When "
});
formatter.match({
  "location": "Placestepdefinition.user_calls_with_Http_request(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Placestepdefinition.the_API_call_got_success_with_status_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"status\" in respons body is \"OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "Placestepdefinition.in_respons_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
});