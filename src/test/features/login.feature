Feature: this is a login feature

  Scenario: Login auth scenario
    Given user is page "https://angularjs.realworld.io"
    Then user provides email "cyril@test.com" and password "test@123"
