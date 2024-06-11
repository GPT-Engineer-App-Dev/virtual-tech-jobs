import { useParams } from "react-router-dom";
import { Container, Box, Text, VStack } from "@chakra-ui/react";
import { useJob } from "../integrations/supabase/index.js";

const JobDetails = () => {
  const { id } = useParams();
  const { data: job, isLoading, error } = useJob(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!job) return <div>Job not found</div>;

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Box p={4} borderWidth="1px" borderRadius="md" width="100%">
          <Text fontSize="3xl" fontWeight="bold">{job.jobs_title}</Text>
          <Text fontSize="md" color="gray.500">{job.job_area}</Text>
          <Text mt={4}>{job.job_type}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default JobDetails;