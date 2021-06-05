import React, { useState, useEffect, useCallback } from "react";
import CommunityPresenter from "./CommunityPresenter";
// import Dummy from "../../assets/Lenna.png";
import axios from "axios";
import ipObj from "../../key"
import { useSelector, useDispatch } from "react-redux";
import { setSearchMode } from "../../modules/searchMode";

function CommunityContainer () {
  const uid = useSelector((state) => state.uid);
  const dispatch = useDispatch();

  const searchMode = useSelector((state) => state.searchMode);
  const [posts, setPosts] = useState([]);


  //게시글 리스트 서버로부터 받아와서 postList 초기화 
  useEffect(() => {
    axios
      .get(`${ipObj.ip}/postList`)
      .then((response) => {
        setPosts(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => {
        console.error(err.response);
      });

    return () => {
      dispatch(setSearchMode(false));
    };
  }, [dispatch]);

  const openSearch = useCallback(() => {
    dispatch(setSearchMode(true));
  }, [dispatch]);

  return (
    <>
      <CommunityPresenter
        posts={posts}
        uid={uid}
        openSearch={openSearch}
        searchMode={searchMode}
      />
    </>
  );
}

export default React.memo(CommunityContainer);
