import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const q = gql`
  {
    hello
  }
`;

const App = () => (
  <Query query={q}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>Error</p>;
      console.log(data);
      return <div>{data.hello}</div>;
    }}
  </Query>
);

export default App;
