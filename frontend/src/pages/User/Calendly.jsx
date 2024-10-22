import React, { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";
import Loading from "../../components/Loading";

function Calendly() {
  const [isLoading, setIsLoading] = useState(true);
  const pageSettings = {
    backgroundColor: "ffffff",
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: "00a2ff",
    textColor: "4d5055",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-md:h-screen">
      {isLoading && <Loading />}
      <InlineWidget
        url="https://calendly.com/theorem-concept/rencontre-avec-theorem"
        pageSettings={pageSettings}
        styles={{ height: "100%" }}
      />
    </div>
  );
}

export default Calendly;
