import type { NextPage } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const ProfilePage = dynamic(() => import("../components/ProfilePage"), {
  suspense: true,
});

const Home: NextPage = () => {
  return (
    <Suspense fallback="Loading...">
      <ProfilePage />
    </Suspense>
  );
};

export default Home;
