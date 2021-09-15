import React from "react";
import { Line } from 'react-chartjs-2';
const Linechart = () => {
      return (
            <>
                  <div style={{ height: "380px" }} className="tab-pane fade show active" id="pills-daily-expense" role="tabpanel" aria-labelledby="pills-daily-expense-tab">

                        <Line
                              data={{
                                    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'],
                                    datasets: [
                                          {
                                                label: "Delivered",
                                                data: [10, 20, 30, 40, 50, 60, 4, 6, 23, 56, 38, 2, 41, 29, 7],
                                                backgroundColor: [
                                                      'rgba(255, 99, 132, 0.2)',
                                                      'rgba(54, 162, 235, 0.2)',
                                                      'rgba(255, 206, 86, 0.2)',
                                                      'rgba(75, 192, 192, 0.2)',
                                                      'rgba(153, 102, 255, 0.2)',
                                                      'rgba(255, 159, 64, 0.2)',
                                                      'rgba(255, 99, 132, 0.2)',
                                                      'rgba(54, 162, 235, 0.2)',
                                                      'rgba(255, 206, 86, 0.2)',
                                                      'rgba(75, 192, 192, 0.2)',
                                                      'rgba(153, 102, 255, 0.2)',
                                                      'rgba(255, 159, 64, 0.2)',
                                                      'rgba(153, 102, 255, 0.2)',
                                                ],
                                                borderColor: [
                                                      'rgba(255, 99, 132, 1)',
                                                      'rgba(54, 162, 235, 1)',
                                                      'rgba(255, 206, 86, 1)',
                                                      'rgba(75, 192, 192, 1)',
                                                      'rgba(153, 102, 255, 1)',
                                                      'rgba(255, 159, 64, 1)',
                                                      'rgba(255, 99, 132, 1)',
                                                      'rgba(54, 162, 235, 1)',
                                                      'rgba(255, 206, 86, 1)',
                                                      'rgba(75, 192, 192, 1)',
                                                      'rgba(153, 102, 255, 1)',
                                                      'rgba(255, 159, 64, 1)',
                                                      'rgba(153, 102, 255, 1)',
                                                ],
                                                borderWidth: 1
                                          },
                                    ],

                              }}

                              height={20}
                              width={50}
                              options={{
                                    responsive: true,
                                    maintainAspectRatio: false,

                              }}

                        />
                  </div>
            </>
      );
}

export default Linechart;