import { HStack, Skeleton, VStack } from 'native-base';

export default function LoadingSkeleton() {
  return (
    <VStack flex={1} space="3" mt="2">
      <HStack justifyContent="center" space="3">
        <Skeleton borderRadius="full" bg="gray.100" w="3" h="3" />
        <Skeleton borderRadius="full" bg="gray.100" w="3" h="3" />
        <Skeleton borderRadius="full" bg="gray.100" w="3" h="3" />
      </HStack>
      <Skeleton h="16" borderRadius="md" bg="gray.100" />
      <Skeleton h="16" borderRadius="md" bg="gray.100" />
      <Skeleton h="16" borderRadius="md" bg="gray.100" />
    </VStack>
  );
}
