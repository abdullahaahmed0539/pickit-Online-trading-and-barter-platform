import { Fragment, useState, useEffect } from "react";
import { withRouter, useParams } from "react-router";
import { fetchSentRequests } from "../API calls/requests";
import { Button, Table } from "react-bootstrap";
import { removeRequest } from "../API calls/requests";

const SentRequests = ({ history }) => {
  const { userId } = useParams();
  const [requests, setRequests] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchSentRequests()
      .then(response => {
        setRequests(response.data.data.pendingRequests);
        setProducts(response.data.data.products);
      })
      .catch(() => console.log("Error while fetching products"));
  }, [userId]);

  const remove = requestId => {
    let prevRequests = [...requests];
    setRequests(requests.filter(item => item._id !== requestId));

    removeRequest(requestId)
      .then(response => {
        if (response.status !== 200) {
          alert("Unable to remove request from database.");
          setRequests(prevRequests);
        }
      })
      .catch(err => {
        console.log(err);
        alert("Unable to remove request from database - 2");
        setRequests(prevRequests);
      });
  };

  return (
    <Fragment>
      <div className="container mt-5 ml-1">
        <div>
          {requests && requests.length !== 0 ? (
            <h1 style={{ color: "gray" }}>Sent Requests</h1>
          ) : (
            <h1>No Requests Sent Yet</h1>
          )}
        </div>

        {requests &&
          requests.length !== 0 &&
          products &&
          products.length !== 0 && (
            <div style={{ marginTop: "50px" }}>
              <Table
                className="sentrequeststable"
                striped
                bordered
                hover
                size="sm"
              >
                <thead>
                  <tr style={{ textAlign: "center" }}>
                    <th>Product Title</th>
                    <th>Request Status</th>
                    <th>Product offered</th>
                    <th>Cash offered</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map(request => (
                    <tr key={request._id}>
                      <td
                        style={{
                          textAlign: "center",
                          display: "table-cell",
                          verticalAlign: "middle",
                        }}
                      >
                        <a href={`/products/${request.productId}`}>
                          {
                            products.find(
                              item => item._id === request.productId
                            ).productName
                          }
                        </a>
                      </td>
                      <td
                        style={
                          request.status === "rejected"
                            ? {
                                color: "red",
                                textAlign: "center",
                                display: "table-cell",
                                verticalAlign: "middle",
                              }
                            : request.status === "pending"
                            ? {
                                color: "blue",
                                textAlign: "center",
                                display: "table-cell",
                                verticalAlign: "middle",
                              }
                            : {
                                color: "green",
                                textAlign: "center",
                                display: "table-cell",
                                verticalAlign: "middle",
                              }
                        }
                      >
                        {request.status}
                      </td>
                      <td><a href={`/products/${request.offer.productId}`}>{request.offer.productId}</a></td>

                      {request.offer.cash < 0 ? (
                        <td
                          style={{
                            color: "green",
                            display: "table-cell",
                            verticalAlign: "middle",
                            textAlign: "center",
                          }}
                        >
                          {request.offer.cash}
                        </td>
                      ) : (
                        <td
                          style={{
                            color: "red",
                            display: "table-cell",
                            verticalAlign: "middle",
                            textAlign: "center",
                          }}
                        >
                          {request.offer.cash}
                        </td>
                      )}
                      {request.status === "pending" ? (
                        <td
                          style={{
                            display: "table-cell",
                            verticalAlign: "middle",
                            textAlign: "center",
                          }}
                        >
                          <Button
                            variant="danger"
                            onClick={() => remove(request._id)}
                            className="requestcardbutton"
                          >
                            Delete
                          </Button>{" "}
                        </td>
                      ) : (
                        <td>
                          <></>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
      </div>
    </Fragment>
  );
};

export default withRouter(SentRequests);
