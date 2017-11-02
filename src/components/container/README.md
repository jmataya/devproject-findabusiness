# Container Components

Components that are specifically related to interacting with the Google Places
and Clarifai APIs. This method for interacting with data was used instead of
Redux or some other Flux implementation because of this application's small
size. In addition, this helps make the component structures feel very
declarative.

These components accept the search parameters as `props` and return results as
`props` for their direct children.
