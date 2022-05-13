import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useSearchMovieMutation } from "store/reducers/index";
import useStyle from "./style";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const classes = useStyle();
  const [ListData] = useSearchMovieMutation();
  const [menues] = useState([
    {
      label: "Home",
      routes: "/",
      isActive: true,
    },
    {
      label: "Todo",
      routes: "/todo",
    },
    {
      label: "Sigup",
      routes: "/signup",
    },
  ]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e?.target?.value);
  };

  const getList = () => {
    navigate("/search");
    setSearch("");
  };

  return (
    <header>
      <Container>
        <Box>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={2}>
              <Box sx={{ py: 1 }}>
                <Link to="/">
                  <img
                    src="/images/logo.png"
                    alt="logo"
                    className="header_logo"
                  />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={10}>
              <Box>
                <Box className={classes.searchAlignEnd}>
                  <Box className={classes.InputWrap}>
                    <input
                      type="text"
                      className={classes.SearchInput}
                      placeholder="Search..."
                      name="search"
                      value={search}
                      onChange={(e) => handleChange(e)}
                    />

                    <Box
                      className={classes.SearchIcon}
                      component={"span"}
                      onClick={() => getList()}
                    >
                      <SearchIcon className={classes.svgSearch} />
                    </Box>
                  </Box>
                  {menues?.map((movie, i) => {
                    return (
                      <React.Fragment key={i}>
                        <NavLink
                          to={movie?.routes}
                          className={classes.menu_link}
                        >
                          {movie?.label}
                        </NavLink>
                      </React.Fragment>
                    );
                  })}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
