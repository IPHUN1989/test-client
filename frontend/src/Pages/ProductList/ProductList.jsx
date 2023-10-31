import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  Button,
  TextField,
  useTheme,
  Box,
  Paper,
  IconButton,
} from "@mui/material";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    articleNumber: "",
    vat: "",
    netPrice: "",
  });
  
  const productsFetch = async () => {
    try {
      const userToken = localStorage.getItem("userToken");
      const headers = {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      };

      const response = await fetch("/api/products", {
        method: "GET",
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } else {
        console.error(`Error fetching products: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  useEffect(() => {
    productsFetch();
  }, []);

  const applyFilters = () => {
    let filteredProducts = products;

    if (filters.name) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    if (filters.articleNumber) {
      filteredProducts = filteredProducts.filter((product) =>
        product.articleNumber.includes(filters.articleNumber)
      );
    }

    if (filters.vat) {
      filteredProducts = filteredProducts.filter((product) =>
        product.vat.toFixed(2).includes(filters.vat)
      );
    }

    if (filters.netPrice) {
      filteredProducts = filteredProducts.filter((product) =>
        product.netPrice.toFixed(2).includes(filters.netPrice)
      );
    }

    setFilteredProducts(filteredProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const handleFilterChange = (filterName, filterValue) => {
    setFilters({ ...filters, [filterName]: filterValue });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "articleNumber", headerName: "Article Number", width: 150 },
    {
      field: "name",
      headerName: "Product name",
      width: 150,
      editable: true,
    },
    {
      field: "vat",
      headerName: "VAT",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "netPrice",
      headerName: "Net Price",
      headerClassName: "super-app-theme--header",
      type: "number",
      width: 150,
      editable: true,
    }
  ];

  const rows = filteredProducts.map((product, index) => ({
    id: index + 1,
    articleNumber: product.articleNumber,
    name: product.name,
    vat: product.vat + "%",
    netPrice: USDollar.format(product.netPrice),
  }));

  return (
    <>
      {search ? (
        <div style={{ background: "white" }}>
          <TextField
            label="ArticleNumber"
            onChange={(e) =>
              handleFilterChange("articleNumber", e.target.value)
            }
            placeholder="Search for an article number"
          />
          <TextField
            label="Product Name"
            onChange={(e) => handleFilterChange("name", e.target.value)}
            placeholder="Search for a name"
          />
          <TextField
            label="VAT"
            onChange={(e) => handleFilterChange("vat", e.target.value)}
            placeholder="Search for a VAT"
          />
          <TextField
            label="Net Price"
            onChange={(e) => handleFilterChange("netPrice", e.target.value)}
            placeholder="Search for a net price"
          />
        </div>
      ) : (
        <Button onClick={() => setSearch(true)} variant="text" style={{background: "white"}}>
          Multiple value filtering{" "}
        </Button>
      )}
      <Box
        sx={{
          height: 400,
          width: "100%",
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
            height: 300,
            width: "100%",
            "& .super-app-theme--header": {
              backgroundColor: "rgba(255, 7, 0, 0.55)",
            },
          },
        }}
      >
        <Paper sx={{ bgcolor: "white" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5, 10, 15, 20, 25]}
            checkboxSelection
            disableRowSelectionOnClick
            slots={{ toolbar: GridToolbar }}
          />
        </Paper>
      </Box>
    </>
  );
}
