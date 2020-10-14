import React, { useState, useEffect } from "react";

import Select from "react-select";

import { useTable, useSortBy } from "react-table";

import { Flex } from "../components/Flex";
import { Text } from "../components/Text";
import { Personagem } from "../components/Personagem";

const Table = ({ columns, data, setData }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

  return (
    <>
      <Flex
        maxWidth="600px"
        border="1px solid black"
        mb="20px"
        flex={1}
        flexDirection="column"
        {...getTableProps()}
      >
        <Flex borderBottom="1px solid black">
          {headerGroups.map(headerGroup => (
            <Flex {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Flex
                  alignItems="center"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <Text p="10px" fontWeight="bold">
                    {column.render("Header")}
                  </Text>

                  <Flex>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : "(Click to sort)"}
                  </Flex>
                </Flex>
              ))}
            </Flex>
          ))}
        </Flex>
        <Flex p="10px" flexDirection="column" {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <Personagem
                name={row.original.name}
                color={row.original.eye_color}
                onDelete={() => {
                  setData(data.filter(item => item.name !== row.original.name));
                  alert(`${row.original.name} removed sucessfully!`);
                }}
              />
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};

const App = () => {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);

  const [loading, setLoading] = useState(true);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name"
      }
    ],
    []
  );

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/people/")
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setData(data.results);
        setOptions(data.results);
      });
  }, []);

  if (loading) {
    return <div>...Loading</div>;
  }

  if (data.length) {
    return (
      <>
        <Flex flex={1} justifyContent={{ _: "flex-start", tablet: "center" }}>
          <Table columns={columns} data={data} setData={setData} />
        </Flex>

        <Select
          onChange={item => {
            if (data.find(a => a.name === item.name)) {
              alert(`${item.name} is already on list!`);
            } else {
              alert(`${item.name} added sucessfully!`);
              setData(data.concat(item));
            }
          }}
          options={options}
          getOptionLabel={item => item.name}
        />
      </>
    );
  }

  return null;
};

export default App;
