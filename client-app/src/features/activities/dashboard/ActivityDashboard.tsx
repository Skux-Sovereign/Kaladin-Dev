import * as React from 'react';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import { Patient } from '../../../models/patient';
import { format, parseISO } from 'date-fns';
import { Box } from '@mui/material';
import clsx from 'clsx';

interface Props {
    activities: Patient[]
}

export default function DataTable({activities} : Props) {

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
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   valueGetter: (params: GridValueGetterParams) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        // },
        {
            field: 'priority',
            headerName: 'Priority',
            description: '1: Critical Care Transport (CCT), 2: Advanced Life Support (ALS), 3: Basic Life Support (BLS)',
            width: 90,
            cellClassName: (params: GridCellParams<any, number>) => {
                if (params.value! == 3) {
                    return '';
                }

                return clsx('super-app', {
                    danger: params.value  == 1,
                    warning: params.value == 2,
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

    console.log(activities);

    //   const rows = [
    //     { id: 1, lastName: 'Snow', middleInitial: `s`, firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //   ];

    let index = 0;

    const rows = 
      activities.map(activity => {
        return (
            { id: index = index + 1, lastName: `${activity.lastName}`, middleInitial: `${activity.middleInitial}`, 
            firstName: `${activity.firstName}`, DOB: `${activity.DOB}`, age: `${activity.age}`, sex: `${activity.sex}`,
            priority: `${activity.priority}`, pickUpTime: `${format(new Date(activity.pickUpTime), 'MM-dd-yyyy h:mm aa')}`, pickUpLocation: `${activity.pickUpLocation}`, dropOffLocation: `${activity.dropOffLocation}`,timeSubmitted: `${format(new Date(activity.timeSubmitted), 'MM-dd-yyyy h:mm aa')}`}
        )
      })

    // console.log(activities[0].DOB);

  return (
    <Box sx={{ height: 800, width: '100%', '& .super-app.danger' : {color: 'black', backgroundColor: 'red'}, '& .super-app.warning': {color: 'black', backgroundColor: 'rgba(235, 247, 124)'} }}>
      <DataGrid
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
    </Box>
  );
}