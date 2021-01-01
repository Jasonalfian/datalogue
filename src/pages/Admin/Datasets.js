import React from "react"
import "../../styles/Datasets.css"
import Layout from "../../components/layout"
import Siderbar from "../../components/Admin/sidebar"
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts"

const data = [
  {
    name: "Monday",
    Morning: 4000,
    Night: 2400,
    amt: 2400,
  },
  {
    name: "Tuesday",
    Morning: 3000,
    Night: 1398,
    amt: 2210,
  },
  {
    name: "Wednesday",
    Morning: 2000,
    Night: 9800,
    amt: 2290,
  },
  {
    name: "Thursday",
    Morning: 2780,
    Night: 3908,
    amt: 2000,
  },
  {
    name: "Friday",
    Morning: 1890,
    Night: 4800,
    amt: 2181,
  },
  {
    name: "Saturday",
    Morning: 2390,
    Night: 3800,
    amt: 2500,
  },
  {
    name: "Sunday",
    Morning: 3490,
    Night: 4300,
    amt: 2100,
  },
]

export default function Datasets() {
  return (
    <div class="global">
      <Siderbar />
      <div className="content3">
        <p class="welcomeBig">Welcome Back !</p>
        <p className="UserTraffic"> User Traffic</p>
        <LineChart
          width={950}
          height={300}
          data={data}
          margin={{ top: 20, right: 100, left: 100, bottom: 35 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Morning" stroke="#8884d8" />
          <Line type="monotone" dataKey="Night" stroke="#82ca9d" />
        </LineChart>
        <div className="BoxContainer2">
          <div className="Pengunjung">
            Total Pengunjung
            <p class="count">300.000</p>
          </div>

          <div className="InfoAndDatasets">
            Jumlah Infographic dan Datasets
            <p class="count">300</p>
          </div>
        </div>
      </div>
    </div>
  )
}
