import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import {
  Button,
  TextField,
  useTheme,
  TableBody,
  Table,
  Box,
  TableCell,
  TableContainer,
  TableHead,
  TableFooter,
  TablePagination,
  TableRow,
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

export default function ProductList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(false);

  const productsFetch = async () => {
    try {
      const userToken = localStorage.getItem("userToken");
      const headers = {
            "Authorization": `Bearer ${userToken}`,
            "Content-Type": "application/json",
          }
          
      const response = await fetch("/api/products", {
        method: "GET",
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        setProducts(data);
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

  function createData(articleNumber, name, vat, netPrice) {
    return {
      articleNumber,
      name,
      vat,
      netPrice,
    };
  }

  const rows = products.map((product) => {
    return createData(
      product.articleNumber,
      product.name,
      product.vat,
      product.netPrice
    );
  });

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedRows = rows.slice(startIndex, endIndex);

  return (
    <>
      <div>
        <br />
        <br />
        <TableContainer
          component={Paper}
          sx={{ maxWidth: 1200, margin: "auto", opacity: 0.9 }}
          align="center"
        >
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
              {search ? (
                <TableRow>
                  <TableCell>
                    <TextField label="ArticleNumber" />
                  </TableCell>
                  <TableCell>
                    <TextField label="Product Name" />
                  </TableCell>
                  <TableCell>
                    <TextField label="VAT" />
                  </TableCell>
                  <TableCell>
                    <TextField label="Net Price" />
                  </TableCell>
                </TableRow>
              ) : (
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="center">
                    <Button onClick={() => setSearch(true)} variant="text">
                      Advanced search
                    </Button>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )}
              <TableRow>
                <TableCell align="center">Article Number</TableCell>
                <TableCell align="center">Product Name</TableCell>
                <TableCell align="center">VAT</TableCell>
                <TableCell align="center">Net Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedRows.map((row) => (
                <TableRow key={row.articleNumber}>
                  <TableCell component="th" scope="row" style={{ width: 160 }}>
                      {row.name}
                  </TableCell>
                  <TableCell
                    component="th"
                    align="center"
                    scope="row"
                    style={{ width: 50 }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    component="th"
                    align="center"
                    scope="row"
                    style={{ width: 50 }}
                  >
                    {row.vat}
                  </TableCell>
                  <TableCell
                    component="th"
                    align="center"
                    scope="row"
                    style={{ width: 150 }}
                  >
                    {row.netPrice}
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={4} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={4}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
