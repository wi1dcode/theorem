import { useEffect } from "react";

const PinterestTracker = ({ projectTitle }) => {
  useEffect(() => {
    if (typeof window.pintrk === "function") {
      window.pintrk("track", "pagevisit", {
        event_id: `visit_${projectTitle}`,
      });
    }
  }, [projectTitle]);

  return null;
};

export default PinterestTracker;
