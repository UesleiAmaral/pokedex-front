import { useState } from "react";
import BounceLoader from "react-spinners/BounceLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
  textAlign:"center"
};

export const Loading = () => {
  let [loading, setLoading] = useState(true);

  return (
    <div className="sweet-loading">
      <h1 style={{textAlign:"center", marginBottom:"3px", color:'white'}}>Procurando Pokémons!</h1>
      <BounceLoader
        color="#ffffff"
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
