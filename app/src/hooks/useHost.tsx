import { useState, useEffect } from "react";
import { UseHostType } from "../entities/types";

export const useHost = (): UseHostType => {
  const [windowLocation, setWindowLocation] = useState<{
    protocol: string;
    hostname: string;
    port: string;
  }>({
    protocol: "",
    hostname: "",
    port: "",
  });

  useEffect(() => {
    setWindowLocation({
      ...windowLocation,
      protocol: window.location.protocol + "//",
      hostname: window.location.hostname,
      port: window.location.port ? `:${window.location.port}` : "",
    });
  }, []);

  return {
    protocol: windowLocation.protocol,
    hostname: windowLocation.hostname,
    port: windowLocation.port,
  };
};
