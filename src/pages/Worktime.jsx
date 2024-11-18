import { Stack, Typography } from "@mui/material";

const Worktime = ()=>{
    return (
        <Stack>
            <Typography>{new Date().getMonth() + 1}월 근로 시간</Typography>
        </Stack>
    );
}

export default Worktime;