import React, { useState, useEffect } from 'react';
import CustomMaterialTable from '../components/MaterialTable';
import CustomModal from '../components/Modal';

const StudentDetails = ({ drawerOpen }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    fetchStudentData();
  }, []); // Fetch data only once when the component mounts

  const fetchStudentData = async () => {
    try {
      const response = await fetch('http://localhost:3001/register');
      if (!response.ok) {
        throw new Error('Failed to fetch student data');
      }
      const data = await response.json();
      setStudentData(data);
    } catch (error) {
      console.error('Error fetching student data:', error.message);
    }
  };

  const columns = [
    { title: 'ID', field: 'Id' },
    { title: 'First Name', field: 'studentFirstName' },
    { title: 'Last Name', field: 'lastName' },
    {
      title: 'View Details',
      render: rowData => (
        <button onClick={() => handleViewDetails(rowData)}>View</button>
      ),
    },
    { 
      title: 'Generate Payment Link', 
      render: rowData => (
        <button onClick={() => handleGenerateLink(rowData)}>Generate</button>
      )
    },
    { 
      title: 'Payment Status', 
      render: rowData => (
        <button 
          style={{
            backgroundColor: rowData.paymentStatus === 'Paid' ? 'green' : 'red',
            color: 'white',
            cursor: 'default',
            borderRadius: '5px', // Round edges
            border: 'none', // Remove border
            padding: '4px 8px' // Adjust padding
          }}
        >
          {rowData.paymentStatus}
        </button>
      )
    },
  ];

  const handleViewDetails = rowData => {
    setSelectedRow(rowData);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleGenerateLink = rowData => {
    // Logic to generate payment link
    console.log('Generate payment link for ID:', rowData.Id);
    // Implement your logic to generate the payment link here
  };

  return (
    <div style={{ maxWidth: drawerOpen ? 'calc(100% - 240px)' : '100%' }}>
      <CustomMaterialTable
        columns={columns}
        data={studentData}
        options={{
          sorting: true,
          search: true,
          paging: true,
          pageSize: 10,
          pageSizeOptions: [5, 10, 20],
          toolbarButtonAlignment: 'left',
          headerStyle: {
            backgroundColor: '#f2f2f2',
            fontWeight: 'bold',
          },
        }}
      />
      <CustomModal
        show={modalOpen}
        onHide={handleCloseModal}
        title="Full Details"
      >
        {selectedRow && (
          <div>
            <p>ID: {selectedRow.Id}</p>
            <p>First Name: {selectedRow.studentFirstName}</p>
            <p>Middle Name: {selectedRow.middleName}</p>
            <p>Last Name: {selectedRow.lastName}</p>
            <p>Date of Birth: {selectedRow.dob}</p>
            <p>Class: {selectedRow.STD}</p>
            <p>Dicision: {selectedRow.division}</p>
            <p>Guardian Name: {selectedRow.guardianName}</p>
            <p>Guardian Mobile: {selectedRow.guardianMobile}</p>
            <p>Alternate Mobile Number: {selectedRow.alternateMobile}</p>
            <p>Pickup Adress: {selectedRow.pickupAddress}</p>
            <p>Drop Adress: {selectedRow.dropAddress}</p>
            <p>Emergency Mobile Number: {selectedRow.emergencyMobile}</p>
            
            {/* Add more fields as needed... */}
          </div>
        )}
      </CustomModal>
    </div>
  );
};

export default StudentDetails;
