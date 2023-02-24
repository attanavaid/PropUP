import { Star } from "@mui/icons-material";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import { ReviewCardProp } from "interfaces/review";

function checkImage(url: any) {
  let img = new Image();
  img.src = url;
  return img.width !== 0 && img.height !== 0;
}

const ReviewCard = ({ name, title, avatar, description, stars }: ReviewCardProp) => {
  return (
    <Box
      width="100%"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: "20px",
        padding: "20px"
      }}
    >
      <img 
        src={checkImage(avatar) ? avatar : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"}
        alt="user"
        width={90}
        height={90}
        style={{ borderRadius: 8, objectFit: "cover" }}
      />

      <Stack 
        direction="column"
        justifyContent="space-between"
        flex={1}
        gap={{ xs: 4, sm: 2 }}
      >
        <Stack gap={2} direction="row" flexWrap="wrap" alignItems="center">
          <Typography fontSize={22} fontWeight={600} color="#11142D">
            {name}
          </Typography>

          <Typography fontSize={18} color="#808191">
            {title}
          </Typography>
        </Stack>
        
        <Box>
          {Array.from({length: stars}, (_, i) => i + 1).map((item) => 
            <Star key={`star-${item}`} sx={{ color: "#F2C94C" }}/>
          )}
        </Box>

        <Stack 
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Typography fontSize={14} color="#808191">
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default ReviewCard;