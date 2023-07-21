import type { NextPage } from 'next'
import { Countdown } from '@reactkit/ui/ui/Countdown'
import { hoursToMilliseconds } from 'date-fns'
import { DemoPage } from 'components/DemoPage'

const CountdownPage: NextPage = () => {
  const endsAt = Date.now() + hoursToMilliseconds(24 * 10)
  return (
    <DemoPage youtubeVideoId="70-0EZT650o" title="Countdown">
      <Countdown endsAt={endsAt} />
    </DemoPage>
  )
}

export default CountdownPage
