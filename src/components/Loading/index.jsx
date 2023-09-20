import { useState } from "react";
import BounceLoader from "react-spinners/BounceLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};

export const Loading = () => {
  let [loading, setLoading] = useState(true);

  return (
    <div className="sweet-loading">
      <h1>Procurando Pokémons!</h1>
      <BounceLoader
        color="#36d7b7"
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
