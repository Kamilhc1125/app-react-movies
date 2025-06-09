import { Box, Paper } from "@mui/material";
import { MovieDataType } from "../../assets/data";
import MovieCard from "../movie-card";

interface MovieListProps {
  recommendList: MovieDataType[];
}

const MovieList = ({ recommendList }: MovieListProps) => {

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      {recommendList.map((movie) => (
        <Box
          key={movie.id}
          sx={{
            flex: "0 0 20%", // 5 items per row
            maxWidth: "20%",
          }}
        >
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieCard movie={movie} />
          </Paper>
        </Box>
      ))}
    </Box>
  )
}

export default MovieList;
