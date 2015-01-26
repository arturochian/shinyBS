---
title: "shinyBS updates"
author: "Eric"
date: "Sunday, January 25, 2015"
output: html_document
---

As components are updated I will add them to this list and note any changes to their behavior.

* Alerts
    + Removed 'block' option
    + Defaults to 'info' type
* Collapse Panels
    + Now accepts a 'type' argument to change styling of header
    + The 'multiple' option can no longer be changed from update collapse.
    + can change style of panels with the ```updateCollapse()``` function
* bsGlyph
    + Removed because of added native shiny support
* bsModal
    + Removed the href option (depreciated in bootstrap v3.3.0)
    + Added "size" option
    + added toggle argument to ```bsToggleModal()``` so you can explicitly tell the modal to open or close