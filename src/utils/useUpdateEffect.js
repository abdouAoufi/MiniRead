import { useEffect, useRef } from "react";

export default function useUpdateEffect(callback, dependencies) {
  const firseRenderRef = useRef(true);
  useEffect(() => {
    if (firseRenderRef.current === true) {
      firseRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}
