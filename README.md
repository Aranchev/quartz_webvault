`/save.sh ""`
`npx quartz build --serve`



```
#!/bin/bash
   cd ~/projects/quartz_webvault
   rm -rf .quartz-cache public
   npx quartz build --serve
```
```
wipes the build cache and previously generated site output, then rebuilds the site from scratch and starts the local dev server
```
