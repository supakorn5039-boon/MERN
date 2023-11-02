import React from "react";

export default function AdminRoutes() {
  return (
    <div className="app">
      <SideBar />
      <main className="content">
        <HeaderBar />
        <div className="content_body">
          <Box m="20px">
            <Routes>
              <Route path="/admin/viewtable" element={<FormProduct />} />
              <Route path="/edit/:id" element={<FormEditProducts />} />
            </Routes>
          </Box>
        </div>
      </main>
    </div>
  );
}
