import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { Box, Button, Loader, MantineProvider, Skeleton, useMantineTheme } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { mkConfig, generateCsv, download } from "export-to-csv"; //or use your library of choice here
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { data } from './makeData';

//defining columns outside of the component is fine, is stable

const csvConfig = mkConfig({
  fieldSeparator: ",",
  decimalSeparator: ".",
  useKeysAsHeaders: true,
});

const MantineTable = ({ columns, data, isLoading }) => {
  const globalTheme = useMantineTheme();

  const {dark} = useSelector((state)=> state.themeReducer )
  const [types, setTypes] = useState('light')

  useEffect(()=>{
    !!dark ? setTypes('dark') : setTypes('light') 

  },[dark])

  const handleExportRows = (rows) => {
    const rowData = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(data);
    download(csvConfig)(csv);
  };

  const table = useMantineReactTable({
    columns,
    data: data || [],
    enableRowSelection: true,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    enableClickToCopy : true,
    // enableRowNumbers: true,
    // rowNumberMode: 'original',
    renderTopToolbarCustomActions: ({ table }) => (
      <Box 
        sx={{ 
          display: "flex",
          gap: "16px",
          padding: "16px",
          flexWrap: "wrap",
        }}
      >
        <Button
          className="bg-[#4884C0] "
          color="lightblue"
          //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
          onClick={handleExportData}
          leftIcon={<IconDownload />}
          variant="filled"
        >
          Export All Data
        </Button>
        <Button
          className="bg-[#4884C0] "
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          //export all rows, including from the next page, (still respects filtering and sorting)
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          leftIcon={<IconDownload />}
          variant="filled"
        >
          Export All Rows
        </Button>
        <Button
          className="bg-[#4884C0] "
          disabled={table.getRowModel().rows.length === 0}
          //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
          onClick={() => handleExportRows(table.getRowModel().rows)}
          leftIcon={<IconDownload />}
          variant="filled"
        >
          Export Page Rows
        </Button>
        <Button
          className="bg-[#4884C0] "
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          //only export selected rows
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          leftIcon={<IconDownload />}
          variant="filled"
        >
          Export Selected Rows
        </Button>
      </Box>
    ),
  });



  if (isLoading ) {
    return  <>
        <Skeleton height={8} mt={6} radius="xl" />
        <Skeleton height={8} mt={6} radius="xl" />
        <Skeleton height={8} mt={6} radius="xl" />
        <Skeleton height={8} mt={6} radius="xl" />
    </>
  }
  if( !data){
    return <p> no data</p>
  }

  
  return (
    <>
      <MantineProvider
      
        theme={{ ...globalTheme, colorScheme: types,  primaryShade: 8 }}
      >
        <MantineReactTable 
          key={JSON.stringify(data)} 
          table={table} 
          state={{ isLoading: isLoading }}
        />
      </MantineProvider>
    </>
  );
};

export default MantineTable;
