import React, { useEffect, useState } from "react";
import { fetchPost } from "../api/fetchPost";
import { PaginationButtonList } from "./PaginationButtonList";
import { Toggle } from "./Toggle";
import { User } from "./User";

const UsersList = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [users] = useState([]);


  const fetchData = (e) => {
    const query = e.target.value;
    fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  const loadData = async () => {
    fetchPost(page, 4)
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
      });
  };

  
  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setData(null);
    loadData();
    // eslint-disable-next-line
  }, [page]);

  const clickHandler = (val) => {
    setPage(val);
  };

  return (
    <>
        <Toggle />
        <p></p>
        <div>
        <input onChange={fetchData} label="Search User" />
        {users.length > 0 && (
          <ul>
            {users.map((user) => (
              <p key={user.id}>{user.name}</p>
            ))}
          </ul>
        )}
      </div>
      {data == null ? (
        <div id="loader" className="loader">
          loading
        </div>
      ) : (
        data.map((ele) => {
          return <User ele={ele} key={ele.id} />;
        })
      )}
      <PaginationButtonList page={page} clickHandler={clickHandler} />
    </>
  );
};

export { UsersList };

  

  
