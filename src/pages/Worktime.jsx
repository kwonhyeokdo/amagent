import { Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// 하이23aae1da1
const Worktime = ()=>{
    return (
        <Stack>
            <Typography>{new Date().getMonth() + 1}월 근로 시간</Typography>
            <DataGrid
                rows={[]}
                columns={[
                    { field: 'date', headerName: '일자', width: 90 },
                    { field: 'workType', headerName: '구분', width: 90, type: "singleSelect",
                        valueOptions: ["업무", "업무(재택)", "휴가(종일)", "휴가(오전)", "휴가(오후)"]
                    },
                    { field: 'startTime', headerName: '업무시작', width: 90 },
                    { field: 'endTime', headerName: '업무종료', width: 90 },
                    { field: 'restTime', headerName: '기본휴게시간', width: 90 },
                    { field: 'bonusTime', headerName: '추가휴게시간', width: 90 },
                    { field: 'overtime', headerName: '업무재개', width: 90 },
                    { field: 'worktime', headerName: '일 근무시간', width: 90 },
                ]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Stack>
    );
}

export default Worktime;