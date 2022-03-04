import { ScrollView, Link, Text, VStack, Center, Spinner } from 'native-base';
import useIssues from '../hooks/useIssues';

export default function IssueScreen() {
  // useIssues(owner, repo, page) 로 바꿔주어야함
  const { data, error, getTime } = useIssues('mui', 'material-ui', 1);

  // 레포명을 받는 다면 이 repoName은 필요없어짐!
  // 임시 출력 함수
  const repoName = (url) => {
    const urlArr = url.split('/');
    return urlArr[urlArr.length - 1];
  };

  if (error) {
    return <Text>An error has occurred</Text>;
  }
  if (!data) {
    return <Spinner color="success.600" />;
  }
  return (
    <ScrollView>
      <VStack space={4} alignItems="center">
        {data?.map((issue) => (
          <Link key={issue.id} href={issue.html_url}>
            <Center w="64" h="20" rounded="md" bg="success.500">
              <Text numberOfLines={1} fontSize="md" bold color="success.700">
                {repoName(issue.repository_url)}
              </Text>
              <Text
                numberOfLines={1}
                bold
                _dark={{
                  color: 'success.700',
                }}
              >
                {issue.title}
              </Text>
              <Text numberOfLines={1} color="success.200">
                {issue.user.login}
              </Text>
              <Text>{getTime(issue.created_at)}</Text>
            </Center>
          </Link>
        ))}
      </VStack>
    </ScrollView>
  );
}
