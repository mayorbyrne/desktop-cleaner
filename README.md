desktop-cleaner
===============

A small app to keep the desktop rid of unwanted files (by extension).  Checks every 24 hours
and automatically removes the unwanted files.

## Prerequisite
  This program uses node-windows.


Please note that the unwanted files must be an array of items with the format

```
.extension
```

in order to prevent unwanted deletions.