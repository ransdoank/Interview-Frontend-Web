import React, { useEffect } from "react";
import TablePage from "./table";

const UserManagement = (props) => {
  const { content, setContent, setHeaderMenu } = props.data;

  useEffect(() => {
  }, []);

  const functionContent = () => {
    switch (content) {
      case 0:
        return (
          <TablePage
            data={{
              setContent,
              setHeaderMenu,
            }}
          />
        );
      case 1:
        return (
          <>none</>
        );

      default:
        return (
          <TablePage
            data={{
              setContent,
              setHeaderMenu,
            }}
          />
        );
    }
  };

  return functionContent();
};

export default UserManagement;
