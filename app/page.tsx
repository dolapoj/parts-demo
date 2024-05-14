import React, { Suspense } from "react";
import Landing from "./components/Landing";
import Skeleton from "./components/Skeleton";

export default function Home() {
  return (
    <main className="bg-landing">
      <Suspense fallback={Skeleton()}>
        <Landing />
      </Suspense>
    </main>
  );
}
