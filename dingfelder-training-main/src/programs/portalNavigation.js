export const PORTAL_CONTEXT_KEY = "airon.portalContext";

function readStoredPortalContext() {
  if (typeof window === "undefined") {
    return { portalSearch: "", seriesPaths: [] };
  }
  try {
    const raw = window.sessionStorage.getItem(PORTAL_CONTEXT_KEY);
    if (!raw) {
      return { portalSearch: "", seriesPaths: [] };
    }
    const parsed = JSON.parse(raw);
    return {
      portalSearch: typeof parsed?.portalSearch === "string" ? parsed.portalSearch : "",
      seriesPaths: Array.isArray(parsed?.seriesPaths) ? parsed.seriesPaths : [],
    };
  } catch {
    return { portalSearch: "", seriesPaths: [] };
  }
}

export function getPortalContext(locationState) {
  const stored = readStoredPortalContext();
  const portalSearch =
    locationState && typeof locationState.portalSearch === "string"
      ? locationState.portalSearch
      : stored.portalSearch;

  const seriesPaths =
    Array.isArray(locationState?.seriesPaths) && locationState.seriesPaths.length > 0
      ? locationState.seriesPaths
      : stored.seriesPaths;

  return { portalSearch, seriesPaths };
}

export function getNextCardPath(currentPath, locationState) {
  const { seriesPaths } = getPortalContext(locationState);
  const currentIndex = seriesPaths.indexOf(currentPath);
  if (currentIndex === -1) return null;
  return seriesPaths[currentIndex + 1] || null;
}

export function navigateToPortal(navigate, locationState) {
  const { portalSearch } = getPortalContext(locationState);
  navigate({
    pathname: "/",
    search: portalSearch || "",
  });
}

export function navigateToNextCard(navigate, currentPath, locationState) {
  const { portalSearch, seriesPaths } = getPortalContext(locationState);
  const nextPath = getNextCardPath(currentPath, locationState);
  if (!nextPath) return;
  navigate(nextPath, {
    state: {
      portalSearch,
      seriesPaths,
    },
  });
}
