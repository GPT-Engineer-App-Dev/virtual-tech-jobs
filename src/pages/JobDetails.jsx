import { useParams } from "react-router-dom";
import { Container, Box, Text, VStack } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Frontend Developer", category: "Engineering", description: "Develop and maintain user interfaces." },
  { id: 2, title: "Product Manager", category: "Product", description: "Oversee product development from start to finish." },
  { id: 3, title: "UX Designer", category: "Design", description: "Design user experiences for our products." },
  { id: 4, title: "Backend Developer", category: "Engineering", description: "Develop and maintain server-side logic." },
  { id: 5, title: "UI Designer", category: "Design", description: "Design user interfaces for our products." },
];

const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find(job => job.id === parseInt(id));

  if (!job) {
    return (
      <Container centerContent maxW="container.md" py={10}>
        <Text fontSize="2xl" fontWeight="bold">Job not found</Text>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Box p={4} borderWidth="1px" borderRadius="md" width="100%">
          <Text fontSize="3xl" fontWeight="bold">{job.title}</Text>
          <Text fontSize="md" color="gray.500">{job.category}</Text>
          <Text mt={4}>{job.description}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default JobDetails;