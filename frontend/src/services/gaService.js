import ReactGA from "react-ga4"

export const initializeGA = (trackingId) => {
  const consent = localStorage.getItem("cookieConsent")
  if (consent === "true" && trackingId) {
    ReactGA.initialize(trackingId)
    ReactGA.send("pageview")
  }
}

export const trackEvent = ({
  category = "General",
  action = "Click",
  label = "",
  value = 0,
}) => {
  const consent = localStorage.getItem("cookieConsent")
  if (consent === "true") {
    ReactGA.event({
      category,
      action,
      label,
      value,
    })
  }
}

export const trackPageView = (path) => {
  const consent = localStorage.getItem("cookieConsent")
  if (consent === "true") {
    ReactGA.send({ hitType: "pageview", page: path })
  }
}

export const trackTiming = (category, variable, value, label) => {
  const consent = localStorage.getItem("cookieConsent")
  if (consent === "true") {
    ReactGA.timing({
      category,
      variable,
      value,
      label,
    })
  }
}

export const trackMetric = (metricName, value) => {
  const consent = localStorage.getItem("cookieConsent")
  if (consent === "true") {
    ReactGA.gtag("event", "metric", {
      name: metricName,
      value: value,
    })
  }
}

export const trackUserData = (userId, email) => {
  const consent = localStorage.getItem("cookieConsent")
  if (consent === "true") {
    ReactGA.set({
      userId,
      email,
    })
  }
}

export const trackCustomEvent = (eventName, params = {}) => {
  const consent = localStorage.getItem("cookieConsent")
  if (consent === "true") {
    ReactGA.gtag("event", eventName, params)
  }
}
