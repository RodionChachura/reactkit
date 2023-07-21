import { useWeb3React } from '@web3-react/core'
import { ComponentWithChildrenProps } from '@reactkit/ui/shared/props'

export const ConnectedWalletOnly = ({
  children,
}: ComponentWithChildrenProps) => {
  const { account } = useWeb3React()

  return <>{account ? children : null}</>
}

export const useAssertAccount = () => {
  const { account } = useWeb3React()

  if (!account) {
    throw new Error('No account')
  }

  return account
}
