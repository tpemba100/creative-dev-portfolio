import GitHubIcon from "@mui/icons-material/GitHub";
import "./ShowRepo.css";

function ShowRepo({ repos }) {
  const filterInput = document.querySelector(".filter-repos");

  console.log(repos);

  function handleRepoSearch(e) {
    const search = e.toLowerCase();
    const repos = document.querySelectorAll(".repo");

    console.log("am running");
    console.log(search);
    console.log(repos);
    for (const repo of repos) {
      const repoText = repo.innerText.toLowerCase();

      if (repoText.includes(search)) {
        repo.classList.remove("hide");
        console.log("showwww");
      } else {
        repo.classList.add("hide");
        console.log("showwww");
      }
    }
  }

  return (
    <section class="repos section">
      <h2 class="section__title">Github Repos</h2>

      <input
        type="text"
        class="filter-repos"
        placeholder="Search Repositories"
        onChange={(e) => handleRepoSearch(e.target.value)}
      />
      <ul class="repo__list">
        {repos.map((repo) => (
          <li key={repo.id} className="repo">
            <h3>{repo.name}</h3>
            <br />
            <h3 class="lang-text">{repo.language}</h3>
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
    </section>
  );
}
export default ShowRepo;
