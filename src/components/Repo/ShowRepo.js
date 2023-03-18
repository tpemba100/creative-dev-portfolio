import GitHubIcon from "@mui/icons-material/GitHub";
import { useState, useEffect } from "react";
import { gitProjects } from "../../portfolio";
import "./ShowRepo.css";
import uniqid from "uniqid";

function ShowRepo() {
  const url = "https://api.github.com/users/tpemba100/repos";
  const [repoList, setRepoList] = useState([]);

  const [visibleRepos, setVisibleRepos] = useState(6);

  const fetchRepos = async () => {
    try {
      const res = await fetch(`${url}`);
      const data = await res.json();
      setRepoList(data);
      console.log("sucess Repo Fetch");
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  //to handle see more and show more
  function handleLoad() {
    if (visibleRepos === repoList.length) {
      setVisibleRepos(6);
    } else {
      setVisibleRepos(visibleRepos + 6);
    }
  }
  // make the search text into all lowercase
  // select all the repos with .repo
  function handleRepoSearch(e) {
    const search = e.toLowerCase();
    const repos = document.querySelectorAll(".repo");

    // 1. loop thru all repo -> make the text inside repo into lower case
    for (const repo of repos) {
      const repoText = repo.innerText.toLowerCase();

      // 2. IF texts in repo has search text, remove .hide
      if (repoText.includes(search)) {
        repo.classList.remove("hide");
      } else {
        // IF no same text, -> add hide.
        repo.classList.add("hide");
      }
    }
  }

  // console.log(repoList.length);
  // console.log(visibleRepos);

  return (
    <section className="repos section">
      <div className="section_header">
        <h3 className="section__title">github repo</h3>

        <h2 className="sub_title">Selected Repos</h2>
        <ul className="selected_repo_cont repo__list">
          {gitProjects.map((repo) => (
            <li key={uniqid()} className="selected_repo">
              <h3>{repo.name}</h3>
              <br />
              <p className="repo_description">{repo.description}</p>
              {repo.stack && (
                <div className="repo_stack">
                  {repo.stack.map((item) => (
                    <p key={uniqid()}>{item}</p>
                  ))}
                </div>
              )}
              <br />
              <a href={repo.sourceCode} className="link link--icon">
                <GitHubIcon style={{ fontSize: "30px" }} />
              </a>

              <br />
            </li>
          ))}
        </ul>

        <div className="filter-repos">
          <input
            type="text"
            placeholder="Search Repositories"
            onChange={(e) => handleRepoSearch(e.target.value)}
          />
        </div>
      </div>

      {/* all Repos */}
      <h3 className="sub_title sub_titlea">All Repos</h3>

      <ul className="repo__list">
        {repoList.slice(0, visibleRepos).map((repo) => (
          <li key={repo.id} className="repo">
            <h3>{repo.name}</h3>
            <br />
            <h2 className="lang-text">{repo.language}</h2>
            <br />
            <br />

            <a
              href={repo.html_url}
              aria-label="source code"
              className="link link--icon"
            >
              <GitHubIcon style={{ fontSize: "30px" }} />
            </a>
          </li>
        ))}
      </ul>

      {/* more or less button */}
      {visibleRepos <= repoList.length ? (
        <span
          type="button"
          className="btn btn--outline abt-btn"
          onClick={handleLoad}
        >
          {visibleRepos >= repoList.length ? "See Less" : "See More"}
        </span>
      ) : null}
    </section>
  );
}
export default ShowRepo;
