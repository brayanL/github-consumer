import React from "react";
import MUIDataTable from 'mui-datatables';
import useAxios from "axios-hooks";
import CustomPanel from "../common/CustomPanel";

interface RepositoriesProps {
  url: string,
}

export default function Repositories({ url }: RepositoriesProps): JSX.Element {
  const [{ data: repos, error, loading }] = useAxios(url);
  console.log('repos: ', repos);

  return (
    <CustomPanel title="Repositories">
      <MUIDataTable
        title=""
        data={repos}
        columns={[
          { label: 'Name', name: 'name' },
          { label: 'Private', name: 'private' },
          { label: 'URL', name: 'html_url' },
          { label: 'Description', name: 'description' },
        ]}
      />
    </CustomPanel>
  );
}
