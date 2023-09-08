import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { Tooltip } from '@reactkit/ui/ui/Tooltip'
import { Text } from '@reactkit/ui/ui/Text'
import { Navigation } from 'navigation'

const TooltipPage: NextPage = () => {
  return (
    <Navigation>
      <DemoPage youtubeVideoId="gt-29kdEwtA" title="Tooltip">
        <Tooltip
          renderOpener={(props) => (
            <Text {...props} weight="semibold" color="supporting">
              Learn more about Increaser
            </Text>
          )}
          content={
            'The app empowers you to take the freedom from remote work to live a more productive, healthier, and happier life by leveraging its holistic toolkit for managing time effectively, getting into a deep focus state, and building positive habits.'
          }
        />
      </DemoPage>
    </Navigation>
  )
}

export default TooltipPage
