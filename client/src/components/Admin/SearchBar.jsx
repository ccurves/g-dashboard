import { useState } from "react";
import CloseTwoTone from "@mui/icons-material/CloseTwoTone";
import { getCookie } from "../../helpers/auth";
import axios from "axios";

const SearchBar = ({ data, setUsers }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const authToken = getCookie("token");
  const getUsers = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/admin/users`,
        {
          headers: {
            token: authToken,
          },
        }
      );

      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInput = (e) => {
    const text = e.target.value;
    const newfilter = data.filter((value) => {
      return value.email.toLowerCase().includes(text.toLowerCase());
    });
    setSearchText(text);

    if (text === "") {
      setFilteredData([]);
      getUsers();
    } else {
      setFilteredData(newfilter);
      setUsers(newfilter);
    }
  };

  const handleEnterKeyPressed = (e) => {
    if (e.key === "Enter") {
      setUsers(filteredData);
    }
  };

  const handleClick = (e) => {
    setUsers(filteredData);
  };

  const clearInput = () => {
    setFilteredData([]);
    setSearchText("");
    getUsers();
  };

  return (
    <form>
      <div class="input-group input-group-solid" id="kt_chat_aside_search">
        <span class="input-group-text" id="basic-addon1">
          <span class="svg-icon svg-icon-1 svg-icon-dark">
            {filteredData.length === 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onClick={handleClick}
              >
                <rect
                  opacity="0.5"
                  x="17.0365"
                  y="15.1223"
                  width="8.15546"
                  height="2"
                  rx="1"
                  transform="rotate(45 17.0365 15.1223)"
                  fill="black"
                />
                <path
                  d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                  fill="black"
                />
              </svg>
            ) : (
              <CloseTwoTone
                className="search-icon clearBtn"
                onClick={clearInput}
              />
            )}
          </span>
        </span>
        <input
          type="text"
          class="form-control ps-0 py-4 h-auto"
          placeholder="Search"
          onChange={handleInput}
          onKeyPress={handleEnterKeyPressed}
          value={searchText}
        />
      </div>
    </form>
  );
};

export default SearchBar;
