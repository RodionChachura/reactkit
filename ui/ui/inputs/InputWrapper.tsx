import styled, { css } from "styled-components"
import { VStack } from "ui/Stack"
import { Text } from "ui/Text"

import { InputErrorText } from "./InputErrorText"
import { getColor, matchColor } from "../theme/getters"

export interface Props {
  label?: React.ReactNode
  error?: string
  children: React.ReactNode
  as?: string | React.ComponentType<any>
}

const Container = styled(VStack)<{ isValid: boolean }>`
  color: ${matchColor("isValid", {
    true: "textSupporting",
    false: "alert",
  })};

  ${({ isValid }) =>
    isValid &&
    css`
      :focus-within {
        color: ${getColor("text")};
      }
    `}
`

export const InputWrapper = ({
  label,
  children,
  error,
  as = "label",
}: Props) => (
  <Container tabIndex="-1" isValid={!error} fullWidth gap={8} as={as}>
    {label && <Text as="div">{label}</Text>}
    {children}
  </Container>
)

export const InputWrapperWithErrorMessage = ({ children, ...props }: Props) => (
  <InputWrapper {...props}>
    <VStack style={{ position: "relative" }} fullWidth gap={4}>
      {children}
      <InputErrorText>{props.error}</InputErrorText>
    </VStack>
  </InputWrapper>
)
