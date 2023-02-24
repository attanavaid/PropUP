import { MessageCard } from "components";
import { Box, Typography } from "@pankod/refine-mui";

const Message = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Messages Center
      </Typography>

      <Box
        mt="20px"
        sx={{
          display: "flex",
          borderRadius: "15px",
          flexWrap: "wrap",
          gap: "20px",
          backgroundColor: "#FCFCFC"
        }}
      >
        <MessageCard
          name="Matthew Spring"
          date="February 21, 2023"
          avatar=""
          message="Hello, can you check out my property?"
        />
      </Box>

      <Box
        mt="20px"
        sx={{
          display: "flex",
          borderRadius: "15px",
          flexWrap: "wrap",
          gap: "20px",
          backgroundColor: "#FCFCFC"
        }}
      >
        <MessageCard
          name="Craig Wilson"
          date="January 30, 2023"
          avatar=""
          message="Hey, how would you rate this app!?"
        />
      </Box>        
    </Box>
  )
}

export default Message;