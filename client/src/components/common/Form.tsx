import {
  Box,
  Typography,
  FormControl,
  FormHelperText,
  TextField,
  TextareaAutosize,
  Stack,
  Select,
  MenuItem,
  Button
} from "@pankod/refine-mui";

import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";

const Form = ({
  type,
  register,
  onFinish,
  formLoading,
  handleSubmit,
  handleImageChange,
  onFinishHandler,
  propertyImage
}: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        {type} a Property
      </Typography>

      <Box 
        mt={2.5}
        borderRadius="15px"
        padding="20px"
        bgcolor="#FCFCFC"
      >
        <form 
          style={{ 
            marginTop: "20px", 
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
          onSubmit={handleSubmit(onFinishHandler)}
        >
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px",
                fontSize: 16,
                color: "#11142D"
              }}
            >
              Name of the Property
            </FormHelperText>
            
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register("title", { required: true })}
            />
          </FormControl>

          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142D"
              }}
            >
              Description of the Property
            </FormHelperText>

            <TextareaAutosize
              required
              minRows={5}
              placeholder="Provide an accurate description..."
              color="info"
              style={{
                width: "100%",
                background: "transparent",
                fontSize: "16px",
                fontFamily: "Calibri",
                borderColor: "rgba(0,0,0,0.23)",
                borderRadius: 6,
                padding: 10,
                color: "#919191"
              }}
              {...register("description", { required: true })}
            />
          </FormControl>

          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142D"
                }}
              >
                Type of the Property
              </FormHelperText>

              <Select
                required
                variant="outlined"
                color="info"
                displayEmpty
                inputProps={{ "aria-label": "without-label" }}
                defaultValue="apartment"
                {...register("propertyType", { required: true })}
              >
                <MenuItem value="apartment">
                  Apartment
                </MenuItem>
                <MenuItem value="villa">
                  Villa
                </MenuItem>
                <MenuItem value="farmhouse">
                  Farmhouse
                </MenuItem>
                <MenuItem value="condos">
                  Condos
                </MenuItem>
                <MenuItem value="townhouse">
                  Townhouse
                </MenuItem>
                <MenuItem value="duplex">
                  Duplex
                </MenuItem>
                <MenuItem value="studio">
                  Studio
                </MenuItem>
                <MenuItem value="chalet">
                  Chalet
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px",
                  fontSize: 16,
                  color: "#11142D"
                }}
              >
                Price of the Property
              </FormHelperText>
              
              <TextField
                fullWidth
                required
                type="number"
                id="outlined-basic"
                color="info"
                variant="outlined"
                {...register("price", { required: true })}
              />
            </FormControl>
          </Stack>

          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px",
                fontSize: 16,
                color: "#11142D"
              }}
            >
              Location of the Property
            </FormHelperText>
            
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register("location", { required: true })}
            />
          </FormControl>

          <Stack
            direction="column"
            gap={1}
            justifyContent="center"
            mb={2}
          >
            <Stack direction="row" gap={2}>
              <Typography fontSize={16} fontWeight={500} color="#11142D" my="10px">
                Photo of the Property
              </Typography>

              <Button
                component="label"
                sx={{
                  width: "fit-content",
                  color: "#2ED480",
                  textTransform: "capitalize",
                  fontSize: 16
                }}
              >
                Upload *
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    // @ts-ignore
                    handleImageChange(e.target.files[0])
                  }}
                />
              </Button>
            </Stack>

            <Typography 
              fontSize={14}
              color="#808191"
              sx={{ wordBreak: "break-all" }}
            >
              {propertyImage?.name}
            </Typography>
          </Stack>

          <CustomButton
            type="submit"
            title={formLoading ? "Submitting..." : "Submit"}
            backgroundColor="#E11E49"
            color="#FCFCFC"
          />
        </form>
      </Box>
    </Box>
  )
}

export default Form