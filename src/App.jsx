import { Suspense } from "react";
import "./App.css";
import Countries from "./assets/components/countries/countries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<p> World is Waiting for u ROKY.....</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
