/* globals listIndustries */

describe("ListIndustries", function() {
  var testdata = greenjobs.slice(0,4);

  it("when passed testdata should return Construction", function() {
    expect(listIndustries(testdata)).toEqual(["Construction"]);
  });

  var noIndustryField = testdata.concat({foo:"bar"});

  it("should throw an error when a record does not have the Industry field", function() {
    expect(function(){listIndustries(noIndustryField);}).toThrowError("No Industry field.");
  });

  var emptyIndustryField = testdata.concat({Industry:""});

  it("should throw an error when a record has an empty Industry field", function() {
    expect(function(){listIndustries(emptyIndustryField);}).toThrowError("Empty Industry field.");
  });

});
