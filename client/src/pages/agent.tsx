import { useList } from "@pankod/refine-core";
import { AgentCard } from "components";
import { Box, Typography } from "@pankod/refine-mui";

const Agent = () => {
  const { data, isLoading, isError } = useList({ resource: "users" });
  const allAgents = data?.data ?? [];

  if(isLoading) return <Typography>Loading...</Typography>;
  if(isError) return <Typography>Error</Typography>;

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Agents Roster
      </Typography>

      <Box
        mt="20px"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          backgroundColor: "#FCFCFC"
        }}
      >
        {allAgents.map((agent) => (
          <AgentCard 
            key={agent._id}
            id={agent._id}
            name={agent.name}
            email={agent.email}
            avatar={agent.avatar}
            noOfProperties={agent.allProperties.length}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Agent;