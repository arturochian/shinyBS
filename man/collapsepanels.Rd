% Generated by roxygen2 (4.1.0): do not edit by hand
% Please edit documentation in R/bsCollapse.R
\name{Collapse Panels}
\alias{Collapse Panels}
\alias{bsCollapsePanel}
\title{Create Collapse Panels for Twitter Bootstrap Collapses in shiny}
\usage{
bsCollapsePanel(title, ..., id = NULL, value = NULL, type = NULL)
}
\arguments{
\item{title}{The title to appear at the top of the collapse panel}

\item{id}{The id of the collapse panel}

\item{value}{the value to return when this panel is open}

\item{type}{the type of panel to create (danger, warning, info, or success).}

\item{\dots}{Any shiny elements you wish to include within the panel}
}
\description{
Functions to create Collapse Panels for use with Twitter Bootstrap
 Collapses in shiny
}
\details{


\code{bsCollapsePanel}s should be included within
\code{\link{bsCollapse}}. They can contain any combination of shiny inputs,
shiny outputs, or HTML.
}
\note{
Run \code{bsDemo()} for a live example of shinyBS Collapses
 functionality.
}
\section{Options}{
 The \code{title} will appear at the top of the collapse
panel and will be visible even when the panel is collapsed. The is what the
user clicks to open the panel.

\code{id} and \code{value} are both optional, if \code{value} is missing
then the title text is assigned to the value.
}
\examples{
\dontrun{Run bsDemo() for examples}
}
\author{
Eric Bailey
}
\references{
\href{http://getbootstrap.com/2.3.2/}{Twitter Bootstrap 2.3.2}
}
\seealso{
Other collapse: \code{\link{Collapses}},
  \code{\link{bsCollapse}}, \code{\link{updateCollapse}}
}

