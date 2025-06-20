import { Box, Grid, Paper } from "@mui/material"
import { MovieDataType } from "../../assets/data"
import MovieTrendCard from "../movie-card/movieTrend";

interface MovieTrendListProps {
  trendingList: MovieDataType[];
}

const MovieTrendList = ({ trendingList }: MovieTrendListProps) => {
  return (
    <Box sx={{
      display: "flex",
      gap: 2,
      overflowX: 'auto',
      whiteSpace: 'nowrap',
    }}>
      {trendingList.map((movie) => (
        <Grid key={movie.id}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieTrendCard movie={movie} />
          </Paper>
        </Grid>
      ))}
    </Box>
  )
}

export default MovieTrendList;
