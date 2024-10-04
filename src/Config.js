// src/config.js

const YearId = sessionStorage.getItem('latestYearId') || sessionStorage.getItem('selectedYrID');
const branchId = sessionStorage.getItem('selectedBranchKey');
const username = sessionStorage.getItem('username');
const Branch = sessionStorage.getItem('selectedBranch');
const UserId = sessionStorage.getItem('userId')
const config = {
  public_apiUrl: 'http://172.16.16.157:8083/api',
  public_yearId: YearId,  
  public_branchId: branchId,
  public_userName: username,
  public_branchName:Branch,
  public_userId:UserId
};

export default config;
