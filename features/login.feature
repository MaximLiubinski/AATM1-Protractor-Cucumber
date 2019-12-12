Feature: Login

  Scenario: Login 1
    Given I open base URL
    When I should be on "Login" page
    Then I wait until "Right Block -> Login" is visible for "5" seconds
    When I clear "Right Block -> Login" element
    And I type "default" in "Right Block -> Login" element
    When I clear "Right Block -> Login" element
    And I type "default" in "Right Block -> Login" element
    And I click "Right Block -> Login Button" element
    Then I should be on "Launches" page
    And I wait "10" seconds

  Scenario: Login 2
    Given I logged in RP
    Then I should be on "Launches" page