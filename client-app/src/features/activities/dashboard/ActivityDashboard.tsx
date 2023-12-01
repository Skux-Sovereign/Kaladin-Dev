import * as React from 'react';
import { DataGrid, GridCellParams, GridColDef, GridEventListener } from '@mui/x-data-grid';
import { Patient } from '../../../app/models/patient';
import { format, parseISO } from 'date-fns';
import { Box } from '@mui/material';
import clsx from 'clsx';
import BottomNavBar from '../../../app/layout/BottomNavBar';
import { id } from 'date-fns/locale';

interface Props {
    activities: Patient[]
}

const messageArr: Array<number> = [];

export default function DataTable({activities} : Props) {

    const [message, setMessage] = React.useState({
      id: [] as number[]
    });

    React.useEffect(() => {
      console.log(message.id);

    }, [message]);

    const handleEvent: GridEventListener<'rowClick'> = (
      params, // GridRowParams
      event, // MuiEvent<React.MouseEvent<HTMLElement>>
      details, // GridCallbackDetails
    ) => {


      if (message.id.includes(params.row.id)) {
        var newArr = message.id;
        var index = message.id.indexOf(params.row.id);
        newArr.splice(index, 1);
        setMessage({ id: newArr });

        console.log("duplicate found");
      } else {
        setMessage({ id: [...message.id, params.row.id] })
      }
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'middleInitial', headerName: 'Middle initial', width: 65 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'DOB', headerName: 'DOB', width: 65 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
            field: 'sex',
            headerName: 'Sex',
            width: 90,
          },
        {
            field: 'priority',
            headerName: 'Priority',
            description: '1: Critical Care Transport (CCT), 2: Advanced Life Support (ALS), 3: Basic Life Support (BLS)',
            width: 90,
            cellClassName: (params: GridCellParams<any, number>) => {

                return clsx('super-app', {
                    danger: params.value  == 1,
                    warning: params.value == 2,
                    success: params.value == 3
                });
            }
        },
        {
            field: 'pickUpTime',
            headerName: 'Pick Up Time',
            width: 200
        },
        {
            field: 'pickUpLocation',
            headerName: 'Pick Up Location',
            width: 300
        },
        {
            field: 'dropOffLocation',
            headerName: 'Drop Off Location',
            width: 300
        },
        {
            field: 'timeSubmitted',
            headerName: 'Time Submitted',
            width: 160
        },
      ];

    let index = 0;

    const rows = 
      activities.map(activity => {
        return (
            { id: index = index + 1, lastName: `${activity.lastName}`, middleInitial: `${activity.middleInitial}`, 
            firstName: `${activity.firstName}`, DOB: `${activity.DOB}`, age: `${activity.age}`, sex: `${activity.sex}`,
            priority: `${activity.priority}`, pickUpTime: `${format(new Date(activity.pickUpTime), 'MM-dd-yyyy h:mm aa')}`, pickUpLocation: `${activity.pickUpLocation}`, dropOffLocation: `${activity.dropOffLocation}`,timeSubmitted: `${format(new Date(activity.timeSubmitted), 'MM-dd-yyyy h:mm aa')}`}
        )
      })

  return (
    <Box sx={{ height: 700, width: '100%', '& .super-app.danger' : {color: 'black', backgroundColor: 'red'}, 
    '& .super-app.warning': {color: 'black', backgroundColor: 'rgba(235, 247, 124)'},
    '& .super-app.success': {color: 'black', backgroundColor: 'green'} }}>
      <DataGrid
        onRowClick={handleEvent}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      {message.id.length >= 1 && <BottomNavBar />}      
    </Box>
  );
}