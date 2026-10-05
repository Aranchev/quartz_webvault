import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as Component from "./quartz/components"
import * as ExternalPlugin from "./.quartz/plugins"

const config = await loadQuartzConfig()
export default config

export const layout = await loadQuartzLayout({
  defaults: {
    afterBody: [
      Component.ConditionalRender({
        component: ExternalPlugin.RecentNotes({
          title: "Recent notes",
          limit: 5,
          showTags: true,
        }),
        condition: (props) => props.fileData.slug === "index",
      }),
    ],
  },
})
