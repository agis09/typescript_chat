import { chakra, Container, Flex, Link } from '@chakra-ui/react'
import { pagesPath } from '@src/lib/pathpida/$path'
import NextLink from 'next/link'

export const Footer = () => {
    return (
        <chakra.footer py={4} bgColor={'blue.600'} color={'white'}>
            <Container maxW={'container.lg'}>
                <Flex flexDirection={'column'} gap={2} alignItems={'start'}>
                    <Link as={NextLink} href={pagesPath.$url()['pathname']} lineHeight={1}>
                        トップページ
                    </Link>
                    <Link as={NextLink} href={pagesPath.signin.$url()['pathname']} lineHeight={1}>
                        サインイン
                    </Link>
                    <Link as={NextLink} href={pagesPath.signup.$url()['pathname']} lineHeight={1}>
                        サインアップ
                    </Link>
                    <Link as={NextLink} href={pagesPath.chat.$url()['pathname']} lineHeight={1}>
                        チャット
                    </Link>
                </Flex>
            </Container>
        </chakra.footer >
    )
}