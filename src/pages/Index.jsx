import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, VStack, HStack, Button, Box, Text, StackDivider } from "@chakra-ui/react";
import { useJobs } from "../integrations/supabase/index.js";

const Index = () => {
  const [filter, setFilter] = useState("All");
  const { data: jobs, isLoading, error } = useJobs();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredJobs = filter === "All" ? jobs : jobs.filter(job => job.job_area === filter);

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
                <Text fontSize="xl">{job.jobs_title}</Text>
                <Text fontSize="sm" color="gray.500">{job.job_area}</Text>
              </Link>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;