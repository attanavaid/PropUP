import { ReviewCard } from "components";
import { Box, Typography } from "@pankod/refine-mui";

const Review = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Testimonials
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
        <ReviewCard
          name="Jane Doe"
          title="Lease Agent"
          avatar=""
          description="I always use PropUP because the application is so easy to use and the UI is fantastic!"
          stars={5}
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
        <ReviewCard
          name="John Smith"
          title="Renter"
          avatar=""
          description="They have great properties for cheap! Though sometimes they overcharge."
          stars={4}
        />
      </Box>        
    </Box>
  )
}

export default Review;