const Octokit = require("@octokit/rest");

let octokit;
if (process.env.NODE_ENV !== "testing") {
  Octokit({
    auth: process.env.GITHUB_TOKEN
  });
}

const reposForOrg = () => {
  return octokit.repos
    .listForOrg({
      org: "tipeio",
      type: "public"
    })
    .then(({ data }) => {
      return data;
    });
};

module.exports = {
  reposForOrg
};
