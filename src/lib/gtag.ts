export const GA_TRACKING_ID = 'G-L90RVTBWFY'

export const pageview = url => {
  ;(window as any).gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

export const event = ({ action, category, label, value }) => {
  ;(window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
