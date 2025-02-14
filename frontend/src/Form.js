import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    semester: '',
  });
  const [files, setFiles] = useState([]);

  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData, files);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Examination Form</h1>
      <form className="space-y-4 bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
        <input
          className="block border border-gray-300 rounded py-2 px-4 w-full"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="block border border-gray-300 rounded py-2 px-4 w-full"
          type="text"
          name="branch"
          placeholder="Branch"
          value={formData.branch}
          onChange={handleChange}
        />
        <input
          className="block border border-gray-300 rounded py-2 px-4 w-full"
          type="text"
          name="semester"
          placeholder="Semester"
          value={formData.semester}
          onChange={handleChange}
        />
        <div className="border-dashed border-2 border-gray-400 p-4">
          <input {...useDropzone({ onDrop: handleDrop })} className="hidden" />
          {files.length === 0 ? (
            <p>Drag & drop files here, or click to upload.</p>
          ) : (
            <ul>{files.map((file) => <li key={file.path}>{file.name}</li>)}</ul>
          )}
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
