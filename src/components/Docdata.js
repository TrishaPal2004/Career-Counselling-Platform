import React, { useEffect, useRef, useState } from 'react';
import './Homepage.css'
const TableauDashboard = () => {
  const vizContainerRef = useRef(null);
  const [isApiLoaded, setApiLoaded] = useState(false);
  const [vizInstance, setVizInstance] = useState(null); // Track the viz instance

  const initViz = () => {
    if (!window.tableau || !isApiLoaded) {
      console.error('Tableau JavaScript API is not fully loaded.');
      return;
    }

    const containerDiv = vizContainerRef.current;
    if (!containerDiv) return;

    // Dispose of any existing viz before creating a new one
    if (vizInstance) {
      vizInstance.dispose();
    }

    const url = "https://public.tableau.com/views/DoctorsDashboard_17250493296580/DoctorData?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";
    const options = {
      width: containerDiv.offsetWidth,
      height: containerDiv.offsetHeight,
      hideTabs: true,
      hideToolbar: true,
    };

    const newVizInstance = new window.tableau.Viz(containerDiv, url, options);
    setVizInstance(newVizInstance); // Set the new viz instance
  };

  useEffect(() => {
    const loadScript = () => {
      if (window.tableau) {
        setApiLoaded(true);
      } else {
        console.error('Tableau JavaScript API failed to load.');
      }
    };

    if (window.tableau) {
      setApiLoaded(true);
    } else {
      const script = document.createElement('script');
      script.src = "https://public.tableau.com/javascripts/api/tableau-2.min.js";
      script.onload = loadScript;
      script.onerror = () => console.error('Failed to load Tableau JS API.');
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup viz instance if it exists
      if (vizInstance) {
        vizInstance.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (isApiLoaded) {
      initViz();
    }
  }, [isApiLoaded]);

  return (
    <div>
      <h2 style={{color: 'white'}}>AIM to be a DOCTOR? Heres some choices for you !</h2>
      {isApiLoaded ? (
        <div
          ref={vizContainerRef}
          style={{ width: '100%', height: '200vh' }}
        ></div>
      ) : (
        <div>Loading Tableau Dashboard...</div>
      )}
    </div>
  );
};

export default TableauDashboard;
