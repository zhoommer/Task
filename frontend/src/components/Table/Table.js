import React from "react";
import "./Table.css";
import { DataGrid } from "@mui/x-data-grid";
import { FaSearch, FaFilter } from "react-icons/fa";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "socialMediaLink", headerName: "Sosyal Medya Linki", width: 350 },
  { field: "socialMediaName", headerName: "Sosyal Medya Adı", width: 150 },
  {
    field: "describtion",
    headerName: "Açıklama",
    type: "number",
    width: 450,
  },
];

const rows = [
  { id: 1, socialMediaName: "Instagram", socialMediaLink: "instagram.com/mobilerast/", describtion: "We'll help you to finish your development project successfully." },
  { id: 2, socialMediaName: "Linkedin", socialMediaLink: "tr.linkedin.com/company/rastmobile", describtion: "Hire  vetted developers from Rast Mobile to scale up your tech projects." },
  { id: 3, socialMediaName: "Behance", socialMediaLink: "behance.net/rastmobile", describtion: "Software Development Agency Rast Mobile Information Technology Ltd." },
  { id: 4, socialMediaName: "Twitter", socialMediaLink: "twitter.com/rastmobile", describtion: "Software Development Agency Rast Mobile Information Technology Ltd." },
];

const Table = () => {

    const openForm = () => {
        let form = document.querySelector('.main-right');

        form.style.display = "block";
    }
  return (
    <div className="table">
      <div className="table-header">
       <div>
        <input type="search" placeholder="Search objects..."/>
        <button className="search-icon"><FaSearch  color="#fff" size={15}/></button>

        <button className="filter-icon"><FaFilter color="blueviolet"/></button>
        </div> 

        <div>
            <button className="add-new-account" onClick={openForm}>+ Yeni Hesap Ekle</button>
        </div>
      </div>

      <div>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 4 },
            },
          }}
          pageSizeOptions={[4, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Table;
