import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function GithubUserList() {
  const [userlist, setUserlist] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUserlist(json);
        console.log(json);
      })
      .catch((error) => {
        console.error("Error fetching:", error);
      });
  }, []);

  return (
    <ul>
      {userlist &&
        userlist.map((user) => (
          <li>
            <Link to={user.login}>{user.login}</Link>
          </li>
        ))}
    </ul>
  );
}
