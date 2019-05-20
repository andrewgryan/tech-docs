
# FOREST

FOREST is a **f**orecast and **o**bservation **r**esearch, **e**xploration and **s**urvey **t**ool.
It aims to simplify navigation, visualisation and analysis of geophysical data. The
primary design principle is to free ourselves from static content and embrace web
technologies to explore large data sets and to capture user feedback. Instead of
traditional static image serving web sites FOREST intends to allow users to inspect data
dynamically, to pan/zoom, select regions, create site-specific forecasts with a single click and compare any data source against any other source. For example, display multiple models simultaneously against multiple observation data sets. 

Since FOREST generates content on demand we no longer have the burden of anticipating and pre-generating every possible
permutation of what the user may want to see. Instead we are free to let the user tunnel
down to individual grid points or observations and then zoom back out to display a higher level over view
of the data, to generate site-specific forecasts, atmospheric profiles or summaries of regions of interest. All by the twitch of a mouse wheel or pinch on a touch screen.

While other survey tools exist to capture user feedback, it seems crazy not to combine
the process of navigating data with that of reporting on the data. Simply having the server context
available while drafting a report allows us to do powerful things like serialising the settings
so that future readers of the report can re-hydrate the application state and pick up where the reporter left off. Another popular technique is to allow report writers to draw on the map and to then capture that
information to either display at a later date or to combine with other hand drawn annotations. For example, if
several users draw the same front on the map, we can easily compare their consensus against that of a machine
generated algorithm.

## Technologies

FOREST as a concept can be decomposed into two components, a front-end
responsible for visualising and interacting with the data and cloud services
that host the data. 

It's worth pointing out that although FOREST uses data stored in the cloud, the
viewer itself only sees a file system. We mount our S3 buckets using a tool
written in Go called goofys, which allows for POSIX-ish operations to be
performed. This means that FOREST can view data sitting on a local disk,
networked drive, external hard-drive or S3 bucket with zero code changes.

### Web viewer

FOREST's front-end is powered by a Python library called bokeh. Bokeh is a
general purpose plotting library that simplifies the creation and interaction
of web-based visualisations by abstracting away the communication between
server-side and client-side technologies. A programmer can write exclusively
in Python and let bokeh handle the JS, CSS, HTML and canvas manipulation
client-side.

To provide a maps application feel that has become ubiquitous since the rise
of smart phones we use Web Map Tiling Services (WMTS) available in bokeh to
generate roads, rivers, cities etc.

### Cloud services

Without data the view layer has very little to display aside from a few buttons and a map.
The data powering FOREST is hosted by Amazon using their various web services (AWS), the forecast and
observation data are stored in S3 buckets.

To deliver this data in a timely manner a dedicated Rose suite has been written
to convert the data to a suitable format and ship it to AWS. Although format
conversion is necessary at the time of writing, this is seen as an
implementation detail of the current incarnation of FOREST.

## Live demonstration

The public version of FOREST is hosted at https://forest.informaticslab.co.uk

