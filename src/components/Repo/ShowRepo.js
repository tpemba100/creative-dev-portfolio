import GitHubIcon from "@mui/icons-material/GitHub";
import { useState, useEffect } from "react";
import "./ShowRepo.css";

function ShowRepo() {
  const url = "https://api.github.com/users/tpemba100/repos";
  const [repoList, setRepoList] = useState([]);

  const filterInput = document.querySelector(".filter-repos");
  const [visibleRepos, setVisibleRepos] = useState(6);

  const fetchRepos = async () => {
    try {
      const res = await fetch(`${url}`);
      const data = await res.json();
      setRepoList(data);
      console.log("sucess Repo Fetch");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

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

    console.log("am running");

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

  return (
    <section class="repos section">
      <div className="section_header">
        <h3 className="section__title">github repo</h3>

        <div class="filter-repos">
          <input
            type="text"
            placeholder="Search Repositories"
            onChange={(e) => handleRepoSearch(e.target.value)}
          />
        </div>
      </div>
      <ul class="repo__list">
        {repoList.slice(0, visibleRepos).map((repo) => (
          <li key={repo.id} className="repo">
            <h3>{repo.name}</h3>
            <br />
            <h2 class="lang-text">{repo.language}</h2>
            <br />
            <br />

            <a
              href={repo.html_url}
              aria-label="source code"
              class="link link--icon"
            >
              <GitHubIcon />
            </a>
          </li>
        ))}
      </ul>
      {visibleRepos <= repoList.length ? (
        <span
          type="button"
          className="btn btn--outline abt-btn"
          onClick={handleLoad}
        >
          {visibleRepos === repoList.length ? "Hide All" : "See More"}
        </span>
      ) : null}
    </section>
  );
}
export default ShowRepo;
