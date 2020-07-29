import React from 'react';
// import { Chart } from "react-charts";
import Head from 'next/head';

import AdminLayout from '../../AdminLayout';

import { Wrapper } from '../../../styles/Pages/Admin/Admin';

const Admin = () => {
  // const series = React.useMemo(
  //   () => ({
  //     type: 'area',
  //   }),
  //   []
  // );
  // const data = React.useMemo(
  //   () => [
  //     {
  //       label: 'Data',
  //       data: [
  //         [0, 1],
  //         [1, 2],
  //         [2, 3.5],
  //         [3, 4.632],
  //         [4, 5],
  //         [6, 5],
  //         [7, 2],
  //         [8, 10],
  //         [9, 4],
  //         [10, 25],
  //         [11, 10],
  //         [12, 20],
  //         [13, 17],
  //         [14, 25],
  //         [15, 25],
  //         [16, 24],
  //         [17, 27],
  //       ],
  //     },
  //   ],
  //   []
  // );

  // const axes = React.useMemo(
  //   () => [
  //     { primary: true, type: 'linear', position: 'bottom' },
  //     { type: 'linear', position: 'left' },
  //   ],
  //   []
  // );

  return (
    <AdminLayout>
      <Head>
        <title>Administrator - Canada Cannabyss</title>
      </Head>
      <Wrapper>
        <h1>Admin</h1>
        {/* <div
          style={{
            width: "100%",
            height: "400px",
          }}
        >
          <Chart
            data={data}
            axes={axes}
            primaryCursor="true"
            series={series}
            tooltip
          />
        </div> */}
      </Wrapper>
    </AdminLayout>
  );
};

export default Admin;
