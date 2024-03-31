// import { useState } from 'react';
// import PropTypes from 'prop-types';

// function ArrayToTable({ array }) {
//   const [page, setPage] = useState(1);
//   const elementsPerPage = 16;

//   const totalPages = Math.ceil(array.length / elementsPerPage);
//   const startIndex = (page - 1) * elementsPerPage;
//   const endIndex = Math.min(startIndex + elementsPerPage, array.length);

//   const handleChangePage = (newPage) => {
//     setPage(newPage);
//   };

//   // Split the array into chunks of 4
//   const chunks = [];
//   for (let i = startIndex; i < endIndex; i += 4) {
//     chunks.push(array.slice(i, i + 4));
//   }

//   return (
//     <div>
//       <table>
//         <tbody>
//           {chunks.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               {row.map((cell, cellIndex) => (
//                 <td key={cellIndex}>{cell}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div>
//         {page > 1 && (
//           <button onClick={() => handleChangePage(page - 1)}>Previous</button>
//         )}
//         {page < totalPages && (
//           <button onClick={() => handleChangePage(page + 1)}>Next</button>
//         )}
//       </div>
//       <div>Page {page} of {totalPages}</div>
//     </div>
//   );
// }

// ArrayToTable.propTypes = {
//   array: PropTypes.array.isRequired,
// };

// export default ArrayToTable;


//correct version
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// function ArrayToTable({ pictureArray }) {
//   const [page, setPage] = useState(1);
//   const elementsPerPage = 16;

//   const totalPages = Math.ceil(pictureArray.length / elementsPerPage);
//   const startIndex = (page - 1) * elementsPerPage;
//   const endIndex = Math.min(startIndex + elementsPerPage, pictureArray.length);

//   const handleChangePage = (newPage) => {
//     setPage(newPage);
//   };

//   // Split the array into chunks of 4
//   const chunks = [];
//   for (let i = startIndex; i < endIndex; i += 4) {
//     chunks.push(pictureArray.slice(i, i + 4));
//   }

//   return (
//     <div>
//       <table>
//         <tbody>
//           {chunks.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               {row.map((picture, cellIndex) => (
//                 <td key={cellIndex}><img src={picture} alt={`Picture ${cellIndex}`} style={{ width: '200px', height: '200px' }} /></td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div>
//         {page > 1 && (
//           <button onClick={() => handleChangePage(page - 1)}>Previous</button>
//         )}
//         {page < totalPages && (
//           <button onClick={() => handleChangePage(page + 1)}>Next</button>
//         )}
//       </div>
//       <div>Page {page} of {totalPages}</div>
//     </div>
//   );
// }

// ArrayToTable.propTypes = {
//   pictureArray: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// export default ArrayToTable;
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ArrayToTable({ pictureArray }) {
  const [page, setPage] = useState(1);
  const elementsPerPage = 16;

  const totalPages = Math.ceil(pictureArray.length / elementsPerPage);
  const startIndex = (page - 1) * elementsPerPage;
  const endIndex = Math.min(startIndex + elementsPerPage, pictureArray.length);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  // Split the array into chunks of 4
  const chunks = [];
  for (let i = startIndex; i < endIndex; i += 4) {
    chunks.push(pictureArray.slice(i, i + 4));
  }

  return (
    <div>
      <table>
        <tbody>
          {chunks.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((picture, cellIndex) => (
                <td key={cellIndex}><img src={picture} alt={`Picture ${cellIndex}`} style={{ width: '200px', height: '200px' }} /></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {page > 1 && (
          <button onClick={() => handleChangePage(page - 1)}>Previous</button>
        )}
        {page < totalPages && (
          <button onClick={() => handleChangePage(page + 1)}>Next</button>
        )}
      </div>
      <div>Page {page} of {totalPages}</div>
    </div>
  );
}

ArrayToTable.propTypes = {
  pictureArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ArrayToTable;
