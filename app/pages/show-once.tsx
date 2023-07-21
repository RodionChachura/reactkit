import type { NextPage } from 'next'

import { DemoPage } from 'components/DemoPage'
import { ShowOnce } from 'state/ShowOnce'
import { PersistentStorageKey } from 'state/persistentStorage'
import { ClientOnly } from '@reactkit/ui/ui/ClientOnly'

const ShowOncePage: NextPage = () => {
  return (
    <DemoPage title="Show once" youtubeVideoId="jFKjpAsm24I">
      <ClientOnly>
        <ShowOnce storageKey={PersistentStorageKey.ShowOnceEducation}>
          You will see this sentence only once.
        </ShowOnce>
      </ClientOnly>
    </DemoPage>
  )
}

export default ShowOncePage
