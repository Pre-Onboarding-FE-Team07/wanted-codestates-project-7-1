import { ScrollView, Link, Text, VStack } from 'native-base';
import { useEffect, useState } from 'react';
import useIssues from '../hooks/useIssues';

export default function IssueScreen() {
  const [getIssues, getTime] = useIssues();
  const [issueList, setIssueList] = useState([]);

  useEffect(() => {
    getIssues('mui', 'material-ui').then(setIssueList);
  }, [getIssues]);

  return (
    <ScrollView>
      {issueList &&
        issueList.map((issue) => (
          <Link key={issue.id} href={issue.html_url}>
            <VStack
              bg="white"
              flex={1}
              my="1.5"
              h="16"
              display="flex"
              justifyContent="center"
              rounded="md"
              shadow="3"
              px="3"
            >
              <Text numberOfLines={1}>{issue.title}</Text>
              <Text numberOfLines={1} color="primary.700">
                {issue.user.login}
              </Text>
              <Text>{getTime(issue.created_at)}</Text>
            </VStack>
          </Link>
        ))}
    </ScrollView>
  );
}
