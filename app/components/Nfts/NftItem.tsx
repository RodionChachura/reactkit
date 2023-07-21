import styled from "styled-components"
import { SafeImage } from "@reactkit/ui/ui/SafeImage"
import { VStack } from "@reactkit/ui/ui/Stack"
import { Text } from "@reactkit/ui/ui/Text"
import { getColor } from "@reactkit/ui/ui/theme/getters"

interface Props {
  address: string
  tokenId: string
  imageUrl: string
  title: string
}

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: ${getColor("mist")};
`

const Image = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
`

export const NftItem = ({ title, address, tokenId, imageUrl }: Props) => {
  return (
    <VStack gap={20}>
      <Text size={20}>{title}</Text>
      <ImageWrapper>
        <SafeImage
          src={imageUrl}
          render={(props) => <Image alt="title  " {...props} />}
        />
      </ImageWrapper>
      <VStack fullWidth gap={4}>
        <Text cropped weight="bold" color="supporting">
          <Text as="span" color="shy">
            Addr
          </Text>{" "}
          {address}
        </Text>
        <Text cropped weight="bold" color="supporting">
          <Text as="span" color="shy">
            Id
          </Text>{" "}
          {tokenId}
        </Text>
      </VStack>
    </VStack>
  )
}
