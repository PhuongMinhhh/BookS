'use client';
import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";

import {Table} from 'flowbite-react'
const ManageBook = () => {
    const [allBooks, setAllBooks] =useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setAllBooks(data));
    }, []);

    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:3000/delete-book/${id}`,{
            method: "DELETE",
        }).then(res => res.json()).then(data => {
            alert("Deleted ")
            window.location.reload();
        })
    }
    const handlebookSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookPdfUrl = form.bookPdfUrl.value;

        const bookObj = {
            bookTitle, authorName, imageURL, category, bookDescription, bookPdfUrl
        }
        console.log(bookObj)
        fetch("http://localhost:3000/update-book/", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body : JSON.stringify(bookObj)
        }).then(res => res.json()).then(data => {
            console.log(data)
            alert('Book uploaded successfully');
            form.reset();
        })
    }
  return (


      <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
              <div>
                  <h2 className="text-2xl font-semibold leading-tight text-blue-700 uppercase">Manage Your Book </h2>
              </div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div
                      className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                  >
                      <table className="min-w-full leading-normal ">
                          <thead className="text-center">
                          <tr>
                              <th
                                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                              >
                                  NO.
                              </th>
                              <th
                                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                              >
                                  Book title
                              </th>
                              <th
                                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                              >
                                  Author Name
                              </th>
                              <th
                                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                              >
                                  Description
                              </th>
                              <th
                                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                              >
                                  Category
                              </th>
                              <th
                                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
                              >
                                  Price
                              </th>
                              <th
                                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
                              >
                                  Action
                              </th>
                              <th
                                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                              ></th>
                          </tr>
                          </thead>
                          {
                              allBooks.map((book, index) =>
                                  <tbody key={book._id}>
                                  <tr>
                                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <div className="flex">
                                              <div className="flex-shrink-0 w-10 h-10">
                                                  <p className="text-gray-600 whitespace-no-wrap">
                                                      {index + 1}
                                                  </p>
                                              </div>
                                          </div>
                                      </td>
                                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <p className="text-gray-900 whitespace-no-wrap">{book.bookTitle}</p>

                                      </td>
                                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                                          <p className="text-gray-600 whitespace-no-wrap">{book.authorName}</p>
                                      </td>
                                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                                          <p className="text-gray-600 whitespace-no-wrap cut_text">{book.bookDescription}</p>
                                      </td>
                                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                                          <p className="text-gray-600 whitespace-no-wrap cut_text">{book.category}</p>
                                      </td>
                                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <span
                    className="relative inline-block px-3  py-1 font-semibold text-green-900 leading-tight"
                >
                  <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  ></span>
                  <span className="relative">$102</span>
                </span>
                                      </td>
                                      <td
                                          className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center"
                                      >
                                          <button
                                              type="button"
                                              className="inline-block text-gray-500 hover:text-gray-700 "
                                          >
                                              {/*<svg*/}
                                              {/*    className="inline-block h-6 w-6 fill-current"*/}
                                              {/*    viewBox="0 0 24 24"*/}
                                              {/*>*/}
                                              {/*    <path*/}
                                              {/*        d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"*/}
                                              {/*    />*/}
                                              {/*</svg>*/}
                                              <Link className="mr-5" to={`/admin/dashboard/edit-book/${book._id}`}>
                                                  Edit
                                              </Link>
                                              <button onClick={() => handleDelete(book._id)}
                                                      className="bg-red-500 px-2  text-white rounded-full">
                                                  Delete
                                              </button>
                                          </button>
                                      </td>
                                  </tr>

                                  </tbody>
                              )
                          }

                      </table>
                  </div>
              </div>
          </div>
      </div>


  )
}

export default ManageBook
