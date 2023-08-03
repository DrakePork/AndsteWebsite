import { Title, Text, Container, Space, Divider, Center, Box } from '@mantine/core';
import useStyles from './About.styles';

export function About() {
  const { classes } = useStyles();
  return (
    <Box sx={{ minHeight: "100vh" }} className={classes.angle} bg="#212529" pb={50}>
      <Title className={classes.title} align="center" mb={50}>
        <Text id="about" inherit variant="gradient" gradient={{ from: '#da77f2', to: '#9c36b5'}} component="span">
          About
        </Text>
        <Center><Divider className={classes.divider} my="md" size="xl" /></Center>
      </Title>
      <Container>
        <Text inherit component="span">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius vel pharetra vel turpis nunc. Elementum sagittis vitae et leo. Diam donec adipiscing tristique risus. At varius vel pharetra vel turpis nunc. Id volutpat lacus laoreet non curabitur gravida. Diam sollicitudin tempor id eu nisl. Viverra nam libero justo laoreet sit amet cursus sit. Eu lobortis elementum nibh tellus. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Sit amet nisl suscipit adipiscing bibendum est ultricies. Aliquam ultrices sagittis orci a. Aliquam eleifend mi in nulla.
        <Space h="xl"/>
        Mauris augue neque gravida in fermentum et. Dui faucibus in ornare quam viverra orci sagittis. Aliquam malesuada bibendum arcu vitae elementum. Magna fringilla urna porttitor rhoncus dolor purus non. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Tincidunt augue interdum velit euismod in pellentesque massa placerat. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Ut etiam sit amet nisl purus in. Commodo nulla facilisi nullam vehicula ipsum. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Ullamcorper velit sed ullamcorper morbi. Odio euismod lacinia at quis risus sed vulputate.
        <Space h="xl"/>
        Augue eget arcu dictum varius duis. Congue mauris rhoncus aenean vel elit. Egestas congue quisque egestas diam in arcu cursus euismod quis. Justo nec ultrices dui sapien. Felis bibendum ut tristique et egestas. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Vitae ultricies leo integer malesuada nunc vel. Molestie at elementum eu facilisis sed. Duis ut diam quam nulla porttitor massa id neque. Tincidunt id aliquet risus feugiat in ante. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Mollis nunc sed id semper. Ut tristique et egestas quis ipsum. Consequat semper viverra nam libero justo. Risus pretium quam vulputate dignissim suspendisse in est ante in. Suspendisse in est ante in nibh mauris cursus. Turpis egestas integer eget aliquet nibh praesent. Arcu vitae elementum curabitur vitae nunc. Id venenatis a condimentum vitae.
        <Space h="xl"/>
        </Text>
      </Container>
    </Box>
  );
}
