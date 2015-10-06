//console.log(greenjobs.length);
//console.log(_.identity(1));

var testdata = greenjobs.slice(0,4);
//console.log(testdata);

// listIndustries(data). Returns a list of strings indicating all the industries providing green jobs (no duplicates).
function listIndustries(data) {
  return _.unique(_.pluck(data, "Industry"));
}

//console.log(listIndustries(greenjobs));

// countyGreenJobs(data).  Returns an object where the keys are County names and the values are the number of Green Jobs listed in that County.
// 1. Group by county.
// 2. MapObject to change the array of jobs into an integer indicating the length of that array.

function groupJobsCounty(data) {
  return _.groupBy(data, function(record){return record["County"];});
}

function countyGreenJobs (data) {
  return _.mapObject(groupJobsCounty(data), function(val, key) {return val.length;});
}

//console.log(countyGreenJobs(greenjobs));

// jobswithKeyword(data, keyword). Returns a list of Job Titles containing the passed keyword.

function pluckJobs(data) {
  return _.pluck(data, "Job Title");
}

function jobsWithKeyWord(data, keyword) {
  return _.filter(pluckJobs(data), function(jobTitle) {return jobTitle.indexOf(keyword) > -1;});
}

//console.log(jobsWithKeyWord(greenjobs, "Solar"));

// industryJobs(data). Returns an array containing objects with keys "industry" and "jobs".

function industryGroupCount(data) {
  return _.countBy(data, function(record) { return record["Industry"];});
}

function industryJobs(data) {
  var groupCount = industryGroupCount(data);
  return _.map(_.keys(groupCount),
      function(key) {return {industry: key, jobs: groupCount[key]};});
}

// console.log(industryJobs(greenjobs));

// maxIndustryJobs(data).  Returns the object from the array returned by industryJobs with the largest value for jobs.

function maxIndustryJobs(data) {
  return _.max(industryJobs(data), function (record) {return record.jobs;});
}

console.log(maxIndustryJobs(greenjobs));

