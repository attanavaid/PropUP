import { Reply } from "@mui/icons-material";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import { MessageCardProp } from "interfaces/message";

function checkImage(url: any) {
  let img = new Image();
  img.src = url;
  return img.width !== 0 && img.height !== 0;
}

const MessageCard = ({ name, date, avatar, message }: MessageCardProp) => {
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

          <Typography fontSize={14} fontWeight={400} color="#808191">
            {date}
          </Typography>
        </Stack>
        
        <Stack 
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Typography fontSize={16} color="#808191">
            {message}
          </Typography>
        </Stack>

        <Box color="#808191" display="flex">
          <Reply sx={{ color: "#808191" }}/>&ensp;
          <Typography fontSize={16} fontWeight={800} sx={{ textDecoration: "underline" }}>
            Reply
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default MessageCard;