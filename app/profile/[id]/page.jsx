"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params.id}/posts`);
      const data = await response.json();
      setUserPosts(data);
    };

    if (params.id) fetchPosts();
  }, []);

  return (
    <Profile
      name={params.name}
      desc={`Welcome to  profile ${userName}'s personalized page.`}
      data={userPosts}
    />
  );
};

export default UserProfile;
