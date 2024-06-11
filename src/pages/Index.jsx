import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Container, VStack, HStack, Button, Box, Text, StackDivider } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Frontend Developer", category: "Engineering", description: "Develop and maintain user interfaces." },
  { id: 2, title: "Product Manager", category: "Product", description: "Oversee product development from start to finish." },
  { id: 3, title: "UX Designer", category: "Design", description: "Design user experiences for our products." },
  { id: 4, title: "Backend Developer", category: "Engineering", description: "Develop and maintain server-side logic." },
  { id: 5, title: "UI Designer", category: "Design", description: "Design user interfaces for our products." },
];

const Index = () => {
  const [filter, setFilter] = useState("All");

  const filteredJobs = filter === "All" ? jobs : jobs.filter(job => job.category === filter);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">Remote Tech Jobs</Text>
        <HStack spacing={4}>
          <Button onClick={() => setFilter("All")} colorScheme={filter === "All" ? "blue" : "gray"}>All</Button>
          <Button onClick={() => setFilter("Product")} colorScheme={filter === "Product" ? "blue" : "gray"}>Product</Button>
          <Button onClick={() => setFilter("Design")} colorScheme={filter === "Design" ? "blue" : "gray"}>Design</Button>
          <Button onClick={() => setFilter("Engineering")} colorScheme={filter === "Engineering" ? "blue" : "gray"}>Engineering</Button>
        </HStack>
        <VStack spacing={4} divider={<StackDivider borderColor="gray.200" />} width="100%">
          {filteredJobs.map(job => (
            <Box key={job.id} p={4} borderWidth="1px" borderRadius="md" width="100%">
              <Link to={`/job/${job.id}`}>
                <Text fontSize="xl">{job.title}</Text>
                <Text fontSize="sm" color="gray.500">{job.category}</Text>
              </Link>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;