import { useMemo } from "react";
import { Add } from "@mui/icons-material";
import { useTable } from "@pankod/refine-core";
import { useNavigate } from "@pankod/refine-react-router-v6";
import { PropertyCard, CustomButton } from "components";

import { 
  Box,
  Typography,
  Stack,
  TextField,
  Select,
  MenuItem
} from "@pankod/refine-mui";


const AllProperties = () => { 
  const navigate = useNavigate();
  const {
    tableQueryResult: { data, isLoading, isError },
    current,
    setCurrent,
    setPageSize,
    pageCount,
    sorter,
    setSorter,
    filters,
    setFilters
  } = useTable();

  const allProperties = data?.data ?? [];
  const currentPrice = sorter.find((item) => item.field === "price")?.order;

  const toggleSort = (field: string) => {
    setSorter([{ field, order: currentPrice === "asc" ? "desc" : "asc"}]);
  }

  const currentFilterValues = useMemo(() => {
    const logicalFilters = filters.flatMap((item) => ("field" in item ? item : []));
    
    return {
      title: logicalFilters.find((item) => item.field === "title")?.value || "",
      propertyType: logicalFilters.find((item) => item.field === "propertyType")?.value || "",
    }
  }, [filters])

  if(isLoading) return <Typography>Loading...</Typography>;
  if(isError) return <Typography>Error</Typography>;

  return (
    <Box>
      <Box
        mt="20px"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3  
        }}
      >
        <Stack
          direction="column"
          width="100%"
        >
          <Typography fontSize={25} fontWeight={700} color="#11142D">
            {!allProperties.length ? "There are no properties" : "All Properties"}
          </Typography>

          <Box
            mt={3}
            mb={2}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "84%",
              justifyContent: "space-between"
            }}
          >
            <Box
              mb={{ xs: "20px", sm: 0 }}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2
              }}
            >
              <CustomButton
                title={`Sort Price ${currentPrice === "asc" ? "↑" : "↓"}`}
                handleClick={() => toggleSort("price")}
                backgroundColor="#E11E49"
                color="#FCFCFC"
              />
              <TextField
                variant="outlined"
                color="info"
                placeholder="Search by title"
                value={currentFilterValues.title}
                onChange={(e) => {
                  setFilters([{
                    field: "title",
                    operator: "contains",
                    value: e.currentTarget.value ? e.currentTarget.value : undefined
                  }])
                }}
              />
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "without label" }}
                defaultValue=""
                value={currentFilterValues.propertyType}
                onChange={(e) => {
                  setFilters([{
                    field: "propertyType",
                    operator: "eq",
                    value: e.target.value
                  }], "replace")
                }}
              >
                <MenuItem value="">
                  All
                </MenuItem>
                {["Apartment", "Villa", "Farmhouse", "Condos", "Townhouse", "Duplex", "Studio", "Chalet"]
                .map((type) => (<MenuItem key={type} value={type.toLowerCase()}>{type}</MenuItem>))}
              </Select>
            </Box>
          </Box>
        </Stack>
      </Box>


      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize={25} fontWeight={700} color="#11142D">
          All Properties
        </Typography>

        <CustomButton
          title="Add Property"
          handleClick={() => navigate("/properties/create")}
          backgroundColor="#E11E49"
          color="#FCFCFC"
          icon={<Add/>}
        />
      </Stack>

      <Box
        mt="20px"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3  
        }}
      >
        {allProperties.map((property) => (
          <PropertyCard
            key={property._id}
            id={property._id}
            title={property.title}
            price={property.price}
            location={property.location}
            photo={property.photo}
          />
        ))}
      </Box>

      {allProperties.length > 0 && (
        <Box
          mt={3}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2 
          }}
        >
          <CustomButton
            title="Previous"
            handleClick={() => setCurrent((prev) => prev - 1)}
            backgroundColor="#E11E49"
            color="#FCFCFC"
            disabled={!(current > 1)}
          />

          <Box
            mt={3}
            sx={{
              display: {xs: "hidden", sm: "flex"},
              alignItems: "center",
              gap: "5px"
            }}
          >
            Page{" "}<strong>{current} of {pageCount}</strong>
          </Box>

          <CustomButton
            title="Next"
            handleClick={() => setCurrent((prev) => prev + 1)}
            backgroundColor="#E11E49"
            color="#FCFCFC"
            disabled={(current === pageCount)}
          />

          <Select
            variant="outlined"
            color="info"
            displayEmpty
            required
            inputProps={{ "aria-label": "without label" }}
            defaultValue=""
            value=""
            onChange={(e) => setPageSize(e.target.value ? Number(e.target.value) : 10)}
          >
            {[10, 10, 30, 40, 50].map((size) => (
              <MenuItem key={size} value={size}>
                Show {size}
              </MenuItem>
            ))}
            
          </Select>
        </Box>
      )}
    </Box>
  )
}

export default AllProperties