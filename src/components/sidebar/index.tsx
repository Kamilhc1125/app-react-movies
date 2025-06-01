import HomeIcon from "../icons/home-icon"
import MovieIcon from '../icons/movie-icon';
import BookmarkIcon from '../icons/bookmark-icon';
import TvSeriesIcon from '../icons/series-icon';
import { Link, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const navLinks = [
  {
    name: "Home",
    icon: HomeIcon,
    link: "/",
  },
  {
    name: "Movies",
    icon: MovieIcon,
    link: "/movies",
  },
  {
    name: "TV Series",
    icon: TvSeriesIcon,
    link: "/tv-series",
  },
  {
    name: "Bookmarks",
    icon: BookmarkIcon,
    link: "/bookmarks",
  },
];

const Sidebar = () => {

  const { pathname } = useLocation();

  return (
    <Box sx={{
      backgroundColor: "#161d2f",
      padding: 2,
      borderRadius: 2,
      display: "flex",
      flexDirection: {
        xs: "row",
        lg: "column",
      },
      alignItems: "center",
      justifyContent: "space-between",
      width: {
        sm: "100%",
        lg: 200
      },
    }}>
      <Box sx={{
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        gap: 5,
        alignItems: {
          xs: "center",
          lg: "start"
        },
        width: "100%",
      }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{ display: { sm: 'none', md: 'block' } }}
          my={2}
          fontWeight={400}
          fontSize={18}>
          Movie App
        </Typography>
        <Box sx={{
          py: {
            xs: "0px",
            lg: "16px"
          },
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column"
          },
          gap: 4
        }}>
          {navLinks.map(({ name, icon: Icon, link }) => (
            <Link
              key={name}
              to={link}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: pathname === link ? "#5A698F" : "#FFFFFF",
                  transition: "color 0.2s ease",
                  "&:hover": {
                    color: "#5A698F"
                  }
                }}
              >
                <Icon
                  fill={pathname === link ? "#5A698F" : "#FFFFFF"}
                  width="18px"
                  height="18px"
                />
                <Typography>{name}</Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
