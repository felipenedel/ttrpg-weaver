"use client";

import {useEffect, useState} from "react";

export interface Version {
  versionNumber: string;
  date: string;
  title: string;
  updates: string[];
}

export const useVersions = () => {
  const [versions, setVersions] = useState<Version[]>([]);

  useEffect(() => {
    fetch("/versions.json")
      .then((response) => response.json())
      .then((data) => setVersions(data));
  }, []);

  return versions;
};
