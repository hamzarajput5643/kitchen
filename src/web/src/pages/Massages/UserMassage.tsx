import { useEffect, useRef } from "react";
import axios from "axios";
import $ from 'jquery';
import "datatables.net";
import "./UserMassage.scss";

// Assuming you are using the same structure for the data
interface Category {
  serialNumber: number;
  category: string;
}

function UserMassage() {
  const tableRef = useRef<HTMLTableElement>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);

      const categoriesWithSerial: Category[] = response.data.map(
        (category: any, index: number) => {
          return {
            ...category,
            serialNumber: index + 1,
          };
        }
      );

      if ($.fn.DataTable.isDataTable(tableRef.current!)) {
        const dataTable = $(tableRef.current!).DataTable();
        dataTable.clear().rows.add(categoriesWithSerial).draw();
      } else {
        $(tableRef.current!).DataTable({
          data: categoriesWithSerial,
          columns: [
            { data: "serialNumber", title: "Serial Number" },
            { data: "category", title: "Category 1" },
            { data: "category", title: "Category 2" },
            { data: "category", title: "Category 3" },
            { data: "category", title: "Category 4" },
            { data: "category", title: "Category 5" },
            { data: "category", title: "Category 6" },
            { data: "category", title: "Category 7" },
            { data: "category", title: "Category 8" },
            { data: "category", title: "Category 9" },
            { data: "category", title: "Category 10" },
            { data: "category", title: "Category 11" },
            {
              data: null,
              title: "Actions",
              render: (data: Category) => `
                <div style="display: flex;">
                  <button class="bg-yellow-500 p-2 edit-button">Edit</button>&nbsp;
                  <button class="bg-red-500 p-2 delete-button">Delete</button>
                </div>`,
              createdCell: (td: Node, cellData: any, rowData: Category) => {
                const editButton = $(td).find(".edit-button");
                const deleteButton = $(td).find(".delete-button");

                editButton.on("click", () => {
                  // handleItemClick(rowData);
                });

                deleteButton.on("click", () => {
                  if (window.confirm("Are You Sure To Delete Data ??")) {
                    // handleItemDelete(rowData.id);
                  }
                });
              },
            },
          ],
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {
      if ($.fn.DataTable.isDataTable(tableRef.current!)) {
        const dataTable = $(tableRef.current!).DataTable();
        dataTable.destroy();
      }
    };
  }, []);

  return (
    <div>
      <div className="UserMassage-box">
        <div className="UserMassage-header">
          <h4>User Massage</h4>
        </div>
        <div className="UserMassage-body">
          <div className="pt-2">
            <div className="page-content fade-in-up">
              <div className="ibox">
                <div className="ibox-body">
                  <div className="table-responsive">
                    <table
                      ref={tableRef}
                      className="table table-striped table-bordered table-hover"
                      cellSpacing="0"
                      width="100%"
                    >
                      <thead>
                        <tr>
                          <th>form User ID</th>
                          <th>form User Name</th>
                          <th>form User Display</th>
                          <th>form User Email</th>
                          <th>To User ID</th>
                          <th>To User Name</th>
                          <th>To User Email</th>
                          <th>Product Order ID</th>
                          <th>Menu Item ID</th>
                          <th>Subjects</th>
                          <th>Last Sent</th>
                          <th>Massage Count</th>
                          <th>Read Flag</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMassage;
